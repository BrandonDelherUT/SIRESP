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
  background-color: #f8f9fa;
  color: #007bff;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 3.5rem;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap; /* Cambiado para evitar el salto de línea */
  overflow-x: auto; /* Permite el desplazamiento horizontal */
  -webkit-overflow-scrolling: touch; /* Mejora el desplazamiento en dispositivos táctiles */
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  margin: 0 10px;
}

.category-item span {
  margin-top: 0.5rem;
  color: #007bff; /* Cambiado a azul */
}

.category-item:hover {
  background-color: #e2e6ea;
  border-radius: 0.25rem;
  cursor: pointer;
}

.category-item b-icon {
  margin-bottom: 0.5rem;
  color: #007bff; /* Cambiado a azul */
}

@media (max-width: 768px) {
  .category-item b-icon {
    font-scale: 1.5; /* Reduce el tamaño de los iconos en dispositivos móviles */
  }
}
</style>
