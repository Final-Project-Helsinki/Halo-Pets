const express = require('express')
const doctor = express.Router()
const Controller = require('../controllers/doctorController')

doctor.get('/doctors', Controller.getAllDoctor)
doctor.post('/doctors/login', Controller.login)
doctor.get('/doctors/:id', Controller.getDoctorById)

module.exports = doctor