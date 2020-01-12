import httpClient from './http-client';

const END_POINT = '/users';

const login = form => httpClient.post(END_POINT + '/login', form);

export {
  login
}