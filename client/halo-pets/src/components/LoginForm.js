import React, { useState, useEffect } from 'react'
import {
  FormControl,
  Button,
  Grid,
  TextField,
} from '@material-ui/core'
import { signin } from '../helpers/auth'
import { useHistory } from 'react-router';
import { login } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';
import useStyles from '../helpers/style'



export default function LoginForm() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [error, setError] = useState('');
  const history = useHistory()
  const [loginForm, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const status = e.target.id
    const value = e.target.value
    console.log(status)
    switch (status) {
      case 'email':
        setForm({ ...loginForm, email: value })
        break
      case 'password':
        setForm({ ...loginForm, password: value })
        break
      default:
        setForm({
          email: '',
          password: ''
        })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await signin(loginForm.email, loginForm.password)
      console.log(data)
      await dispatch(login(loginForm))
      history.push('/home')
    } catch (error) {
      setError(error.message)
      alertError(error.message)
    }
  }
  const alertError = async (err) => {
    alert(err)
  }

  // useEffect(() => {
  //   dispatch(register(formRegister))
  // }, [dispatch, formRegister])

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={2}>
        <FormControl fullWidth={true} size="medium" margin="dense">
          <TextField variant="outlined" label="Email" color="primary" aria-describedby="my-helper-text" id="email" name="email" onChange={handleChange} value={loginForm.email} type="email"/>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth={true} size="large" margin="dense">
          <TextField variant="outlined" label="Password" color="primary" aria-describedby="my-helper-text" id="password" name="password" onChange={handleChange} value={loginForm.password} type="password"/>
        </FormControl>
      </Grid>
      <br/>
      {
        error ? <p>{error}</p> : <p></p>
      }
      <Grid item xs={1}>
        <FormControl fullWidth={true}>
            <Button variant="contained" className={classes.button}  onClick={handleSubmit}>Login</Button>
        </FormControl>
      </Grid>
    </Grid>
  )

}