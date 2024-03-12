

<template>
    <div>

        <CategoriesNavbar />

        <Navbar />

        <Login2 />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import CategoriesNavbar from '../components/CategoriesNavbar.vue';
import Login2 from '../components/Login2.vue';

export default {
  name: 'LoginPage',
  components: {
    Navbar,
    CategoriesNavbar,
    Login2
  }
}



</script>

<style>
</style>