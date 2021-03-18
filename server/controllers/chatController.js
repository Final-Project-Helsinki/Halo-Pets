// const { } = require('../models')

class Controller {
  static async getChat(req, res) {
    try {
      return res.status(200).json({ msg: 'get Chat' })
    } catch (error) {
      return res.status(500).json({ err: error })
    }
  }
}

module.exports = Controller