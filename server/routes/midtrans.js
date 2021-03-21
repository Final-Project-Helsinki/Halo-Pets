const express = require('express')
const Controller = require('../controllers/midtransController')
const authenticationUser = require('../middlewares/authenticationUser')
const midtrans = express.Router()


midtrans.get('/midtrans/:name/:amount', authenticationUser, Controller.getToken)

module.exports = midtrans