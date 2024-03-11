import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Modal from '../components/Modal.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    }
  ]
})

export default router
