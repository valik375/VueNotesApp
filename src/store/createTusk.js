import firebase from 'firebase/app'
import database from 'firebase/database'

export default {
  state: {},
  mutations: {},
  getters: {},
  actions: {
    async createTusk({ dispatch }, {title, date, description, id}) {
      try{
        const uid = await dispatch('userId')
        const tuskId = id
        await firebase.database().ref(`users/${uid}/tusks/${tuskId}`).set({
          title,
          date,
          description,
          id
        })
      }catch(e) {
        throw e
      }
    },
    async editTusk({ dispatch }, {title, date, description, id}) {
      try{
        const uid = await dispatch('userId')
        await firebase.database().ref(`users/${uid}/tusks/${id}`).set({
          title,
          date,
          description,
          id
        })
      }catch(e) {
        throw e
      }
    },
    async deleteTusk({ dispatch }, id) {
      try{
        const uid = await dispatch('userId')
        await firebase.database().ref(`users/${uid}/tusks/${id}`).remove()
      }catch(e) {
        throw e
      }
    },
  }
}