const express = require('express')
const doctor = express.Router()
const Controller = require('../controllers/doctorController')

doctor.get('/doctor', Controller.getDoctor)

module.exports = doctor