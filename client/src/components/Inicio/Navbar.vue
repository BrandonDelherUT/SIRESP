<template>
  <div>
    <b-modal v-model="showModal" title="Registro de Usuario" hide-footer size="lg" modal-class="custom-modal"
    header-bg-variant="success">
    <b-form @submit.prevent="onSubmit" enctype="multipart/form-data" class="modal-form">
      <b-row>
        <b-col cols="6">
          <b-form-group label="Nombre">
            <b-form-input v-validate="'required|alpha_spaces|min:3'" name="names" v-model="user.names" type="text" />
            <span class="text-danger">{{ errors.first("names") }}</span>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group label="Apellidos">
            <b-form-input v-validate="'required|alpha_spaces|min:3'" name="lastName" v-model="user.lastName"
              type="text" />
            <span class="text-danger">{{ errors.first("lastName") }}</span>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="6">
          <b-form-group label="username">
            <b-form-input v-validate="'required|alpha_num'" name="username" v-model="user.username" type="text" />
            <span class="text-danger">{{ errors.first("username") }}</span>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group label="role">
            <b-form-select v-validate="'required'" name="role" v-model="user.role">
              <option value="">Seleccionar rol</option>
              <option value="ROLE_USER">Usuario</option>
              <option value="ROLE_USER">Arrendador</option>
            </b-form-select>
            <span class="text-danger">{{ errors.first("role") }}</span>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <b-form-group label="address">
            <b-form-input v-validate="'required|regex:^[a-zA-Z0-9 #]+$'" name="address" v-model="user.address"
              type="text" />
            <span class="text-danger">{{ errors.first("address") }}</span>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="6">
          <b-form-group label="date">
            <b-form-datepicker v-validate="'required|adult'" name="date" v-model="user.date" type="text" />
            <span class="text-danger">{{ errors.first("date") }}</span>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group label="phone">
            <b-form-input v-validate="'required|digits:10'" name="phone" v-model="user.phone" type="text" />
            <span class="text-danger">{{ errors.first("phone") }}</span>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="6">
          <b-form-group label="gender">
            <b-form-select v-validate="'required'" name="gender" v-model="user.gender">
              <option value="">Seleccionar Género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </b-form-select>
            <span class="text-danger">{{ errors.first("gender") }}</span>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group label="profilePicture">
            <b-form-file v-validate="'required|imageSize'" name="profilePicture" v-model="user.profilePicture"
              :state="Boolean(user.profilePicture)" placeholder="Seleccione una imagen" accept="image/*">
            </b-form-file>
            <span class="text-danger">{{
    errors.first("profilePicture")
  }}</span>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-form-group label="email">
            <b-form-input v-validate="'required|email'" name="email" v-model="user.email" type="email" />
            <span class="text-danger">{{ errors.first("email") }}</span>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group label="password">
            <b-form-input v-validate="'required'" name="password"
              v-model="user.password" type="password" :class="{ 'is-danger': errors.has('password') }"
              ref="password" />
            <span class="text-danger">{{ errors.first("password") }}</span>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Botón Enviar -->
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
              <b-form-input v-validate="'required'" name="loginEmail" v-model="loginEmail" type="text"
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
          <img src="../../assets/img/Logo.jpeg" alt="Vue.js" width="40" height="40" />
          <span class="title">SIRESP</span>
        </a>
        <div class="navbar-menu" :class="{'is-active':'isNavbarOpen'}">
         
       

          <div class="dropdown" >
            <a class="navbar-item" href="#" @click="toggleDropdown">Perfil <b-icon icon="caret-down" /></a>
            <div class="dropdown-menu" v-if="isDropdownOpen" @click="toggleDropdown">
              <a class="dropdown-item" v-on:click="showLoginModal = true">Iniciar Sesión</a>
              <a class="dropdown-item" v-on:click="showModal = true">Registrarse</a>
            </div>
          </div>

        </div>
        <div class="bottom-tab-nav" v-if="isMobile">
          <a class="tab-item" href="/">
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
import { ValidationProvider } from "vee-validate";
import axios from "axios";
import instance from "../../config/http-client.gateway";
const token = sessionStorage.getItem("token");

export default {
  name: 'Navbar',
  components: {
    ValidationProvider,
  },
  data() {
    return {
      isDropdownOpen: false,
      showModal: false,
      showLoginModal: false,
      showLoginModal2: false,
      user: {
        names: "",
        lastName: "",
        username: "",
        role: "ROLE_USER",
        address: "",
        date: "",
        phone: "",
        gender: "",
        profilePicture: null,
        email: "",
        password: "",
      },
      isMobile: window.innerWidth <= 768,
      loginEmail:"",
      loginPassword:""
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
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    onLoginSubmit() {
      this.$validator.validate().then(async (valid) => {
        if (!valid) {
        } else {
         
          const response = await axios.post('http://localhost:8080/login', { username:this.loginEmail, password:this.loginPassword });
          const token = response.data.token;
          
          // Guardar el token en el almacenamiento local
          sessionStorage.setItem('token', token);
         
          sessionStorage.setItem('isAuthenticated', true);

          

          // Redirigir al usuario a una página de inicio o a donde sea necesario
          this.$router.push('/userHome');
          this.showLoginModal = false;
        }
      });
    },

    async onSubmit() {
      if (!this.$validator.validateAll()) {
        alert("Por favor completa todos los campos obligatorios.");
        return;
      }
      try {
        const formData = new FormData();
        formData.append("profilePicture", this.user.profilePicture);

        const response = await axios.post(
          "http://localhost:8080/api-sirep/user/upload",
          formData
          
        );

        this.user.profilePicture = response.data;

        this.registerUser(); // Llamar a la función de registro de usuario aquí

        alert("Usuario registrado exitosamente.");
        this.showModal = false;
      } catch (error) {
        console.error(error);
        alert("Hubo un error al registrar el usuario.");
      }
    },

    async registerUser() {
      try {
        const response = await instance.doPost(
          "/user/",{ 
            names: this.user.names,
            lastName: this.user.lastName,  
            email: this.user.email,
            phone: this.user.phone, 
            address: this.user.address,
            date: this.user.date,
            gender: this.user.gender,
            profilePicture: this.user.profilePicture,
            role: this.user.role,
            username : this.user.username,
            password: this.user.password
          })

        console.log(response); // Manejar la respuesta de registro
        alert("Usuario registrado exitosamente.");
        this.showModal = false; // Cerrar el modal después del registro exitoso
      } catch (error) {
        console.error(error);
        alert("Hubo un error al registrar el usuario.");
      }
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