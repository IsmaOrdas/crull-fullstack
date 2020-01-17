const request = require('supertest');
const app = require('../src/app');

test('Should signup a new user', async () => {
  await request(app).post('/users').send({
    username: 'Nuevo',
    password: 'probando'
  }).expect(201)
})