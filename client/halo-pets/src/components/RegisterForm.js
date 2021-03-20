import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Paper,
  FormControl,
  InputLabel,
  Input,
  Button
} from '@material-ui/core'
import { signup } from '../helpers/auth'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/userAction'

export default function RegisterForm() {
  const dispatch = useDispatch()

  const [formRegister, setFormRegister] = useState({})
  const [error, setError] = useState('')
  const history = useHistory()

  function handleChange(e) {
    let { name, value } = e.target;
    setFormRegister((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit() {
    try {
      const data = await signup(formRegister.email, formRegister.password)
      console.log(data)
      await dispatch(register(formRegister))
      history.push('/home')
    } catch (error) {
      // console.log(error);
      setError(error.message)
    }
  }

  // useEffect(() => {
  //   dispatch(register(formRegister))
  // }, [dispatch, formRegister])

  return (
    <Paper>
      <div style={{ minWidth: 350, height: 'auto' }}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Name</InputLabel>
          <Input aria-describedby="my-helper-text" name="name" onChange={handleChange} value={formRegister.name} type="text"/>
        </FormControl>
        <br />
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input aria-describedby="my-helper-text" name="email" onChange={handleChange} value={formRegister.email} type="email"/>
        </FormControl>
        <br />
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input aria-describedby="my-helper-text" name="password" onChange={handleChange} value={formRegister.password} type="password"/>
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Phone Number</InputLabel>
          <Input aria-describedby="my-helper-text" name="phoneNumber" onChange={handleChange} value={formRegister.phoneNumber} type="text"/>
        </FormControl>
        {
          error ? <p>{error}</p> : <p></p>
        }
        <Button variant="contained" type="button" color="secondary" onClick={handleSubmit}>Register</Button>
      </div>
    </Paper>
  )

}