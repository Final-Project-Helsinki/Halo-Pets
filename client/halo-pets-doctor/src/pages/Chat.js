import React from 'react'
import AppBar from '../components/AppBar'
import useStyles from '../helpers/style'


export default function Chat() {

  const classes = useStyles()

  return(
    <>
      <AppBar/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <h1 style={{position: 'relative', left: 300}}>Chat Page</h1>
      </main>
    </>
  )

}