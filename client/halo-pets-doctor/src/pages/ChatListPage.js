import React from 'react'
import AppBar from '../components/AppBar'
import useStyles from '../helpers/style'
import {
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getRoom } from "../store/actions/chatAction";

export default function Chat() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [room, setRoom] = useState([])
  const history = useHistory()
  const location = useLocation()

  useEffect(async () => {
    console.log(location.state)
    try {
      const data = await dispatch(getRoom())
      setRoom(data)
      console.log(localStorage.getItem('access_token'))
    } catch (error) {
      console.log(error, 'ini error');
    }
  }, [dispatch])

  function toChat(id) {
    console.log(id, 'id room')
    history.push({ pathname: '/chat', state: id })
  }

  return (
    <>
      <AppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <List>
          {
            room === [] ?
              <div></div> :
              room.map(el => {
                return (
                  <ListItem button onClick={() => toChat(el.id)}>
                    <ListItemText>{el.User.name}</ListItemText>
                  </ListItem>
                )
              })
          }
          {/* <ListItem button>
            <ListItemText>User 1</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>User 2</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>User 3</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>User 4</ListItemText>
          </ListItem> */}
        </List>
      </main>
    </>
  )

}