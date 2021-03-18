// const { } = require('./models')

class Controller {
  static async getDoctor(req, res) {
    try {
      return res.status(200).json({ msg: 'Get Doctor' })
    } catch (error) {
      return res.status(500).json({ err: error })
    }
  }
}

module.exports = Controller