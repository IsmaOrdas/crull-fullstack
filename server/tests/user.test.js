const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/users');

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  username: 'Luis',
  password: 'aslkdfjaslfk',
  tokens: [{
    token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
  }]
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
})

test('Should signup a new user', async () => {
  await request(app).post('/users').send({
    username: 'Nuevo',
    password: 'probando'
  }).expect(201)
})

test('Should login existing user', async () => {
  await request(app).post('/users/login').send({
    username: userOne.username,
    password: userOne.password
  }).expect(200)
})

test('Should not login nonexistent user', async () => {
  await request(app).post('/users/login').send({
    username: userOne.username,
    password: '123123fdasfasdf'
  }).expect(400)
})

test('Should get profile for user', async () => {
  await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
})

test('Should not get profile for unauthenticated user', async () => {
  await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})

test('Should delete user account', async () => {
  await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should not delete user account for unauthenticated user', async () => {
  await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})