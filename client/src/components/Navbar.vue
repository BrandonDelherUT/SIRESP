<template>
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
          <a class="navbar-item" href="/modal">
            Acerca de
          </a>
          <a class="navbar-item" href="/contacto">
            Contacto
          </a>
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
  
  .navbar-brand, .navbar-menu {
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
  
  .navbar-item:hover, .dropdown-item:hover {
    background-color: #555;
  }
  
  .dropdown {
    position: relative;
  }
  
  .dropdown-menu {
    display: block; /* Cambiado para usar v-if en lugar de CSS hover */
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
  export default {
    data() {
      return {
        isDropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
    },
  };
  </script>
  