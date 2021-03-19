const request = require('supertest')
const app = require('../app')
const { generateToken } = require('../helpers/jwt')
const { User, sequelize } = require('../models')

let dataTest = {
  email: 'testing@mail.com',
  password: 'test123456',
  name: 'testing jest',
  phoneNumber: '0988838389298'
}
let access_token = ""

afterAll(done => {
  User.destroy({
    where: {}
  }).then(data => {
    sequelize.close()
    done()
  }).catch(err => {
    done(err)
  })
})
beforeAll(done => {
  access_token = generateToken({
    email,
    name,
    phoneNumber
  })
  done()
})

// SUCCESS-REGISTER
describe('POST/register', function () {
  it('should return status 201 with data', (done) => {
    request(app)
      .post('/users/register')
      .send(dataTest)
      // .expext(200)
      .end((err, res) => {
        if (err) {
          done(err)
        }
        console.log(res.body)
        expect(res.status).toEqual(201)
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('email')
        // expect(res.body).toHaveProperty('name')
        // expect(res.body).toHaveProperty('phoneNumber')
        done()
      })

  })
})


// SUCCESS-LOGIN
describe('POST/login', function () {
  it('should return status 200 with data', (done) => {
    request(app)
      .post('/users/login')
      .send(dataTest)
      // .expect(200)
      .end((err, res) => {
        if (err) {
          // sequelize.close()
          done(err)
        }
        console.log(res.body, '>>>>>>>>>>>>>>>>>>>')
        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('access_token')
        // sequelize.close()
        done()

      })
  })
})

// // FAILED LOGIN

// describe('POST/login', function () {
//   let body = {
//     email: 'admin@mail.com',
//     password: '1234'
//   }
//   test('should return failed status if email exist and password wrong', (done) => {
//     request(app)
//       .post('/login')
//       .send({ email: 'admin@mail.com', password: '123445' })
//       .end((err, res) => {
//         if (err) {
//           // sequelize.close()
//           done(err)
//         }
//         expect(res.status).toEqual(400)
//         expect(typeof res.body).toEqual('object')
//         expect(res.body).toHaveProperty('errors', 'Invalid Email or Password')
//         done()

//       })
//   })
//   test('should return failed status if email does not exist in database', (done) => {
//     request(app)
//       .post('/login')
//       .send({ email: 'ddddd', password: '1234' })
//       .end((err, res) => {
//         if (err) {
//           // sequelize.close()
//           done(err)
//         }
//         expect(res.status).toEqual(404)
//         expect(typeof res.body).toEqual('object')
//         expect(res.body).toHaveProperty('errors', 'Invalid Email or Password')
//         done()
//       })
//   })
//   test('should return failed status if email empty and password empty', (done) => {
//     request(app)
//       .post('/login')
//       .send({ email: '', password: '' })
//       .end((err, res) => {
//         if (err) {
//           // sequelize.close()
//           done(err)
//         }
//         expect(res.status).toEqual(404)
//         expect(typeof res.body).toEqual('object')
//         expect(res.body).toHaveProperty('errors', 'Invalid Email or Password')
//         done()
//       })
//   })
// })

