<template>
    <div class="categories-navbar">
        <div class="category-item">
            <b-icon icon="house-fill" font-scale="2"></b-icon>
            <span>Casas</span>
    </div>
      <div class="category-item">
        <b-icon icon="building" font-scale="2"></b-icon>
        <span>Apartamentos</span>
      </div>
      <div class="category-item">
        <b-icon icon="umbrella" font-scale="2"></b-icon>
        <span>Playa</span>
      </div>
      <div class="category-item">
        <b-icon icon="tree" font-scale="2"></b-icon>
        <span>Villas</span>
      </div>
      <!-- Agrega más categorías según necesites -->
    </div>
  </template>
  
  <style scoped>
  .categories-navbar {
    background-color: #6f97d1;
    color: white;
    padding: 0.5rem 1rem;
    position: fixed;
    top: 3.5rem; /* Ajusta según la altura de tu Navbar */
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex; /* Usa flexbox para alinear los elementos */
    justify-content: center; /* Centra los elementos horizontalmente */
    flex-wrap: wrap; /* Permite que los elementos se ajusten en múltiples líneas */
  }
  
  .category-item {
    display: flex; /* Habilita flexbox para esta clase también */
    flex-direction: column; /* Alinea los elementos en columna */
    align-items: center; /* Centra los elementos verticalmente */
    color: white;
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    margin: 0 10px; /* Agrega un poco de margen entre elementos */
  }
  
  .category-item span {
    margin-top: 0.5rem; /* Espacio entre el icono y el texto */
  }
  
  .category-item:hover {
    color: #007bff; /* Cambia el color al hacer hover para mejorar la interactividad */
  }
  
    .category-item b-icon {
        margin-bottom: 0.5rem; /* Espacio entre el icono y el texto */
    }
  </style>
  