import { createRouter, createWebHistory, linkActiveClass } from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase/app'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', auth: true },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'auth' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/create',
    name: 'Create',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Create.vue')
  },
  {
    path: '/tusk/:id',
    name: 'Tusk',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Tusk.vue')
  },
  {
    path: '/register',
    name: 'Registration',
    meta: { layout: 'auth' },
    component: () => import('../views/Registration.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if(requireAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})
export default router
