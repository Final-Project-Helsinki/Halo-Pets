// const {} = require('/models')

class Controller {
  static async getUser(req, res) {
    try {
      return res.status(200).json({ msg: 'Get User' })
    } catch (error) {
      return res.status(500).json({ err: error })
    }
  }
}

module.exports = Controller