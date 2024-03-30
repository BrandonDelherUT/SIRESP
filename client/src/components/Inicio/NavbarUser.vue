<template>
  <div>
    <b-modal v-model="showModal" title="Modificación de Usuario" hide-footer size="lg" modal-class="custom-modal" header-bg-variant="dark" header-text-variant="light" footer-bg-variant="dark" footer-text-variant="light" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <!-- Contenido del modal -->
    </b-modal>

    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="https://vuejs.org/images/logo.png" alt="Vue.js" width="30" height="30" />
          <span>Vue.js</span>
        </a>
        <div class="navbar-menu">
          <a class="navbar-item" href="/plantilla">
            Inicio
          </a>
          <a class="navbar-item" href="/about">
            Acerca de
          </a>

          <div class="dropdown" v-if="!isMobile">
            <a class="navbar-item" href="#" @click="toggleDropdown">Perfil <b-icon icon="caret-down" /></a>
            <div class="dropdown-menu" v-if="isDropdownOpen" @click="toggleDropdown">
              <a class="dropdown-item" v-on:click="showModal = true">Modificar</a>
              <a class="dropdown-item" href="/logout">Cerrar Sesión</a>
            </div>
          </div>
        </div>
        <b-icon v-if="isMobile" icon="list" @click="toggleDropdown" />

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
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
};
</script>