const express = require('express')
const adoption = express.Router()
const Controller = require('../controllers/adoptionController')
const authorizationAdopter = require('../middlewares/authorizationAdopter')
const multer = require('../middlewares/multer')
const { uploadFileToGCS } = require('../middlewares/gcs');

adoption.get('/adoption', Controller.getAllAdoption)

adoption.post('/adoption', multer.single('image_url'), uploadFileToGCS, Controller.createAdoption)

adoption.get('/adoption/:id', Controller.getAdoptionById)

adoption.put('/adoption/:id', multer.single('image_url'), uploadFileToGCS, Controller.updateAdoption)

adoption.delete('/adoption/:id', Controller.deleteAdoption)

adoption.get('/adoption/species/:species', Controller.getAdoptionsBySpecies)

module.exports = adoption