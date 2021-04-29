import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import './style.less'

const config = {
  apiKey: 'AIzaSyCGBFkfRC63pavahtI2h5Tf5yNZZ1MJL6Q',
  authDomain: "notes-vue-app-83d7e.firebaseapp.com",
  projectId: "notes-vue-app-83d7e",
  storageBucket: "notes-vue-app-83d7e.appspot.com",
  messagingSenderId: "198269944628",
  appId: "1:198269944628:web:c0af07398df8fe8c865b61"
}

let app

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
  }
})


