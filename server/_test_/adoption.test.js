const request = require('supertest')
const app = require('../app')
const { generateToken } = require('../helpers/jwt')
const { Adoption, User, sequelize } = require('../models')

let dataTest = {
  email: 'testing@mail.com',
  password: 'test123456',
  name: 'testing jest',
  phoneNumber: '0988838389298'
}
let access_token = ""
let {email, name, phoneNumber} = dataTest

afterAll(done => {
  Adoption.destroy({
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
  // Adoption.create({
  //   name: 'Molly',
  //   species: 'cat',
  //   gender: 'female',
  //   dob: new Date('2020-04-13'),
  //   image_url: 'https://cdn.idntimes.com/content-images/post/20200303/1-17b763f032b2396d91d33582a4707d79.jpg'
  // }).then(adoption => {
  //   done()
  // }).catch(err => {
  //   done()
  // })
})

describe('POST/adoptions', function () {
  let body = {
    name: 'Molly',
    species: 'cat',
    gender: 'female',
    dob: '2020-04-13',
    image_url: 'https://storage.googleapis.com/halo-pets/1616128681157cat2.jpg'
  }
  it('should return status 201 with data of adoption', (done) => {
    request(app)
      .post('/adoptions')
      .send(body)
      .set('access_token', access_token)
      .end((err, res) => {
        if (err) {
          done(err)
        }
        expect(res.status).toEqual(201)
        expect(typeof res.body).toEqual('object')
        // expect(res.body).toHaveProperty('name')
        // expect(res.body).toHaveProperty('email')
        // expect(res.body).toHaveProperty('name')
        // expect(res.body).toHaveProperty('phoneNumber')
        done()
      })
  })
})

describe('GET/adoptions', function () {
  it('should return status 200 with array of data', (done) => {
    request(app)
      .get('/adoptions')
      .set('access_token', access_token)
      .end((err, res) => {
        if (err) {
          done(err)
        }
        expect(res.status).toEqual(200)
        expect(Array.isArray(res.body)).toEqual(true)
        expect(res.body).toHaveProperty('name')
        // expect(res.body).toHaveProperty('email')
        // expect(res.body).toHaveProperty('name')
        // expect(res.body).toHaveProperty('phoneNumber')
        done()
      })
  })
})