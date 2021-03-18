const express = require('express')
const routes = express()
const doctor = require('./doctor')
const user = require('./user')
const chat = require('./chat')
const fav = require('./fav')

routes.use(doctor)
routes.use(user)
routes.use(chat)
routes.use(fav)

module.exports = routes