const { Doctor } = require('../models')

class Controller {
  static async getDoctor(req, res, next) {
    try {
      let doctors = await Doctor.findAll()
      return res.status(200).json(doctors)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller