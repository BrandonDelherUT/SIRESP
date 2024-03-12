<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Navbar />
    <CategoriesNavbar />
  </div>
</template>

<style>

</style>

<script>
import Navbar from "../components/Navbar.vue";
import CategoriesNavbar from "../components/CategoriesNavbar.vue";

export default {
  name: 'AboutView',
  components: {
    Navbar,
    CategoriesNavbar
  }
}
</script>
