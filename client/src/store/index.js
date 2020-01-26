import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import books from './modules/books'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    books
  }
})
