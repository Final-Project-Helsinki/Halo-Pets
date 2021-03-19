import React from 'react'
import LoginModal from '../components/LoginModal'
import RegisterForm from '../components/RegisterForm'

export default function RegisLoginPage() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "100vh", width: "100vw"}}>
      <LoginModal/>
      <p>Kalau mau register, isi form dibawah</p>
      <RegisterForm/>
    </div>
  )
}