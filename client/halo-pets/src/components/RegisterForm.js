import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Paper,
  FormControl,
  InputLabel,
  Input,
} from '@material-ui/core'
import { signup } from '../helpers/auth'


export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

  function handleChange(e) {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  async function handleSubmit() {
    try {
      const data = await signup(email, password)
      console.log(data)
      history.push('/home')
    } catch (error) {
      // console.log(error);
      setError(error.message)
    }
  }

  return (
    <Paper>
      <div style={{ minWidth: 350, height: 'auto' }}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" name="email" onChange={handleChange} value={email} type="email"/>
        </FormControl>
        <br />
        <br />
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" name="password" onChange={handleChange} value={password} type="password"/>
        </FormControl>
        {
          error ? <p>{error}</p> : <p></p>
        }
        <button type="button" onClick={handleSubmit}>Register</button>
      </div>
    </Paper>
  )

}