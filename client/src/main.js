import Vue from 'vue'

import App from './App.vue'
import router from './router'
import VeeValidate  from 'vee-validate'
import { Validator } from 'vee-validate';

import './assets/main.css'

import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VeeValidate)


Validator.localize('es', {
  messages: {
    alpha: () => 'Este campo solo puede contener letras.',
    alpha_spaces: 'Solo acepta letras y espacios',
    required: () => 'Este campo es obligatorio.',
    digits:(filedName,[digito])=>`Deben ser ${digito} digitos y solo numeros`,
    date_format : 'El formato debe ser dd/MM/yyyy',
    date_between : "No esta en las fechas de 10/09/1954 al 20/09/2005",
    alpha_num: 'Solo acepta numeros y letras',
    max : (field,[num])=>`Solo ${num} como maximo`, // en esta campo se le pone ()=> por que recibira parametros- el nombre del campo  y el valor 
    credit_card:"Debe ser una tarjeta de crédito/debito válida.",
    email:"El correo deb ser valido",
    alpha_dash:"Solo puede contener caracteres alfabéticos, números, guiones o guiones bajos.",
    min : (field,[num])=>`Debe de contener ${num} caracteres como minimo`,
    included:"Debes de selccionar una opcion (Masculino/Femenino)"
  }
});



// Definición y registro de la regla de validación personalizada
const customRules = {
  getMessage(field, args) {
    return 'Debes ser mayor de 18 años.';
  },
  validate(value, args) {
    const currentDate = new Date();
    const birthdate = new Date(value);
    const age = currentDate.getFullYear() - birthdate.getFullYear();
    return age >= 18;
  }
};

Validator.extend('adult', customRules);

const customRules2 = {
  getMessage(field, args) {
    return 'La imagen de perfil debe ser menor a 2MB.';
  },
  validate(value, args) {
    // Verificar si el tamaño de la imagen es menor a 2MB
    return value ? value.size / 1024 / 1024 < 2 : false;
  }
};

Validator.extend('imageSize', customRules2);


// Definición y registro de la regla de validación para caracteres especiales
const specialCharacterRule = {
  getMessage(field, args) {
    return 'La contraseña debe contener al menos un carácter especial.';
  },
  validate(value, args) {
    // Expresión regular que verifica si hay al menos un carácter especial
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(value);
  }
};

Validator.extend('specialCharacter', specialCharacterRule);

// Definición y registro de la regla de validación para la exclusión de espacios
const noSpaceRule = {
  getMessage(field, args) {
    return 'La contraseña no debe contener espacios.';
  },
  validate(value, args) {
    // Verificar si la contraseña no contiene espacios
    return !/\s/.test(value);
  }
};

Validator.extend('noSpace', noSpaceRule);


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')


