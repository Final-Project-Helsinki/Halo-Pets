
const { ChatRoom, User, Doctor, sequelize } = require('../models')
const request = require('supertest')
const app = require('../app')
const { expect } = require('@jest/globals')

let dataUser = {
  name: "testing",
  email: "test2@mail.com",
  password: " 1234455999",
  phoneNumber: "999999999999"
}
let access_token = ""
let doctor_id = 1
let user_id
let access_tokenDoctor

afterAll((done) => {
  ChatRoom.destroy({
    where: {}
  }).then(data => {
    User.destroy({
      where: {}
    })
  }).catch(err => {
    done(err)
  }).finally(final => {
    sequelize.close()
    done()
  })
})

beforeAll((done) => {
  User.findOne({ where: { email: dataUser.email } })
    .then(user => {
      if (user) {
        request(app)
          .post('/users/login')
          .send({ email: dataUser.email, password: dataUser.password })
          .end((err, res) => {
            if (err) {
              done(err)
            } else {
              access_token = res.body.access_token
              user_id = res.body.id
            }
          })
      } else {
        return User.create(dataUser)
      }
    })
    .then(result => {
      request(app)
        .post('/users/login')
        .send({ email: dataUser.email, password: dataUser.password })
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            user_id = res.body.id
            access_token = res.body.access_token
            return
          }
        })
    })
    .then(_ => {
      return Doctor.findOne({ where: { id: doctor_id } })
    })
    .then(doctor => {
      request(app)
        .post('/doctors/login')
        .send({ email: doctor.email, password: doctor.password })
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            access_tokenDoctor = res.body.access_token
            done()
          }
        })
    })
    .catch(err => {
      done(err)
    })
})

// SUCCESS - CREATE CHAT ROOM USER
describe('POST/chat', function () {
  it('it should return status 201 with data', (done) => {
    request(app)
      .post('/chat/user')
      .set('access_token', access_token)
      .send({ doctor_id: doctor_id })
      .end((err, res) => {
        if (err) {
          done(err)
        }
        // console.log(res.body, '=================================')
        expect(res.status).toEqual(201)
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('user_id')
        expect(res.body).toHaveProperty('doctor_id')
        // expect(res.body).toHaveProperty('l')

        done()
      })
  })
  it('if chat room exist should return status 200 with data', (done) => {
    request(app)
      .post('/chat/user')
      .set('access_token', access_token)
      .send({ doctor_id: doctor_id })
      .end((err, res) => {
        if (err) {
          done(err)
        }
        // console.log(res.body, '=================================')
        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('user_id')
        expect(res.body).toHaveProperty('doctor_id')
        done()
      })
  })
})

// FAIL- CREATE ROOM USER
describe('POST/chat', function () {
  it('it should return status 401 if access_token user wrong', (done) => {
    request(app)
      .post('/chat/user')
      .set('access_token', '')
      .send({ doctor_id: doctor_id })
      .end((err, res) => {
        if (err) {
          done(err)
        }
        // console.log(res.body, '=================================')
        expect(res.status).toEqual(401)
        expect(res.body).toHaveProperty('msg', 'You must login first')
        // expect(res.body).toHaveProperty('user_id')
        // expect(res.body).toHaveProperty('doctor_id')
        // expect(res.body).toHaveProperty('l')
        done()
      })
  })

  it(`it should return status 500 if doctor_id wrong/doesn't exist`, (done) => {
    request(app)
      .post('/chat/user')
      .set('access_token', access_token)
      .send({ doctor_id: 99 })
      .end((err, res) => {
        if (err) {
          done(err)
        }
        // console.log(res.body, '=================================')
        expect(res.status).toEqual(500)
        done()
      })
  })
})

// SUCCESS - CREATE CHAT ROOM DOCTOR
describe('POST/chat', function () {
  console.log(access_tokenDoctor, '><><<<><><><><><><><')
  console.log(user_id, '><><<<><><><><><><><')
  it('it should return status 201 with data', (done) => {
    request(app)
      .post('/chat/doctor')
      .set('access_token', access_tokenDoctor)
      .send({ user_id: user_id })
      .end((err, res) => {
        if (err) {
          done(err)
        }
        console.log(res.body, '=================================')
        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('doctor_id')
        expect(res.body).toHaveProperty('user_id')

        done()
      })
  })
})

// FAIL- CREATE ROOM DOCTOR
describe('POST/chat', function () {
  it('it should return status 401 if access_token doctor wrong', (done) => {
    request(app)
      .post('/chat/user')
      .set('access_token', '')
      .send({ user_id: user_id })
      .end((err, res) => {
        if (err) {
          done(err)
        }
        // console.log(res.body, '=================================')
        expect(res.status).toEqual(401)
        expect(res.body).toHaveProperty('msg', 'You must login first')

        done()
      })
  })

  it(`it should return status 500 if user_id wrong/doesn't exist`, (done) => {
    request(app)
      .post('/chat/user')
      .set('access_token', access_tokenDoctor)
      .send({ user_id: 99 })
      .end((err, res) => {
        if (err) {
          done(err)
        }
        // console.log(res.body, '=================================')
        expect(res.status).toEqual(500)
        done()
      })
  })
})


// SUCCESS - GET LIST CHAT USER
describe('GET/chat', function () {
  console.log(access_tokenDoctor, '><><<<><><><><><><><')
  console.log(user_id, '><><<<><><><><><><><')
  test('it should return status 200 with data', (done) => {
    request(app)
      .get('/chat/doctor')
      .set('access_token', access_tokenDoctor)
      .end((err, res) => {
        if (err) {
          done(err)
        }
        console.log(res.body, '=================================')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              user_id
            })
          ])
        )
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              doctor_id
            })
          ])
        )
        done()
      })
  })
})

// FAIL - GET LIST CHAT USER
describe('GET/chat', function () {
  // console.log(access_tokenDoctor, '><><<<><><><><><><><')
  // console.log(user_id, '><><<<><><><><><><><')
  test('it should return status 401 with wrong access_token', (done) => {
    request(app)
      .get('/chat/doctor')
      .set('access_token', 99999)
      .end((err, res) => {
        if (err) {
          done(err)
        }
        console.log(res.body, '=================================')
        expect(res.status).toEqual(401)
        expect(res.body).toHaveProperty('msg', 'You must login first')
        done()
      })
  })
})