<template>
  <div>
    <b-modal v-model="showModal" title="Modificacion de Usuario" hide-footer size="lg" modal-class="custom-modal"
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

    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" href="/userHome">
          <img src="../../assets/img/Logo.jpeg" alt="Vue.js" width="40" height="40" />
          <span class="title">SIRESP</span>
        </a>
        <div class="navbar-menu">
          

          <div class="dropdown">
            <a class="navbar-item" href="#" @click="toggleDropdown">Perfil <b-icon icon="caret-down" /></a>
            <div class="dropdown-menu" v-if="isDropdownOpen" @click="toggleDropdown">
              <a class="dropdown-item" href="/perfil">Ver Perfil</a>
              <a class="dropdown-item" v-on:click="showModal = true">Modificar Perfil</a>
              <a v-if="isUser||isAdmin" class="dropdown-item" href="/registroAnfitrion">Registrarse como Anfitrión</a>
              <a v-if="isHost||isAdmin" class="dropdown-item" href="/modificarAnfitrion">Modificar datos de Anfitrión</a>
              <a v-if="isHost||isAdmin" class="dropdown-item" href="/alojamiento">Mostrar mis alojamientos</a>
              <a v-if="isHost||isAdmin" class="dropdown-item" href="/insertarAlojamiento">Insertar Alojamiento</a>
              <a v-if="isHost||isAdmin" class="dropdown-item" href="/modificarAlojamiento">Modificar Alojamiento</a>
              <a v-if="isAdmin" class="dropdown-item" href="/aprobacionAlojamientos">Aprobacion de Alojamientos</a>
              <a v-if="isAdmin" class="dropdown-item" href="/administrarCategorias">Administrar Categorias</a>
              <a v-if="isAdmin" class="dropdown-item" href="/administrarUsuarios">Administrar Usuarios</a>
              <a v-if="isAdmin" class="dropdown-item" href="/historialVerifAnf">Historial de Anfitriones</a>
              <a v-if="isAdmin" class="dropdown-item" href="/historialVerifAloj">Historial de Alojamientos</a>
              <a v-if="isAdmin" class="dropdown-item" href="/historialPagos">Historial de Pagos</a>
              <a v-if="isAdmin" class="dropdown-item" href="/historialReservas">Historial de Reservas</a>
              <a v-if="isAdmin" class="dropdown-item" href="/historialCancelaciones">Historial de Cancelaciones</a>
              <a class="dropdown-item" style="background-color: #a00404;" @click="logout">Cerrar Sesión</a>
            </div>
          </div>
        </div>
        


        <div class="bottom-tab-nav" v-if="isMobile">
          <a class="tab-item" href="/userHome">
            <b-icon icon="house-door" font-scale="1.5"></b-icon>
            <span>Inicio</span>
          </a>

          <a class="tab-item" href="/perfil">
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

.title {
  padding-left: 10px;
  color: white;
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
  display: inline-block;
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
  .dropdown-menu {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    min-width: initial;
    max-height: calc(100vh - 50px);
    overflow-y: auto;
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
      isMobile: window.innerWidth <= 768,
    };
  },
  mounted() {
    this.checkUserRole();
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
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
    logout() {
      sessionStorage.removeItem('token'); 
      sessionStorage.removeItem('isAuthenticated');
      this.$router.push('/');
      window.location.reload();
    },
    checkUserRole() {
      const userRole = sessionStorage.getItem('token');
      if (userRole) {
        const claims = JSON.parse(atob(userRole.split('.')[1]));
        this.isAdmin = claims.authorities.includes('[{\"authority\":\"ROLE_ADMIN\"}]'); // Verificar si el usuario es administrador
        this.isUser = claims.authorities.includes('[{\"authority\":\"ROLE_USER\"}]'); // Verificar si el usuario es usuario
        this.isHost = claims.authorities.includes('[{\"authority\":\"ROLE_HOST\"}]'); // Verificar si el usuario es anfitrión
      }
    }
  }
};
</script>