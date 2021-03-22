import React from 'react'
import LoginModal from '../components/LoginModal'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'
import RegisterModal from '../components/RegisterModal'
import {
  Typography,
  Grid,
  Avatar
} from '@material-ui/core'
import gridUseStyles from '../helpers/gridStyles'


export default function RegisLoginPage() {

  const classes = gridUseStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container className={[classes.container, classes.content]} style={{backgroundColor: '#16c79a'}}>
          <Typography variant="h2" className={classes.text}>Halo Pets</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={[classes.center, classes.control]}>
            <LoginForm/>
          </Grid>
          <Grid item xs={12} className={[classes.center, classes.control]} style={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h6" className={classes.text3}>Didn't have an account? <RegisterModal/> </Typography>  
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{backgroundColor: '#11698e'}}>
        <Grid container className={classes.content} style={{justifyContent: 'center', alignItems: 'center'}}>
          <Grid item={true} xs={2}>
            <Grid container style={{justifyContent: 'center', alignItems: 'center'}}>
              <Avatar component="div" style={{height: '20vh', width: '20vh'}} src="https://lh3.googleusercontent.com/xcjoVGcqrQClcqI1uXacQnGNaKoOLuzVPdeYQ2C32rz1845IxIpeyLmBJGDjo-T9DlH-THM=s128" width="100%" />
            </Grid> 
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h4" className={classes.text}>About us</Typography>
                <Typography variant="p" className={classes.text}>
                  Your pet need health attention too.Halo pet's answer your need to have personal veterinarian close to you.
                  You could also adopt cute pet's that you want to add to your family, or you can give your pet to someone willing to take care with full love.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item={true} xs={2}>
            <Grid container style={{justifyContent: 'center', alignItems: 'center'}}>
              <Avatar component="div" style={{height: '20vh', width: '20vh'}} src="https://lh3.googleusercontent.com/xcjoVGcqrQClcqI1uXacQnGNaKoOLuzVPdeYQ2C32rz1845IxIpeyLmBJGDjo-T9DlH-THM=s128" width="100%" />
            </Grid> 
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}