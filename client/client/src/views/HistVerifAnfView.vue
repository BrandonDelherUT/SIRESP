<template>
  <div>
    <b-container fluid>
    <CategoriesNavbar />
    <Navbar />
      <HistorialVerifAnfitriones />
    </b-container>
  </div>
  </template>
  
  <script>
    import Navbar from "../components/Navbar.vue";
    import CategoriesNavbar from "../components/CategoriesNavbar.vue";
    import HistorialVerifAnfitriones from "../components/HistorialVerifAnfitriones.vue";

    export default {
      name: 'Plantilla',
      components: {
        Navbar,
        CategoriesNavbar,
        HistorialVerifAnfitriones
      }
    }

  </script>
  
  <style scoped>
  </style>
  