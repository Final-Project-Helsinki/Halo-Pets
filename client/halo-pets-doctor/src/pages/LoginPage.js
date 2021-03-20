import React, { useState } from 'react'
import {
  FormControl,
  Input,
  InputLabel,
  Container,
  Paper,
  Button
} from '@material-ui/core'


export default function LoginPage() {

  const [formValue, setForm] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    let { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = () => {
    console.log(formValue)
  }

  return(
    <Container>
      <Paper style={{display: 'flex', flex: 1, justifyContent: 'center', position: 'relative', top: '30vh'}}>
        <div>
        <FormControl>
          <InputLabel>Email address</InputLabel>
          <Input aria-describedby="my-helper-text" name="email" onChange={handleChange} value={formValue.email} type="email"/>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input aria-describedby="my-helper-text" name="password" onChange={handleChange} value={formValue.password} type="password"/>
        </FormControl>
        {
          error ? <p>{error}</p> : <p></p>
        }
        <Button variant="contained" type="button" color="secondary" onClick={handleSubmit}>Login</Button>
        </div>
      </Paper>
    </Container>
  )
}