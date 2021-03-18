const { User } = require('../models')
const { comparePassword } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')

class Controller {
  static async register(req, res, next) {
    try {
      let { name, email, password, phoneNumber } = req.body
      let newUser = await User.create({name, email, password, phoneNumber})
      if(!newUser){
        throw {
          status: 400,
          name: 'BadRequest',
          msg: 'Bad Request'
        }
      }
      const response = {
        id: newUser.id,
        name,
        email,
        phoneNumber
      }
      return res.status(200).json(response)  
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next){
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {email}
      })
      if(!user){
        throw {
          status: 400,
          name: 'BadRequest',
          msg: 'Bad Request'
        }
      }
      const isMatch = comparePassword(password, user.password)
      if(!isMatch){
        throw {
          status: 400,
          name: 'BadRequest',
          msg: 'Bad Request'
        }
      }
      const payload = {
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber
      }
      const access_token = generateToken(payload)
      res.status(200).json(access_token)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller