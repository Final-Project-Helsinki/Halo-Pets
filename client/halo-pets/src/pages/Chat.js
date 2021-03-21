import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

export default function Chat() {
  const [user, setUser] = useState(auth().currentUser)
  const [chats, setChats] = useState([])
  const [content, setContent] = useState('')
  const [readError, setreadError] = useState(null)
  const [writeError, setwriteError] = useState(null)
  const location = useLocation()
  const classes = useStyles()


  useEffect(() => {
    console.log(location.state)
    setreadError(null)
    async function fetchMessages() {
      try {
        const roomId = db.ref("chats")
        roomId.child(`${location.state.id}`).on("value", snapshot => {
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
    fetchMessages();
  }, []);

  async function handleSubmit(e) {
    console.log(location.state.id)
    e.preventDefault(); 
    setwriteError(null) 
    try { 
      const roomId = db.ref("chats") 
      await roomId.child(`${location.state.id}`).push({
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
    console.log('masuk')
    setContent(e.target.value)
  }

  return (
    <div className={classes.root}>
      <AppBar/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <List>
        {chats.map(chat => {
          return (
            <ListItem key={chat.timestamp}>
              <ListItemText style={{textAlign: chat.role === 'client' ? 'right': 'left'}}>
                <Box>
                  <Typography variant="h6">{chat.content}</Typography>
                </Box>
              </ListItemText>
            </ListItem>
          )
        })}
        </List>
        <Grid container>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <FormControl style={{width: '95vh'}}>
                <TextField size="small" variant="outlined" value={content} onChange={handleChange}></TextField>
              </FormControl>
              {readError ? <p>{writeError}</p> : null}
              <Button size="large" type="submit">Send</Button>
            </form>
          </Grid>
        </Grid>
    </main>
    </div>
  )
}