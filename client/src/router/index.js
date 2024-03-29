import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Login from '../views/LoginPage.vue'
import JavaWebTkn from '../views/JavaWebTkn.vue'
import UserLoginJWT from '../views/UserLoginJWT.vue'
import Pago from '../views/PagoView.vue'
import Plantilla from '../views/Plantilla.vue'
import InfoAlojamiento from '../views/InfoAlojamiento.vue'
import ReviewModal from '../components/ReviewModal.vue'
import CancelarReserva from '../components/cancelarReserva.vue'
import AdministracionCategoriasView from '../views/AdministracionCategoriasView.vue'
import HistVerifAnfView from '../views/HistVerifAnfView.vue'
import HistVerifAlojView from '../views/HistVerifAlojView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/java-web-tkn',
      name: 'java-web-tkn',
      component: JavaWebTkn
    },
    {
      path: '/user-login-jwt',
      name: 'user-login-jwt',
      component: UserLoginJWT
    },
    {
      path: '/Pago',
      name: 'Pago',
      component: Pago
    },
    { 
      path: '/plantilla',
      name: 'plantilla',
      component: Plantilla
    },
    {
     path: '/infoalojamiento',
      name: 'infoalojamiento',
      component: InfoAlojamiento
    },
    {
      path: '/reviewmodal',
      name: 'reviewmodal',
      component: ReviewModal
    },
    {
      path: '/cancelarreserva',
      name: 'cancelarreserva',
      component: CancelarReserva
    },
    {
      path: '/administracion-categorias',
      name: 'administracion-categorias',
      component: AdministracionCategoriasView
    },
    {
      path: '/hist-anfitrion',
      name: 'hist-anfitrion',
      component: HistVerifAnfView
    },
    {
      path: '/hist-alojamiento',
      name: 'hist-alojamiento',
      component: HistVerifAlojView
    }
    


  ]
})

export default router
