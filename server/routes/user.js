const express = require('express')
const user = express.Router()
const Controller = require('../controllers/userController')

user.post('/register', Controller.register)
user.post('/login', Controller.login)

module.exports = user