import { createStore } from 'vuex'
import auth from './auth'
import info from './info'
import createTusk from './createTusk'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth, info, createTusk
  }
})
