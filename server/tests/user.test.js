const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/users');

const userOne = {
  username: 'Luis',
  password: 'aslkdfjaslfk'
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