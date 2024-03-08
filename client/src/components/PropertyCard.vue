<template>
        <b-container fluid>
          <div class="property-container">
            <div class="property-card" v-for="property in properties" :key="property.id">
              <img src="../assets/img/casa-2.webp" :alt="property.title" class="property-image">
              <div class="property-details">
                <h2>{{ property.title }}</h2>
                <p>{{ property.price }}</p>
                <p>{{ property.description }}</p>
              </div>
            </div>
          </div>
        </b-container>
  </template>
  
  <script>
  export default {
    name: 'PropertyCard',
    props: {
      properties: Array
    }
  }
  </script>
  
  <style scoped>
.property-container {
    top: 10rem;
    right: 1rem;
  width: 80vw; /* Usa el 100% del ancho de la ventana del viewport */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto; /* Asegura centrar el contenedor si es necesario */
}

.property-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: calc((100vw - 60px) / 5); /* Ajusta el ancho de las tarjetas para que quepan 5 en una fila */
  padding: 0.5rem;
    margin: 0.5rem;
}

.property-image {
  width: 100%;
  height: 200px; /* Mantiene la proporción de la imagen */
  object-fit: cover;
}

.property-details {
  padding: 0.5rem;
}

.property-details h2,
.property-details p {
  margin: 0.5rem 0;
}

  </style>
  