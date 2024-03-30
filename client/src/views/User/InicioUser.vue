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
import NavbarUser from "../../components/Inicio/NavbarUser.vue";
import CategoriesNavbar from "../../components/Inicio/CategoriesNavbar.vue";
import BusquedaAlojamientos from "../../components/Inicio/BusquedaAlojamientos.vue";

export default {
  name: 'Plantilla',
  components: {
    NavbarUser,
    CategoriesNavbar,
    BusquedaAlojamientos
  },

}

</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
}

.main-content {
  margin-top: calc(3.5rem + 50px);
  padding: 1rem;
}
</style>