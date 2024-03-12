<template>
    <b-container fluid >
      <b-row>
        <b-col>
          <b-card title="Inicio de Sesión">
            <b-form @submit.prevent="onSubmit">
              <b-form-group
                label="Correo electrónico:"
                label-for="email-input"
                invalid-feedback="El correo electrónico es obligatorio"
                :state="validateEmail(email)">
                <b-form-input
                  id="email-input"
                  type="email"
                  v-model="email"
                  required
                  placeholder="Ingrese su correo electrónico"
                  :state="validateEmail(email)">
                </b-form-input>
              </b-form-group>
  
              <b-form-group
                label="Contraseña:"
                label-for="password-input"
                invalid-feedback="La contraseña es obligatoria"
                :state="password.length > 0">
                <b-form-input
                  id="password-input"
                  type="password"
                  v-model="password"
                  required
                  placeholder="Ingrese su contraseña"
                  :state="password.length > 0">
                </b-form-input>
              </b-form-group>
  
              <b-button type="submit" variant="primary">Iniciar sesión</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      onSubmit() {
        if (this.validateEmail(this.email) && this.password.length > 0) {
          alert(`Email: ${this.email}, Password: ${this.password}`);
          // Aquí deberías agregar la lógica para la autenticación
        } else {
          alert('Por favor, ingresa un correo electrónico y contraseña válidos.');
        }
      }
    }
  }
  </script>
  