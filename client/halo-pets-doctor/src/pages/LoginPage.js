import React, { useState } from 'react'
import {
  FormControl,
  Input,
  InputLabel,
  Container,
  Paper,
  Button,
  Grid,
  Typography,
  Box
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getDoctor } from '../store/actions/doctorAction'


export default function LoginPage() {

  const [formValue, setForm] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
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
      history.push({ pathname: '/chatlist', state: data.access_token })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container style={{height: '33vh', justifyContent: 'center', alignItems: 'center'}}>
          <Typography variant="h4">Welcome Doctor Halo Pet</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container style={{height: '33vh', justifyContent: 'center', alignItems: 'center'}}>
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <FormControl>
            <InputLabel>Email address</InputLabel>
            <Input aria-describedby="my-helper-text" name="email" onChange={handleChange} value={formValue.email} type="email" />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input aria-describedby="my-helper-text" name="password" onChange={handleChange} value={formValue.password} type="password" />
          </FormControl>
          {
            error ? <p>{error}</p> : <p></p>
          }
          <Button variant="contained" type="button" color="secondary" onClick={handleSubmit}>Login</Button>
        </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
          <Grid container style={{height: '33vh', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h4">Bottom Grid</Typography>
          </Grid>
      </Grid>      
      
    </Grid>
  )
}