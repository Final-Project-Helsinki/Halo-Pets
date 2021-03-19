const express = require('express')
const Controller = require('../controllers/favController')
const fav = express.Router()

fav.get('/fav', Controller.getAllFav)
fav.post('/fav', Controller.createFav)
fav.delete('/fav/:id', Controller.removeFav)

module.exports = fav