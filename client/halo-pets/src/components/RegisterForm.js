import React from 'react'
import {
  Paper,
  FormControl,
  InputLabel,
  Input,
} from '@material-ui/core'


export default function RegisterForm() {

  return (
    <Paper>
      <div style={{ minWidth: 350, height: 'auto'}}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <br/>
        <br/>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
      </div>
    </Paper>
  )

}