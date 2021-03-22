import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { auth } from "../services/firebase";
import { db } from "../services/firebase"
import {
  List,
  ListItem,
  Grid,
  ListItemText,
  Typography,
  Box,
  FormControl,
  TextField,
  Button
} from '@material-ui/core'
import AppBar from '../components/AppBar'
import useStyles from '../helpers/style'
import DrawerHeader from '../components/DrawerHeader'
import { getRoom } from '../store/actions/chatAction'

function timeConverter(UNIX_timestamp){ 
  var date = new Date(UNIX_timestamp); 
  var year = date.getFullYear(); 
  var month = ("0" + (date.getMonth() + 1)).substr(-2); 
  var day = ("0" + date.getDate()).substr(-2); 
  var hour = ("0" + date.getHours()).substr(-2); 
  var minutes = ("0" + date.getMinutes()).substr(-2);  
  return year + "-" + month + "-" + day + " " + hour + ":" + minutes; 
} 

export default function Chat() {
  const [user, setUser] = useState(auth().currentUser)
  const [chats, setChats] = useState([])
  const [content, setContent] = useState('')
  const [readError, setreadError] = useState(null)
  const [writeError, setwriteError] = useState(null)
  const location = useLocation()
  const classes = useStyles()
  const dispatch = useDispatch()
  const [RoomVideo, setRoomVideo] = useState([])



  useEffect(() => {
    console.log(location.state)
    setreadError(null)
    async function fetchMessages() {
      try {
        const roomId = db.ref("chats")
        roomId.child(`${location.state}`).on("value", snapshot => {
          let chatsFirebase = [];
          snapshot.forEach((snap) => {
            chatsFirebase.push(snap.val());
          });
          setChats(c => chatsFirebase)
        });
      } catch (error) {
        setreadError(error.message)
      }
    }
    const url = 'https://api.daily.co/v1/rooms';
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer becea18a103ea46caf68daad57ed840de8cfadbedc137db19d824b42719b3b63'
      }
    };
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setRoomVideo(json.data)
      })
      .catch(err => console.error('error:' + err));
    fetchMessages();
  }, []);

  async function handleSubmit(e) {
    console.log(location.state)
    e.preventDefault(); 
    setwriteError(null) 
    try { 
      const roomId = db.ref("chats") 
      await roomId.child(`${location.state}`).push({
        content, 
        timestamp:Date.now(), 
        uid: user.uid, 
        role:'client' 
      }); 
      setContent('') 
    } catch (error) { 
      setwriteError(error.message) 
    } 
  }
  function handleChange(e) {
    setContent(e.target.value)
  }

  const vidCall = async () => {
    console.log('masuk gan')
    console.log(RoomVideo, 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx')
    console.log(location.state, 'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS');
    let find = false
      const x = await dispatch(getRoom(location.state))
      for (let i of RoomVideo) {
        if (+x.id === +i.name) {
          find = true
          console.log(i,'sapa sih lo???')
          break
        }
      }
      if (find === true) {
        const url = `https://halopets.daily.co/${location.state}`;
        const win = window.open(url, "_blank");
        win.focus();
      } else {
        const url = 'https://api.daily.co/v1/rooms';
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer becea18a103ea46caf68daad57ed840de8cfadbedc137db19d824b42719b3b63'
          },
          body: JSON.stringify({ name: `${location.state}` })
        };
        const response = await fetch(url, options)
        const data = await response.json()
        const win = window.open(data.url, "_blank");
        win.focus();
      }
  }

  return (
    <div className={classes.root}>
      <AppBar/>
      <main className={classes.content}>
        <DrawerHeader/>
        <List>
        {chats.map(chat => {
          return (
            <ListItem key={chat.timestamp}>
              <ListItemText style={{textAlign: chat.role === 'client' ? 'right': 'left'}}>
                <Box>
                  <Typography variant="h6">{chat.content}</Typography>
                  <Typography varian="h6">{timeConverter(chat.timestamp)}</Typography>
                </Box>
              </ListItemText>
            </ListItem>
          )
        })}
        </List>
        <Grid container style={{position: 'fixed', bottom: 10}}>
          <Grid item xs={12}>
            <form className={classes.root} onSubmit={handleSubmit}>
              <FormControl style={{width: "90%"}}>
                <TextField size="small" variant="outlined" value={content} onChange={handleChange}></TextField>
              </FormControl>
              {readError ? <p>{writeError}</p> : null}
              <Button style={{width: "10%"}} size="large" type="submit">Send</Button>
              <Button style={{width: "10%"}} size="large" type="button" onClick={vidCall}>Video Call</Button>
            </form>
          </Grid>
        </Grid>
    </main>
    </div>
  )
}