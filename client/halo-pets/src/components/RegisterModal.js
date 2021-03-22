import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Paper,
  FormControl,
  InputLabel,
  Input,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Typography,
  Link

} from '@material-ui/core'
import { signup } from '../helpers/auth'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/userAction'
import gridUseStyles from '../helpers/gridStyles'

export default function FormDialog() {
  const dispatch = useDispatch()

  const [formRegister, setFormRegister] = useState({})
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false);
  const history = useHistory()
  const classes = gridUseStyles()

  function handleChange(e) {
    let { name, value } = e.target;
    setFormRegister((prev) => ({ ...prev, [name]: value }));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(formRegister)
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
  const alertError = async (err) => {
    alert(err)
  }

  return (
    <div>
      <Link component="button" variant="h6" onClick={handleClickOpen} className={classes.text2}>
        Register
      </Link>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-login">Register</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Please Fill In the Form Below
            </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={formRegister.name}
            onChange={(e) =>handleChange(e)}
          />
      {/* <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input aria-describedby="my-helper-text" name="name" onChange={handleChange} value={formRegister.name} type="text"/>
      </FormControl> */}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={formRegister.email}
            onChange={(e) => handleChange(e)}
          />
      {/* <br />
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input aria-describedby="my-helper-text" name="email" onChange={handleChange} value={formRegister.email} type="email"/>
      </FormControl>
      <br /> */}
          <TextField
            autoFocus
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            value={formRegister.password}
            onChange={(e) => handleChange(e)}
          />
      {/* <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input aria-describedby="my-helper-text" name="password" onChange={handleChange} value={formRegister.password} type="password"/>
      </FormControl>
      <br/> */}
          <TextField
            autoFocus
            margin="dense"
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="number"
            fullWidth
            value={formRegister.phoneNumber}
            onChange={(e) => handleChange(e)}
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Register
            </Button>
          </DialogActions>
      {/* <FormControl>
        <InputLabel htmlFor="my-input">Phone Number</InputLabel>
        <Input aria-describedby="my-helper-text" name="phoneNumber" onChange={handleChange} value={formRegister.phoneNumber} type="text"/>
      </FormControl> */}
      {
        error ? <p>{error}</p> : <p></p>
      }
      {/* <FormControl>
        <Button variant="contained" type="button" color="secondary" onClick={handleSubmit}>Register</Button>
      </FormControl> */}
    </form>
      </Dialog>
    </div>
  );
}
