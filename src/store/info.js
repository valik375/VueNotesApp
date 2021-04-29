import firebase from 'firebase/app'
import database from 'firebase/database'

export default {
  state: {
    info: {},
    tusks: []
  },
  mutations: {
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state){
      state.info = {}
    },
    setTusks(state, tusks) {
      state.tusks = tusks
    },
    clearTusks(state){
      state.tusks = []
    }
  },
  getters: {
    info: s => s.info,
    tusks: s => s.tusks
  },
  actions: {
    async getUserName({ dispatch, commit }) {
      try{
        const uid = await dispatch('userId')
        const info = (await firebase.database().ref(`users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
      }catch(e) {
        throw e
      }
    },
    async getUserTusks({ dispatch, commit }) {
      const uid = await dispatch('userId')
      const tusks = (await firebase.database().ref(`users/${uid}/tusks`).once('value')).val()
      commit('setTusks', tusks)
    }
  }
}