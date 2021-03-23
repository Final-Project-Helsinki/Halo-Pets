import React, { useState } from 'react'
import {
  FormControl,
  Button,
  Grid,
  Typography,
  TextField,
  Avatar,
  Snackbar,
  CircularProgress
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getDoctor } from '../store/actions/doctorAction'
import gridUseStyles from '../helpers/gridStyles'
import MuiAlert from '@material-ui/lab/Alert';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function LoginPage() {
  const classes = gridUseStyles()
  const [formValue, setForm] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (e) => {
    let { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const data = await dispatch(getDoctor(formValue))
      console.log(data, '<<< data');
      if (Object.keys(data)[0] === 'msg') {
        setError('Invalid email/password')
        setOpenSnackbar(true)
      } else {
        // localStorage.setItem('email', formValue.email)
        history.push({ pathname: '/chatroom', state: data.access_token })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const { loading } = useSelector(state => ({
    loading: state.doctorReducer.loading
  }))

  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      // setLoading(true);
      // timer.current = window.setTimeout(() => {
      //   setSuccess(true);
      //   setLoading(false);
      // }, 5000);
    } else {
      setSuccess(true);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container className={[classes.container, classes.content]} style={{backgroundColor: '#16c79a'}}>
          <Typography variant="h2" className={classes.text}>Halo Pets Doctor</Typography>
        </Grid>
      </Grid>
      {
        error ? (
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}
          className={classes.snackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity="error">
              {error}
            </Alert>
          </Snackbar>
        ) : <p></p>
      }
      <Grid item xs={12}>
        <Grid container className={[classes.container, classes.content]}>
          <Grid item xs={12} className={[classes.center, classes.control]}>
            <Grid container direction="column" alignItems="center">
              <Grid container item xs={3}>
                <FormControl fullWidth={true} size="medium" margin="dense">
                  <TextField variant="outlined" label="Email" color="primary" aria-describedby="my-helper-text" id="email" name="email" onChange={handleChange} value={formValue.email} type="email"/>
                </FormControl>
              </Grid>
              <Grid container item xs={3}>
                <FormControl fullWidth={true} size="large" margin="dense">
                  <TextField variant="outlined" label="Password" color="primary" aria-describedby="my-helper-text" id="password" name="password" onChange={handleChange} value={formValue.password} type="password"/>
                </FormControl>
              </Grid>
              <Grid item xs={1}>
                {/* <FormControl fullWidth={true} style={{ marginTop: 8 }}>
                  <Button variant="contained" className={classes.button} onClick={handleSubmit}>Login</Button>
                </FormControl> */}
                <div className={classes.wrapper}>
                  <FormControl fullWidth={true}>
                    <Button variant="contained" className={[buttonClassname, classes.button]} onClick={(e) => { handleButtonClick(e); handleSubmit(e);}} style={{ marginRight: 8 }} disabled={loading}>Login</Button>
                  </FormControl>
                  {loading && <CircularProgress size={24} thickness={4.6} className={classes.buttonProgress} />}
                </div>
              </Grid>
            </Grid>
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

  // return (
  //   <Grid container>
  //     <Grid item xs={12}>
  //       <Grid container style={{height: '33vh', justifyContent: 'center', alignItems: 'center'}}>
  //         <Typography variant="h4">Welcome Doctor Halo Pet</Typography>
  //       </Grid>
  //     </Grid>
  //     <Grid item xs={12}>
  //       <Grid container style={{height: '33vh', justifyContent: 'center', alignItems: 'center'}}>
  //       <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
  //         <FormControl>
  //           <InputLabel>Email address</InputLabel>
  //           <Input aria-describedby="my-helper-text" name="email" onChange={handleChange} value={formValue.email} type="email" />
  //         </FormControl>
  //         <br />
  //         <FormControl>
  //           <InputLabel>Password</InputLabel>
  //           <Input aria-describedby="my-helper-text" name="password" onChange={handleChange} value={formValue.password} type="password" />
  //         </FormControl>
  //         {
  //           error ? <p>{error}</p> : <p></p>
  //         }
  //         <Button variant="contained" type="button" color="secondary" onClick={handleSubmit}>Login</Button>
  //       </Box>
  //       </Grid>
  //     </Grid>
  //     <Grid item xs={12}>
  //         <Grid container style={{height: '33vh', justifyContent: 'center', alignItems: 'center'}}>
  //           <Typography variant="h4">Bottom Grid</Typography>
  //         </Grid>
  //     </Grid>      
      
  //   </Grid>
  // )
}