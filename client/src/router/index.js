import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/User/Inicio.vue'
import InicioUser from '../views/User/InicioUser.vue'
import ReservaAlojamiento from '../views/Guest/ReservaAlojamiento.vue'
import PagoView from '../views/Guest/PagoView.vue'
import Perfil from '../components/Inicio/Profile.vue'
import Historial from '../views/Guest/Historial.vue'



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
    },
    {
      path: '/infoAlojamiento',
      name: 'infoAlojamiento',
      component: ReservaAlojamiento
    },
    {
      path: '/pago',
      name: 'pago',
      component: PagoView
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/historial',
      name: 'historial',
      component: Historial
    },

  ]
})

export default router
