<template>
  <div>
    <CategoriesNavbar />
    <NavbarUser />

    <div class="container-fluid mt-5">
      <div class="row mt-5 justify-content-center">
        <div class="col-md-12 mt-5">

          <b-row class="mt-5">
            <b-col cols="12" lg="12">
              <h3 class="text-center mt-5">Información de Usuario</h3>
              <b-row>
                <b-col cols="12" class="justify-content-center d-flex align-items-center text-justify">
                  <b-img :src="user.profilePicture" rounded="circle" alt="Circle image"></b-img>

                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" lg="12" class="text-center">
              <hr>
              <div class="form-group row">
                <label class="col-sm-6 col-form-label"><b>Nombre:</b></label>
                <div class="col-sm-6">
                  <p>{{ user.names }}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label"><b>Apellidos:</b></label>
                <div class="col-sm-6">
                  <p>{{ user.lastName }}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label"><b>Dirección:</b></label>
                <div class="col-sm-6">
                  <p>{{ user.address }}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label"><b>Fecha de Nacimiento:</b></label>
                <div class="col-sm-6">
                  <p>{{ user.date}}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label"><b>Teléfono:</b></label>
                <div class="col-sm-6">
                  <p>{{ user.phone }}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label"><b>Género:</b></label>
                <div class="col-sm-6">
                  <p>{{ user.gender }}</p>
                </div>
              </div>
              <div class="form-group row">

                <div class="col-sm-12 mb-5">
                  <router-link to="/historial">
                    <b-button variant="secondary">Ver Historial</b-button>
                  </router-link>
                </div>
              </div>
            </b-col>
          </b-row>



        </div>
      </div>
    </div>



  </div>
</template>



<script>
import NavbarUser from "../Inicio/NavbarUser.vue";
import CategoriesNavbar from "../Inicio/CategoriesNavbar.vue";

import instance from "../../config/http-client.gateway";

export default {
  name: 'Perfil',
  components: {
    NavbarUser,
    CategoriesNavbar
  },
  data() {
    return {
      user: {

      }
    }
  },
  methods: {
    async getUsers() {
      const token = sessionStorage.getItem('token')
      console.log(token);
      const claims = JSON.parse(atob(token.split('.')[1]));
      const username = claims.sub
      console.log(username)
      const response = await instance.doGet(`/user/username/${username}`)
      const fechaNum = response.data.date;
      let fecha = new Date(fechaNum);
      
      let fechaFormateada = fecha.toLocaleDateString('es-ES');;
      console.log(fechaFormateada);

      this.user = response.data;
      this.user.date = fechaFormateada;
      console.log(response);
    }
  },
  mounted() {
    this.getUsers()
  },


}
</script>
