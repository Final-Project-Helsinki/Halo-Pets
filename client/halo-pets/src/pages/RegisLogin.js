import React from 'react'
import LoginModal from '../components/LoginModal'
import RegisterForm from '../components/RegisterForm'
import { Typography } from '@material-ui/core'

export default function RegisLoginPage() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "100vh", width: "100vw"}}>
      <LoginModal/>
      <Typography>Didn't have an account? Please register below</Typography>
      <RegisterForm/>
    </div>
  )
}