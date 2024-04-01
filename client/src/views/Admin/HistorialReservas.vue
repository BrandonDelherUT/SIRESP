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
                        <h2 class="text-center">Historial de Reservas</h2>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <div class="col-xl-12">
                            <b-card class="card_shadow mt-3" v-for="reserva in reservas" :key="reserva.id">
                                <div class="row">
                                    <div class="col-md-3 text-center">
                                        <img class="img_historial" :src="reserva.imagen" alt="">
                                    </div>
                                    <div class="col-md-6 text-center">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <h5>Fecha de llegada</h5>
                                                <p>{{ reserva.fecha_llegada }}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <h5>Fecha de Salida</h5>
                                                <p>{{ reserva.fecha_salida }}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <h5>Número de Huespedes</h5>
                                                <p>{{ reserva.num_huespedes }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 text-center">
                                        <div class="row">
                                            <div class="" >
                                              <h5>Estado de la Reserva</h5>
                                              <b-badge :variant="getBadgeVariant(reserva.estadoReserva)" @click="openModal(reserva)" style="cursor: pointer;">
                                                  {{ reserva.estadoReserva }}
                                              </b-badge>
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
        <b-modal v-model="modalVisible" title="Cambiar Estado" @ok="changeStatus" @cancel="modalVisible = false">
            <p>Seleccione el nuevo estado para la reserva:</p>
            <b-form-select v-model="selectedReserva.estadoReserva">
                <b-form-select-option value="Pendiente">Pendiente</b-form-select-option>
                <b-form-select-option value="Aprobada">Aprobada</b-form-select-option>
                <b-form-select-option value="Rechazada">Rechazada</b-form-select-option>
                <b-form-select-option value="Cancelada">Cancelada</b-form-select-option>
            </b-form-select>
        </b-modal>
    </div>
</template>

<script>
import NavbarUser from "../../components/Inicio/NavbarUser.vue";
import CategoriesNavbar from "../../components/Inicio/CategoriesNavbar.vue";


export default {
    name: "ReservasView",
    components: {
        NavbarUser,
        CategoriesNavbar,
    },
    data() {
        return {
            reservas: [{
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
  ],
            modalVisible: false,
            selectedReserva: {}, // Inicializamos selectedReserva aquí
        };
    },
    mounted() {
        this.reservas = reservasData;
    },
    methods: {
        getBadgeVariant(estadoReserva) {
            switch (estadoReserva) {
                case "Pendiente":
                    return "warning";
                case "Aprobada":
                    return "success";
                case "Rechazada":
                    return "danger";
                case "Cancelada":
                    return "secondary";
                default:
                    return "secondary";
            }
        },
        openModal(reserva) {
            this.selectedReserva = reserva;
            this.modalVisible = true;
        },
        changeStatus() {
            // Aquí puedes realizar la lógica para cambiar el estado de la reserva en tu sistema.
            // Por ahora, simplemente lo imprimiré en la consola.
            console.log("Nuevo estado:", this.selectedReserva.estado);
            this.modalVisible = false;
        },
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