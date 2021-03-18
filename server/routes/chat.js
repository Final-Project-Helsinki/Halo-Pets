const express = require('express')
const Controller = require('../controllers/chatController')
const chat = express.Router()

chat.get('/chat', Controller.getChat)

module.exports = chat