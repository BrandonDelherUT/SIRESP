<template>
  <div>
    <b-modal v-model="showModal" title="Registro de Usuario" hide-footer size="lg" modal-class="custom-modal"
      header-bg-variant="dark" header-text-variant="light" footer-bg-variant="dark" footer-text-variant="light"
      style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <b-form @submit.prevent="onSubmit" class="modal-form">
        <b-row>
          <b-col cols="6">
            <b-form-group label="Nombre">
              <b-form-input v-validate="'required|alpha_spaces|min:3'" name="name" v-model="name" type="text" />
              <span class="text-danger">{{ errors.first("name") }}</span>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="Apellidos">
              <b-form-input v-validate="'required|alpha_spaces|min:3'" name="surname" v-model="surname" type="text" />
              <span class="text-danger">{{ errors.first("surname") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <b-form-group label="Dirección">
              <b-form-input v-validate="'required|regex:^[a-zA-Z0-9 #]+$'" name="address" v-model="address"
                type="text" />
              <span class="text-danger">{{ errors.first("address") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group label="Fecha de Nacimiento">
              <b-form-datepicker v-validate="'required|adult'" name="birthdate" v-model="birthdate" type="text" />
              <span class="text-danger">{{ errors.first("birthdate") }}</span>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="Teléfono">
              <b-form-input v-validate="'required|digits:10'" name="telephone" v-model="telephone" type="text" />
              <span class="text-danger">{{ errors.first("telephone") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group label="Género">
              <b-form-select v-validate="'required'" name="gender" v-model="gender">
                <option value="">Seleccionar Género</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </b-form-select>
              <span class="text-danger">{{ errors.first("gender") }}</span>
            </b-form-group>
          </b-col>

          <b-col cols="6">
            <b-form-group label="Imagen de perfil">
              <b-form-file v-validate="'required|imageSize'" name="profileImage" v-model="profileImage"
                :state="Boolean(profileImage)" placeholder="Seleccione una imagen" accept="image/*">
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
              <b-form-input v-validate="'required|regex:^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]'" name="email" v-model="email"
                type="email" />
              <span class="text-danger">{{ errors.first("email") }}</span>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="Contraseña">
              <b-form-input v-validate="'required|min:8|specialCharacter|noSpace'" name="password" v-model="contrasena"
                type="password" :class="{ 'is-danger': errors.has('password') }" ref="password" />
              <span class="text-danger">{{ errors.first("password") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <div class="text-center">
          <b-button style="margin-top: 5%" type="submit" variant="primary">Enviar</b-button>
        </div>
      </b-form>
    </b-modal>

    <b-modal v-model="showLoginModal" title="Inicio de Sesión" hide-footer size="md" header-bg-variant="dark"
      header-text-variant="light" footer-bg-variant="dark" footer-text-variant="light">
      <b-form @submit.prevent="onLoginSubmit" class="modal-form">
        <b-row>
          <b-col cols="12">
            <b-form-group label="Correo electrónico">
              <b-form-input v-validate="'required|email'" name="loginEmail" v-model="loginEmail" type="email"
                placeholder="Ingrese su correo electrónico" />
              <span class="text-danger">{{ errors.first("loginEmail") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12">
            <b-form-group label="Contraseña">
              <b-form-input v-validate="'required|min:8'" name="loginPassword" v-model="loginPassword" type="password"
                placeholder="Ingrese su contraseña" />
              <span class="text-danger">{{ errors.first("loginPassword") }}</span>
            </b-form-group>
          </b-col>
        </b-row>

        <div class="text-center">
          <b-button type="submit" variant="primary">Iniciar Sesión</b-button>
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
          <a class="navbar-item" href="/">
            Inicio
          </a>
       

          <div class="dropdown" v-if="!isMobile">
            <a class="navbar-item" href="#" @click="toggleDropdown">Perfil <b-icon icon="caret-down" /></a>
            <div class="dropdown-menu" v-if="isDropdownOpen" @click="toggleDropdown">
              <a class="dropdown-item" v-on:click="showLoginModal = true">Iniciar Sesión</a>
              <a class="dropdown-item" v-on:click="showModal = true">Registrarse</a>
            </div>
          </div>

        </div>
        <div class="bottom-tab-nav" v-if="isMobile">
          <a class="tab-item" href="/perfil">
            <b-icon icon="house-door" font-scale="1.5"></b-icon>
            <span>Inicio</span>
          </a>
          <a class="tab-item" href="/about">
            <b-icon icon="info-circle" font-scale="1.5"></b-icon>
            <span>Acerca de</span>
          </a>
          <a class="tab-item" href="/plantilla">
            <b-icon icon="person" font-scale="1.5"></b-icon>
            <span>Perfil</span>
          </a>

        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #007bff;
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

.navbar-toggler {
  display: none;
  background: none;
  border: none;
  color: white;
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
  background-color: #0056b3;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: block;
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

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  .bottom-tab-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #007bff;
    color: white;
    padding: 0.5rem 0;
    z-index: 1000;
  }

  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-decoration: none;
  }

  .tab-item span {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
}
</style>


<script>

export default {
  name: 'Navbar',
  data() {
    return {
      isDropdownOpen: false,
      showModal: false,
      showLoginModal: false,
      showLoginModal2: false,
      name: "",
      surname: "",
      email: "",
      address: "",
      birthdate: "",
      telephone: "",
      gender: "",
      profileImage: null,
      isMobile: window.innerWidth <= 768,
    };
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
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
          this.showModal = false;
        }
      });
    },
    onLoginSubmit() {
      this.$validator.validate().then((valid) => {
        if (!valid) {
        } else {
          console.log('Email:', this.loginEmail, 'Password:', this.loginPassword);
          this.showLoginModal = false;
        }
      });
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
    hideLoginModal() {
      this.showLoginModal = false;
    },
  },
};
</script>