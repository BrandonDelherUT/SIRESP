<template>
    <b-container fluid>
    <CategoriesNavbar />
    <Navbar />
    <div class="main-content">
      <BusquedaAlojamientos />
    </div>
    </b-container>
  </template>
  
  <script>
    import Navbar from "../components/Navbar.vue";
    import CategoriesNavbar from "../components/CategoriesNavbar.vue";
    import BusquedaAlojamientos from "../components/BusquedaAlojamientos.vue";

    export default {
      name: 'Plantilla',
      components: {
        Navbar,
        CategoriesNavbar,
        BusquedaAlojamientos
      }
    }

  </script>
  
  <style scoped>
.app-container {
  display: flex;
  flex-direction: column;
}

.main-content {
  margin-top: calc(3.5rem + 50px); /* Ajusta según la altura de tus componentes Navbar y CategoriesNavbar */
  padding: 1rem;
}
  </style>
  