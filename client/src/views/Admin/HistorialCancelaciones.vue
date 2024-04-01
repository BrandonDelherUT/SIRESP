<template>
  <div>
    <b-row>
      <b-col cols="12">
        <CategoriesNavbar />
        <NavbarUser />
      </b-col>
    </b-row>

    <div class="container-fluid" style="margin-top: 10%;">
      <div class="row mt-5">
        <div class="col-md-12">
          <div class="mt-5">
            <h2 class="text-center">Historial de Cancelaciones</h2>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-xl-12">
              <b-card class="card_shadow mt-3" v-for="(cancelacion, index) in cancelaciones" :key="index">
                <div class="row">
                  <div class="col-md-3 text-center">
                    <img :src="cancelacion.imagen" alt="Imagen de cancelación" style="max-width: 100%;">
                  </div>
                  <div class="col-md-3 text-center">
                    <h5>Nombre</h5>
                    <p>{{ cancelacion.nombre }}</p>
                  </div>
                  <div class="col-md-3 text-center">
                    <h5>Fecha de Cancelación</h5>
                    <p>{{ cancelacion.fecha_cancelacion }}</p>
                  </div>
                  <div class="col-md-3 text-center">
                    <h5>Motivo de Cancelación</h5>
                    <p>{{ cancelacion.motivo }}</p>
                  </div>
                </div>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarUser from "../../components/Inicio/NavbarUser.vue";
import CategoriesNavbar from "../../components/Inicio/CategoriesNavbar.vue";


export default {
  name: "HistorialCancelaciones",
  components: {
    NavbarUser,
    CategoriesNavbar,
  },
  data() {
    return {
      cancelaciones: [{
        "id": 1,
        "nombre": "los Cabos",
        "imagen": "ruta/a/la/imagen1.jpg",
        "motivo": "El alojamiento no cumplía con las expectativas",
        "fecha_cancelacion": "2023-05-10"
      },
      {
        "id": 2,
        "nombre": "LA",
        "imagen": "ruta/a/la/imagen2.jpg",
        "motivo": "Cambio de planes de último momento",
        "fecha_cancelacion": "2023-07-20"
      },
      {
        "id": 3,
        "nombre": "Argentina",
        "imagen": "ruta/a/la/imagen3.jpg",
        "motivo": "Emergencia familiar",
        "fecha_cancelacion": "2023-09-30"
      },
],
    };
  },
  mounted() {
    this.cancelaciones = cancelacionesData;
  },
};
</script>

<style>
.card_shadow {
  box-shadow: 3px 3px 3px 2px rgba(32, 32, 32, 0.3);
}
</style>
