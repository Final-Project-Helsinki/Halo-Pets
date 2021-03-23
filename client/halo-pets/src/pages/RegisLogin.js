import React from 'react'
import LoginForm from '../components/LoginForm'
import RegisterModal from '../components/RegisterModal'
import gambar from '../assets/7620.jpg'
import logo from '../assets/logo.png'
import {
  Typography,
  Grid,
  CardMedia
} from '@material-ui/core'
import gridUseStyles from '../helpers/gridStyles'

export default function RegisLoginPage() {
  const classes = gridUseStyles()

  return (
    <Grid container className={classes.root} style={{ backgroundColor: 'white', height: '100vh' }}>
      <Grid item xs={12}>
        <Grid container className={[classes.container, classes.content]} style={{backgroundColor: '#16c79a', color: '#f8f1f1', height: 125}}>
          <img src={logo} alt="logo" style={{height: 100, position: 'absolute', left: 50  }}></img>
          <Grid>
            <Typography variant="h3" style={{textAlign: 'center'}}>Hi Pets</Typography>
            <Typography variant="p">Make sure your pet is healthy !</Typography>
          </Grid>
        </Grid>
      </Grid> 

      <Grid item xs={12} style={{display: 'flex'}}>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <LoginForm />
            <Grid item xs={12} className={[classes.center, classes.control]} style={{ display: 'flex', justifyContent: 'center'}}>
              <Typography variant="h6" className={classes.text3}>Didn't have an account? <RegisterModal /> </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
            <CardMedia>
              <img src={gambar} style={{height: '30em'}} alt="veterinarian"/>
            </CardMedia>
        </Grid>
      </Grid>
    </Grid>
  )
}