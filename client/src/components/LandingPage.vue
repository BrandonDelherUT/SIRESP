<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index" class="panel" @click="toggle(index)">
        <div class="header">{{ item.title }}</div>
        <div v-if="isActive(index)" class="body">{{ item.description }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: -1, // Ningún panel está activo inicialmente
        items: [
          { title: 'Casas', description: 'Descripción de Casas.' },
          { title: 'Apartamentos', description: 'Descripción de Apartamentos.' },
          { title: 'Estudios', description: 'Descripción de Estudios.' },
          { title: 'Villas', description: 'Descripción de Villas.' },
          // Agrega más categorías según necesites
        ],
      };
    },
    methods: {
      toggle(index) {
        this.activeIndex = this.activeIndex === index ? -1 : index;
      },
      isActive(index) {
        return this.activeIndex === index;
      },
    },
  };
  </script>
  
  <style scoped>
  .accordion {
    margin: 20px 0;

}

.panel {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: -1px; /* Los paneles se superponen ligeramente */
  background-color: #f1f1f1;
}

.header {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  color: #333;
  background-color: #ddd;
  padding: 10px;
  border: 1px solid #ccc;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  position: relative;
}

.body {
  padding: 0 10px;
  background-color: white;
  display: none;
  overflow: hidden;
}

  
  /* Estilos para animación */
  .slide-enter-active, .slide-leave-active {
    transition: max-height 0.5s ease-in-out;
  }
  
  .slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
    max-height: 0;
  }
  </style>
  