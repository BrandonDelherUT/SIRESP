import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/User/Inicio.vue'
import InicioUser from '../views/User/InicioUser.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio
    },
    {
      path: '/userHome',
      name: 'userHome',
      component: InicioUser
    }

  ]
})

export default router
