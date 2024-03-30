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
                  <b-img :src="usuario.imagenPerfil" rounded="circle" alt="Circle image"></b-img>

                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" lg="12" class="text-center">
              <hr>
              <div class="form-group row">
                <label class="col-sm-6 col-form-label">Nombre:</label>
                <div class="col-sm-6">
                  <p>{{ usuario.nombre }}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label">Apellidos:</label>
                <div class="col-sm-6">
                  <p>{{ usuario.apellidos }}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label">Dirección:</label>
                <div class="col-sm-6">
                  <p>{{ usuario.direccion }}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label">Fecha de Nacimiento:</label>
                <div class="col-sm-6">
                  <p>{{ usuario.fechaNacimiento }}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label">Teléfono:</label>
                <div class="col-sm-6">
                  <p>{{ usuario.telefono }}</p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-6 col-form-label">Género:</label>
                <div class="col-sm-6">
                  <p>{{ usuario.genero }}</p>
                </div>
              </div>
              <div class="form-group row">

                <div class="col-sm-12">
                  <router-link to="/historial">
                    <b-button variant="secondary" >Ver Historial</b-button>
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

export default {
  name: 'Perfil',
  components: {
    NavbarUser,
    CategoriesNavbar
  },
  data() {
    return {
      usuario: {
        nombre: 'Juan',
        apellidos: 'Pérez',
        direccion: 'Calle 123, Ciudad',
        fechaNacimiento: '01/01/1990',
        telefono: '123-456-7890',
        genero: 'Masculino',
        imagenPerfil: 'https://via.placeholder.com/150' // Aquí deberías poner la ruta de la imagen de perfil del usuario
      }
    }
  },


}
</script>
