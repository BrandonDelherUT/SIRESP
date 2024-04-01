<template>
  <body>
    <div id="overlay">
      <b-container class="bv-example-row">
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
  </body>
  </template>


  <script>
  import axios from "axios"
  export default {
    data() {
      return {
        email: '',
        contrasena: '',
      }
    },
    methods: {
       onSubmit () {
        this.$validator.validate().then(async valid => {
          if (!valid) {
           console.log('Falta Acompletar campos')
           alert('Debes de Completar todos los campos')
          }else{
            try {
    const response = await axios.post('http://localhost:8080/login', { username:this.email, password:this.contrasena });
    const token = response.data.token;
    const claims =JSON.parse(window.atob(token.split(".")[1]));
    // Guardar el token en el almacenamiento local
    localStorage.setItem('token', token);

    // Guardar el nombre de usuario en el estado de Vuex si lo necesitas
    this.$store.commit('auth/setUsername', claims.sub);

    // Redirigir al usuario a una página de inicio o a donde sea necesario
    this.$router.push('/home');
  } catch (error) {
    console.error('Error during login:', error);
  }
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
  position: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 255, 0.392);
  z-index: -1; 
  left: 80%;
}

</style>