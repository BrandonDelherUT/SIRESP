<template>
    <b-container fluid>
    <CategoriesNavbar />
    <Navbar />
    <div class="main-content">
        <Pago />
    </div>
    </b-container>
  </template>
  
  <script>
    import Navbar from "../components/Navbar.vue";
    import CategoriesNavbar from "../components/CategoriesNavbar.vue";
    import Pago from "../components/Pago.vue";

    export default {
      name: 'Plantilla',
      components: {
        Navbar,
        CategoriesNavbar,
        Pago
      }
    }

  </script>
  
  <style scoped>

.main-content {

  margin-top: calc(3.5rem + 50px); 
  padding: 1rem;

}
  </style>
  