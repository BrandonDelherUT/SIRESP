<template>
  <div>
    <b-row>
      <b-col cols="12">
        <CategoriesNavbar />
        <NavbarUser/>
      </b-col>
    </b-row>
    
    <div class="container-fluid" style="margin-top: 10%;">
      <div class="row mt-5">
        <div class="col-md-12">
          <div class="mt-5">
            <h2 class="text-center">Historial de Pagos</h2>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-xl-12">
              <b-card class="card_shadow mt-3" v-for="pago in pagos" :key="pago.id">
                <div class="row">
                  <div class="col-md-3 text-center">
                    <img class="img_historial" :src="pago.imagen" alt="">
                  </div>
                  <div class="col-md-6 text-center">
                    <div class="row">
                      <div class="col-md-4">
                        <h5>Fecha de llegada</h5>
                        <p>{{ pago.fecha_llegada }}</p>
                      </div>
                      <div class="col-md-4">
                        <h5>Fecha de Salida</h5>
                        <p>{{ pago.fecha_salida }}</p>
                      </div>
                      <div class="col-md-4">
                        <h5>Número de Huespedes</h5>
                        <p>{{ pago.num_huespedes }}</p>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-4">
                        <h5>Fecha de Pago</h5>
                        <p>{{ pago.fecha_pago }}</p>
                      </div>
                      <div class="col-md-4">
                        <h5>Monto</h5>
                        <p>{{ pago.monto }}</p>
                      </div>
                      <div class="col-md-4">
                        <h5>Estado del Pago</h5>
                        <b-badge :variant="pago.estado === 'Pagado' ? 'success' : 'warning'">{{ pago.estado }}</b-badge>
                      </div>
                    </div>
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
  name: "AboutView",
  components: {
    NavbarUser,
    CategoriesNavbar,
  },
  data() {
    return {
      pagos: [{
    "id": 1,
    "imagen": "ruta/a/la/imagen/de/la/propiedad1.jpg",
    "fecha_llegada": "2023-01-01",
    "fecha_salida": "2023-01-05",
    "num_huespedes": 3,
    "fecha_pago": "2023-01-10",
    "monto": "$500",
    "estado": "Pagado",
    "estadoReserva": "Aprobada"
  },
  {
    "id": 2,
    "imagen": "ruta/a/la/imagen/de/la/propiedad2.jpg",
    "fecha_llegada": "2023-02-01",
    "fecha_salida": "2023-02-05",
    "num_huespedes": 4,
    "fecha_pago": "2023-02-10",
    "monto": "$600",
    "estado": "Pagado",
    "estadoReserva": "Aprobada"
  },],
    };
  },
  mounted() {
    this.pagos = pagosData;
  },
};
</script>

<style>
.img_historial {
  height: 100px;
  width: 130px;
}

.card_shadow {
  box-shadow: 3px 3px 3px 2px rgba(32, 32, 32, 0.3);
}
</style>
