<template>
  <div>
    <b-container fluid>
    <CategoriesNavbar />
    <NavbarUser />
      <HistorialVerifAnfitriones />
    </b-container>
  </div>
  </template>
  
  <script>
    import NavbarUser from "../../components/Inicio/NavbarUser.vue";
    import CategoriesNavbar from "../../components/Inicio/CategoriesNavbar.vue";
    import HistorialVerifAnfitriones from "../../components/HistVerifAnfView/HistorialVerifAnfitriones.vue";

    export default {
      name: 'Plantilla',
      components: {
        NavbarUser,
        CategoriesNavbar,
        HistorialVerifAnfitriones
      }
    }

  </script>
  
  <style scoped>
  </style>
  