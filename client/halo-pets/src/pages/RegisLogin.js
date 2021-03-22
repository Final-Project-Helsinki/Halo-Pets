import React from 'react'
import LoginModal from '../components/LoginModal'
import RegisterForm from '../components/RegisterForm'
import {
  Typography,
  Grid,
  Paper
} from '@material-ui/core'
import gridUseStyles from '../helpers/gridStyles'

export default function RegisLoginPage() {

  const classes = gridUseStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container className={[classes.container, classes.content]}>
          <Typography variant="h3">Halo Pets</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={[classes.center, classes.control]}>
            <LoginModal/>
          </Grid>
          <Grid item xs={12} className={[classes.center, classes.control]}>
            <Typography variant="h6">Didn't have an account? Please register below</Typography>
          </Grid>
          <Grid item xs={12} className={[classes.center, classes.control]}>
            <RegisterForm/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={[classes.container, classes.content]}>
          <Typography variant="h4">Bottom Grid</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}