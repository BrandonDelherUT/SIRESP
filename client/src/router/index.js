import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/User/Inicio.vue'
import InicioUser from '../views/User/InicioUser.vue'
import ReservaAlojamiento from '../views/Guest/ReservaAlojamiento.vue'
import PagoView from '../views/Guest/PagoView.vue'
import Perfil from '../components/Inicio/Profile.vue'
import Historial from '../views/Guest/Historial.vue'
import RegistroAnfitrion from '../views/Host/RegistroAnfitrion.vue'
import ModificarAnfitrion from '../views/Host/ModificarAnfitrion.vue'
import BusquedaAlojamientosAnfi from '../views/Host/BusquedaAlojamientosAnfi.vue';
import InsertarAlojamiento from '../views/Host/InsertarAlojamiento.vue';
import AprobacionAnfitrion from '../views/Admin/AprobacionAnfitriones.vue'
import AprobacionAlojamientos from '../views/Admin/AprobacionAlojamientos.vue'
import ModificarAlojamiento from '../views/Host/ModificarAlojamiento.vue'
import AdministracionCategorias from '../views/Admin/AdministracionCategoriasView.vue'

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: Inicio,
    meta: { requiresAuth: false } // Esta ruta no requiere autenticación
  },
  {
    path: '/userHome',
    name: 'userHome',
    component: InicioUser,
    meta: { requiresAuth: true }, // Esta ruta requiere autenticación
  },
  {
    path: '/infoAlojamiento',
    name: 'infoAlojamiento',
    component: ReservaAlojamiento,
    meta: { requiresAuth: true } // Esta no ruta requiere autenticación
  },
  {
    path: '/pagoUser',
    name: 'pago',
    component: PagoView,
    meta: { requiresAuth: true } // Esta ruta requiere autenticación
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil,
    meta: { requiresAuth: true } // Esta ruta requiere autenticación
  },
  {
    path: '/historial',
    name: 'historial',
    component: Historial,
    meta: { requiresAuth: true } // Esta ruta requiere autenticación
  },
  {
    path:'/registroAnfitrion',
    name:'registroAnfitrion',
    component: RegistroAnfitrion,
    meta: { requiresAuth: true } // Esta ruta requiere autenticación
  },

  {
    path:'/modificarAnfitrion',
    name:'modificarAnfitrion',
    component: ModificarAnfitrion,
    meta: { requiresAuth: true } // Esta ruta requiere autenticación
  },
  {
    path:'/alojamiento',
    name:'busquedaAlojamientosAnfi',
    component: BusquedaAlojamientosAnfi,
    meta: { requiresAuth: true } // Esta ruta requiere autenticación
  },
  {
    path:'/insertarAlojamiento',
    name:'insertarAlojamiento',
    component: InsertarAlojamiento,
    meta: { requiresAuth: true } 
  },
  {
    path: '/aprobacionAnfitrion',
    name: 'aprobacionAnfitrion',
    component: AprobacionAnfitrion,
    meta: { requiresAuth: true } 
  },
  {
    path:'/aprobacionAlojamientos',
    name:'aprobacionAlojamientos',
    component: AprobacionAlojamientos,
    meta: { requiresAuth: true } 
  },
  {
    path:'/modificarAlojamiento',
    name:'modificarAlojamiento',
    component: ModificarAlojamiento,
    meta: { requiresAuth: true } 

  },
  {
    path:'/administrarCategorias',
    name:'administrarCategorias',
    component: AdministracionCategorias,
    meta: { requiresAuth: true }

  }
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const userRole = localStorage.getItem('token');

  // Verificar si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verificar si el usuario está autenticado
    if (!isAuthenticated) {
      // Si no está autenticado, redirigir a la página de inicio de sesión
      next({ name: 'home' });
    } else {
      // Si está autenticado, verificar el rol (si es necesario)
      if (to.meta.requiresRole) {
        const claims = JSON.parse(atob(userRole.split('.')[1]));
        if (!claims.authorities.includes(to.meta.requiresRole)) {
          // Si el rol del usuario no es adecuado, redirigir a la página de inicio
          next({ name: 'home' });
        } else {
          // Si el usuario está autenticado y tiene el rol adecuado, permitir el acceso a la ruta
          next();
        }
      } else {
        // Si la ruta no requiere un rol específico, permitir el acceso a la ruta
        next();
      }
    }
  } else {
    // Si la ruta no requiere autenticación, permitir el acceso a la ruta
    next();
  }
});


export default router;