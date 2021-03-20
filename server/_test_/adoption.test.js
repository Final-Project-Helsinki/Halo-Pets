const request = require('supertest')
const app = require('../app')
const { generateToken } = require('../helpers/jwt')
const { Adoption, User, sequelize } = require('../models')

let dataUser = {
  name: 'testing jest',
  email: 'testing@mail.com',
  password: 'test123456',
  phoneNumber: '0988838389298'
}

let dataPet = {
  name: 'Molly',
  species: 'cat',
  gender: 'female',
  dob: '2020-04-13',
  image_url: 'https://storage.googleapis.com/halo-pets/1616128681157cat2.jpg'
}

let access_token = ''

afterAll(done => {
  Adoption.destroy({
    where: {}
  }).then(data => {
    return User.destroy({
      where: {}
    })
  }).catch(err => {
    done(err)
  }).finally(() => {
    sequelize.close()
    done()
  })
})

beforeAll(done => {
  User.findOne({
    where: { email: dataUser.email }
  })
    .then(foundUser => {
      if (foundUser) {
        request(app)
          .post('/users/login')
          .send({
            email: dataUser.email,
            password: dataUser.password
          })
          .end((err, res) => {
            if (err) {
              console.log(err);
            } else {
              access_token = res.body.access_token;
            }
          })
      } else {
        return User.create(dataUser)
      }
    })
    .then(newUser => {
      request(app)
        .post('/users/login')
        .send({
          email: dataUser.email,
          password: dataUser.password
        })
        .end((err, res) => {
          if (err) {
            console.log(err);
            done(err);
          } else {
            access_token = res.body.access_token;
            done();
          }
        })
    })
    .catch(err => console.log(err))
})

describe('POST/adoptions', function () {
  it('should return status 201 with data of adoption', (done) => {
    request(app)
      .post('/adoptions')
      .send(dataPet)
      .set('access_token', access_token)
      .end((err, res) => {
        if (err) {
          done(err)
        }
        expect(res.status).toEqual(201)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('species')
        expect(res.body).toHaveProperty('gender')
        expect(res.body).toHaveProperty('dob')
        expect(res.body).toHaveProperty('image_url')

        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            species: expect.any(String),
            gender: expect.any(String),
            dob: expect.any(String),
            image_url: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String)
          })
        )

        done()
      })
  })
})

// FAILED - CREATE ADOPTION
describe('POST/adoptions', function () {
  it ('failed authentication', (done) => {
    request(app)
      .post('/adoptions')
      .send(dataPet)
      .set('access_token', '')
      .end((err, res) => {
        if (err) {
          done(err)
        }

        expect(res.status).toEqual(401);
        expect(typeof res.body).toEqual('object');
        expect(res.body).toHaveProperty('msg');
        expect(res.body.msg).toEqual('You must login first');

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
        expect(res.body[0]).toHaveProperty('name')
        expect(res.body[0]).toHaveProperty('species')
        expect(res.body[0]).toHaveProperty('gender')
        expect(res.body[0]).toHaveProperty('dob')
        expect(res.body[0]).toHaveProperty('image_url')

        expect(res.body[0]).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            species: expect.any(String),
            gender: expect.any(String),
            dob: expect.any(String),
            image_url: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String)
          })
        )
        done()
      })
  })
})