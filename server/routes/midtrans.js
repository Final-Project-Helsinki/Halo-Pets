const express = require('express')
const Controller = require('../controllers/midtransController')
const midtrans = express.Router()


midtrans.get('/midtrans/:name/:amount', Controller.getToken)

module.exports = midtrans