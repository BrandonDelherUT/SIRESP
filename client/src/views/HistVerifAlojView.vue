<template>
  <div>
    <b-container fluid>
    <CategoriesNavbar />
    <Navbar />
      <HistorialVerifAlojamientos />
    </b-container>
  </div>
  </template>
  
  <script>
    import Navbar from "../components/Navbar.vue";
    import CategoriesNavbar from "../components/CategoriesNavbar.vue";
    import HistorialVerifAlojamientos from "../components/HistorialVerifAlojamientos.vue"

    export default {
      name: 'HistorialVerifAlojView',
      components: {
        Navbar,
        CategoriesNavbar,
        HistorialVerifAlojamientos
      }
    }

  </script>
  
  <style scoped>
  </style>
  