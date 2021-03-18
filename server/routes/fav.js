const express = require('express')
const Controller = require('../controllers/favController')
const fav = express.Router()

fav.get('/fav', Controller.getFav)

module.exports = fav