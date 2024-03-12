import Navbar from '@/components/Navbar.vue';
<template>
  <div>
    <Navbar />
    <CategoriesNavbar />
      <b-container fluid>
        <b-row class="text-center">
          <b-col></b-col>
          <b-col cols="8">
            <div style="margin-top: 5%;">
                <img src="../assets/logo.png" alt="logo" style="height: 200px; width: 260px;">
                <b-card  title="Inicio de Sesión" sub-title="">
                  <b-card-body>
                    <b-form @submit.prevent="onSubmit">
                      <b-form-group label="Correo electrónico">
                        <b-form-input v-validate="'required|email'" name="email" v-model="email" type="email" />
                         <span style="color: brown;">{{ errors.first('email') }}</span>
                      </b-form-group>
        
                      <b-form-group label="Contraseña" style="margin-top: 4%;">
                        <b-form-input v-validate="'required|alpha_dash|min:7'" name="password" v-model="contrasena" type="password" :class="{ 'is-danger': errors.has('password') }" ref="password" />
                        <span style="color: brown;" v-show="errors.has('password')" class="help is-danger">{{ errors.first('password')
                        }}</span>
                      </b-form-group>
        
                      <b-button style="margin-top: 5%;" type="submit" variant="primary">Inicio de Sesión</b-button>
                    </b-form>
                  </b-card-body>
                </b-card>
              </div>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
  </div>
  </template>


  <script>

  import Navbar from '../components/Navbar.vue';
  import CategoriesNavbar from '../components/CategoriesNavbar.vue';
  
  export default {
    components: {
      Navbar,
      CategoriesNavbar
    },
    data() {
      return {
        email: '',
        contrasena: '',
      }
    },
    methods: {
      onSubmit() {
        this.$validator.validate().then(valid => {
          if (!valid) {
           console.log('Falta Acompletar campos')
           alert('Debes de Completar todos los campos')
          }else{
            console.log('Todo corecto')
           console.log(this.$data)
           console.log(this.genero)
          }
        });
      }
    }
  };
  </script>
<style>
body {
  background-image: url('../assets/login.png'); 
  background-size: cover; 
  background-position: center; 
  position: relative; 
  overflow: hidden; 
}


#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 255, 0.392);
  z-index: -1; 
}

</style>