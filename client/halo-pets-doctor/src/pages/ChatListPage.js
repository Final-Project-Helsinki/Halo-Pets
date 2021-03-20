import React from 'react'
import AppBar from '../components/AppBar'
import useStyles from '../helpers/style'
import {
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'


export default function Chat() {

  const classes = useStyles()

  return(
    <>
      <AppBar/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <List>
          <ListItem button>
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
          </ListItem>
        </List>
      </main>
    </>
  )

}