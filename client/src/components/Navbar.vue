<template>
  <div>
    <!-- Modal -->
    <b-modal
      v-model="showModal"
      title="Registro de Usuario"
      hide-footer
      size="lg"
      modal-class="custom-modal"
      header-bg-variant="success"
    >
      <b-form @submit.prevent="onSubmit" class="modal-form">
        <b-row>
          <b-col cols="6">
            <b-form-group label="Nombre">
              <b-form-input
                v-validate="'required|alpha_spaces|min:3'"
                name="name"
                v-model="name"
                type="text"
              />
              <span class="text-danger">{{ errors.first("name") }}</span>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="Apellidos">
              <b-form-input
                v-validate="'required|alpha_spaces|min:3'"
                name="surname"
                v-model="surname"
                type="text"
              />
              <span class="text-danger">{{ errors.first("surname") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <b-form-group label="Dirección">
              <b-form-input
                v-validate="'required|regex:^[a-zA-Z0-9 #]+$'"
                name="address"
                v-model="address"
                type="text"
              />
              <span class="text-danger">{{ errors.first("address") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group label="Fecha de Nacimiento">
              <b-form-datepicker
                v-validate="'required|adult'"
                name="birthdate"
                v-model="birthdate"
                type="text"
              />
              <span class="text-danger">{{ errors.first("birthdate") }}</span>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="Teléfono">
              <b-form-input
                v-validate="'required|digits:10'"
                name="telephone"
                v-model="telephone"
                type="text"
              />
              <span class="text-danger">{{ errors.first("telephone") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group label="Género">
              <b-form-select
                v-validate="'required'"
                name="gender"
                v-model="gender"
              >
                <option value="">Seleccionar Género</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </b-form-select>
              <span class="text-danger">{{ errors.first("gender") }}</span>
            </b-form-group>
          </b-col>

          <b-col cols="6">
            <b-form-group label="Imagen de perfil">
              <b-form-file
                v-validate="'required|imageSize'"
                name="profileImage"
                v-model="profileImage"
                :state="Boolean(profileImage)"
                placeholder="Seleccione una imagen"
                accept="image/*"
              >
              </b-form-file>
              <span class="text-danger">{{
                errors.first("profileImage")
              }}</span>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group label="Correo electrónico">
              <b-form-input
                v-validate="'required|regex:^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]'"
                name="email"
                v-model="email"
                type="email"
              />
              <span class="text-danger">{{ errors.first("email") }}</span>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="Contraseña">
              <b-form-input
                v-validate="'required|min:8|specialCharacter|noSpace'"
                name="password"
                v-model="contrasena"
                type="password"
                :class="{ 'is-danger': errors.has('password') }"
                ref="password"
              />
              <span class="text-danger">{{ errors.first("password") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- Botón Enviar -->
        <div class="text-center">
          <b-button style="margin-top: 5%" type="submit" variant="primary"
            >Enviar</b-button
          >
        </div>
      </b-form>
    </b-modal>

  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="https://vuejs.org/images/logo.png" alt="Vue.js" width="30" height="30" />
        <span>Vue.js</span>
      </a>
      <div class="navbar-menu">
        <a class="navbar-item" href="/inicio">
          Inicio
        </a>
        <a class="navbar-item" href="/about">
          Acerca de
        </a>
        <!-- Modal registro -->
        <a class="navbar-item" @click="showModal = true">Registrarse</a><!-- Botón de registro -->
        <b-button @click="showModal = true" variant="primary">Registrar</b-button>


        <!-- Perfil dropdown -->
        <div class="dropdown">
          <a class="navbar-item dropdown-toggle" href="#" @click.prevent="toggleDropdown">Perfil</a>
          <div class="dropdown-menu" v-if="isDropdownOpen">
            <a class="dropdown-item" href="/perfil">Ver perfil</a>
            <a class="dropdown-item" href="/configuracion">Configuración</a>
            <a class="dropdown-item" href="/cerrar-sesion">Cerrar sesión</a>
          </div>
        </div>

      </div>
    </div>

    

  </nav>

  </div>

</template>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-brand,
.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-brand {
  margin-right: auto;
}

.navbar-item {
  color: white;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
}

.navbar-item:hover,
.dropdown-item:hover {
  background-color: #555;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: block;
  /* Cambiado para usar v-if en lugar de CSS hover */
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1001;
}

.dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
</style>

<script>
import Modal from './Modal.vue';

export default {
  name: 'Navbar',
  components: {
    Modal,
  },
  data() {
    return {
      isDropdownOpen: false,
      showModal: false, // Estado del modal
      name: "",
      surname: "",
      email: "",
      address: "",
      birthdate: "",
      telephone: "",
      gender: "",
      profileImage: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    onSubmit() {
      this.$validator.validate().then((valid) => {
        if (!valid) {
        } else {
          console.log(this.$data);
          this.showModal = false; // Cierra el modal después de enviar el formulario
        }
      });
    },
  },
};
</script>