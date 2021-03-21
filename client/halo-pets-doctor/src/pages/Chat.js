import React, { useState, useEffect } from 'react'
import useStyles from '../helpers/style'
import AppBar from '../components/AppBar'
import {
  Button,
  TextField,
  FormControl,
  List,
  ListItemText,
  Typography,
  ListItem,
  Box,
  Grid
} from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import { auth } from "../services/firebase";
import { db } from "../services/firebase"

export default function Chat() {
  const classes = useStyles()
  const [user, setUser] = useState('test-temp-doctor')
  const [chats, setChats] = useState([])
  const [content, setContent] = useState('')
  const [readError, setreadError] = useState(null)
  const [writeError, setwriteError] = useState(null)
  const location = useLocation()

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
    fetchMessages();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setwriteError(null)
    try {
      const roomId = db.ref("chats")
      await roomId.child(`${location.state}`).push({
        content,
        timestamp: Date.now(),
        uid: user,
        role: 'doctor'
      });
      setContent('')
    } catch (error) {
      setwriteError(error.message)
    }
  }
  function handleChange(e) {
    setContent(e.target.value)
  }

  return (
    <div className={classes.root}>
      <AppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <List>
          {
            chats.map(chat => {
              return (
                <ListItem key={chat.timestamp}>
                  <ListItemText style={{textAlign: chat.role === 'doctor' ? 'right': 'left'}}>
                    <Box>
                      <Typography variant="h6">{chat.content}</Typography>
                    </Box>
                  </ListItemText>
                </ListItem>
              ) 
            })
          }
        </List>
        <Grid container style={{position: 'fixed', bottom: 10}}>
          <Grid item xs={12}>
            <form className={classes.root} onSubmit={handleSubmit}>
              <FormControl style={{width: "90%"}}>
                <TextField value={content} onChange={handleChange} size="small" variant="outlined" />
              </FormControl>
              {readError ? <p>{writeError}</p> : null}
              <Button style={{width: "10%"}} type="submit" size="large">Send</Button>
            </form>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}