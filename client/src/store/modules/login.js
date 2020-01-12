import { login } from '@/api/users.api.js';

const state = {
  user: null,
  status: {}
}

const getters = {
  user: state => state.user,
  status: state => { console.log(Object.keys(state.status).length); return Object.keys(state.status).length > 0 ? true : false }
}

const actions = {
  async logUser ({commit}, data) {
    try {
      let loginForm = {
        username: data.username,
        password: data.password
      }

      const user = await login(loginForm);
      commit('loginSuccess', user.data)
      
      return user;
    } catch (error) {
      commit('loginFailure')
      console.error(error);
      return false;
    }
  },
  logout ({ commit }) {
    commit('logout');
  }
}

const mutations = {
  logout (state) {
    state.user = null;
    state.status = {};
  },
  loginSuccess (state, user) {
    state.user = user;
    state.status = { loggedIn: true };
  },
  loginFailure (state) {
    state.user = null;
    state.status = {};
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}