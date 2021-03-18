// const { } = require('../models')

class Controller {
  static async getFav(req, res) {
    try {
      return res.status(200).json({ msg: 'get Fav' })
    } catch (error) {
      return res.status(500).json({ err: error })
    }
  }
}

module.exports = Controller