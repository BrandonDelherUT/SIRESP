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
      },
      data() {
        return {
          categories: [
            // Datos de ejemplo
            { id: 1, name: 'Casas', icon: 'house-fill' },
            { id: 2, name: 'Apartamentos', icon: 'building' },
            { id: 3, name: 'Playa', icon: 'umbrella' },
            { id: 4, name: 'Villas', icon: 'tree' }
          ]
        };
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
  