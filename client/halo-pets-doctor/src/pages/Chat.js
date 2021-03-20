import React, { useState } from 'react'
import useStyles from '../helpers/style'
import AppBar from '../components/AppBar'
import {
  Button,
  TextField,
  FormControl,
  List,
  ListItemText
} from '@material-ui/core'

export default function Chat() {
  const classes = useStyles()
  const [message, setMessage] = useState('')
  const [sentMessage, setSentMessage] = useState('')
  const [messages, setMessages] = useState([])

  const handleMessage = (e) => {
    setMessage(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSentMessage(message)
    setMessages([...messages, message])
    setMessage('')
  }
  return (
    <div className={classes.root}>
      <AppBar/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
          <List>
            {
              messages.map(message => <ListItemText>{message}</ListItemText> )
            }
          </List>
          <form className={classes.root} onSubmit={handleSubmit} style={{position: 'fixed', bottom: 10}}>
            <FormControl fullWidth={true}>
              <TextField value={message} onChange={(e) => handleMessage(e.target.value)} size="small" variant="outlined"/>
            </FormControl>
            <Button type="submit" size="large">Send</Button>
          </form>
      </main>
    </div>
  )
}