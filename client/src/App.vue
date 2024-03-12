<template>
  <div>

    <router-view/>

  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import CategoriesNavbar from './components/CategoriesNavbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    CategoriesNavbar,
  },
  data() {
    return {
      properties: [
        {
          id: 1,
          image: './assets/img/casa-2.webp',
          title: 'Casa en el centro',
          price: 'USD 1,000/mes',
          description: 'Una breve descripción de la propiedad.'
        },
        {
          id: 2,
          image: 'ruta/a/la/imagen/de/la/propiedad2.jpg',
          title: 'Apartamento vista al mar',
          price: 'USD 1,500/mes',
          description: 'Una breve descripción de la propiedad.'
        },
        {
          id: 3,
          image: 'ruta/a/la/imagen/de/la/propiedad3.jpg',
          title: 'Villa con piscina',
          price: 'USD 2,000/mes',
          description: 'Una breve descripción de la propiedad.'
        },
        {
          id: 4,
          image: 'ruta/a/la/imagen/de/la/propiedad4.jpg',
          title: 'Estudio amueblado',
          price: 'USD 800/mes',
          description: 'Una breve descripción de la propiedad.'
        },
        {
          id: 5,
          image: 'ruta/a/la/imagen/de/la/propiedad5.jpg',
          title: 'Casa en la montaña',
          price: 'USD 1,200/mes',
          description: 'Una breve descripción de la propiedad.'
        }
      ]
    }
  }

}
</script>./views/Login.vue
