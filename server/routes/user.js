const express = require('express')
const user = express.Router()
const Controller = require('../controllers/userController')

user.use('/user', Controller.getUser)

module.exports = user