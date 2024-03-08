import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')


