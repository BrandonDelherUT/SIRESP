<template>
  <b-container fluid class="airbnb-container">
    <div class="row">
      <div class="col-md-3">
        <div class="filters">
          <b-form-group label="Ubicación" class="airbnb-form-group">
            <b-form-input v-model="searchLocation" @input="filterData" placeholder="Ej: Ciudad, País"></b-form-input>
          </b-form-group>
          <b-form-group label="Fecha de Llegada" class="airbnb-form-group">
            <b-form-input v-model="searchArrivalDate" type="date" @input="filterData"></b-form-input>
          </b-form-group>
          <b-form-group label="Fecha de Salida" class="airbnb-form-group">
            <b-form-input v-model="searchDepartureDate" type="date" @input="filterData"></b-form-input>
          </b-form-group>
          <b-form-group label="Número de huéspedes" class="airbnb-form-group">
            <b-form-input v-model="searchGuests" type="number" @input="filterData"></b-form-input>
          </b-form-group>
          <b-button variant="primary" @click="buscar" class="airbnb-button">Buscar</b-button>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row mt-4">
          <div class="col-md-4 col-sm-6 mb-4" v-for="(myDataa, index) in myData" :key="index">
            <div class="card h-100 airbnb-card">
              <div class="card-img-top airbnb-card-img-top" :style="{ backgroundImage: `url(${myDataa.imagen})` }">
              </div>
              <div class="card-body">
                <h5 class="card-title airbnb-card-title">{{ myDataa.nombre }}</h5>
                <p class="card-text airbnb-card-text"><strong>Ubicación: </strong>{{ myDataa.autor }}</p>
                <p class="card-text airbnb-card-text"><strong>Número de huéspedes: </strong>{{ myDataa.fechaPub }}</p>
                <p class="card-text airbnb-card-text"><strong>Precio: </strong>{{ myDataa.precio }}</p>
                <b-button variant="primary" class="airbnb-button" href="/infoalojamiento">Ver más</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      myData: [
        { nombre: 'Ejemplo 1', imagen: 'https://via.placeholder.com/300', autor: 'Autor 1', fechaPub: '2023-01-01', precio: '$100' },
        { nombre: 'Ejemplo 2', imagen: 'https://via.placeholder.com/300', autor: 'Autor 2', fechaPub: '2023-02-01', precio: '$120' },
        { nombre: 'Ejemplo 3', imagen: 'https://via.placeholder.com/300', autor: 'Autor 3', fechaPub: '2023-03-01', precio: '$150' },
        { nombre: 'Ejemplo 1', imagen: 'https://via.placeholder.com/300', autor: 'Autor 1', fechaPub: '2023-01-01', precio: '$100' },
        { nombre: 'Ejemplo 2', imagen: 'https://via.placeholder.com/300', autor: 'Autor 2', fechaPub: '2023-02-01', precio: '$120' },
        { nombre: 'Ejemplo 3', imagen: 'https://via.placeholder.com/300', autor: 'Autor 3', fechaPub: '2023-03-01', precio: '$150' },
        { nombre: 'Ejemplo 1', imagen: 'https://via.placeholder.com/300', autor: 'Autor 1', fechaPub: '2023-01-01', precio: '$100' },
        { nombre: 'Ejemplo 2', imagen: 'https://via.placeholder.com/300', autor: 'Autor 2', fechaPub: '2023-02-01', precio: '$120' },
        { nombre: 'Ejemplo 3', imagen: 'https://via.placeholder.com/300', autor: 'Autor 3', fechaPub: '2023-03-01', precio: '$150' },
        { nombre: 'Ejemplo 1', imagen: 'https://via.placeholder.com/300', autor: 'Autor 1', fechaPub: '2023-01-01', precio: '$100' },
        { nombre: 'Ejemplo 2', imagen: 'https://via.placeholder.com/300', autor: 'Autor 2', fechaPub: '2023-02-01', precio: '$120' },
        { nombre: 'Ejemplo 3', imagen: 'https://via.placeholder.com/300', autor: 'Autor 3', fechaPub: '2023-03-01', precio: '$150' },
      ],
    }
  },

}
</script>



<style scoped>
.airbnb-container {
  max-width: 1800px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: static;
  top: 80px;
}

.filters {
  background-color: #e7e7e7;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
}


@media screen and (max-width: 1120px) {
  .filters {
    position: fixed;
    width: 200px;
  }

}

@media screen and (max-width: 900px) {
  .filters {
    position: static;
    width: auto;
  }

}


.airbnb-form-group {
  margin-bottom: 20px;
}

.airbnb-card {
  border: 10px solid #e4e4e4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  margin-bottom: 1.5rem;
  border-radius: 20px;
}

.airbnb-card:hover {
  transform: translateY(-5px);
}

.airbnb-card-img-top {
  height: 180px;
  background-size: cover;
  background-position: center;
}

.airbnb-card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.airbnb-card-text {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.airbnb-button {
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
}
</style>
