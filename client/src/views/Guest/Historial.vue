<template>
  <div>
    <b-row>
      <b-col cols="12">
        <CategoriesNavbar />
        <NavbarUser />
      </b-col>
    </b-row>

    <div class="container-fluid" style="margin-top: 10%;">
      <b-modal v-model="showModal" :modal-class="['custom-modal']" title="Reseña" hide-footer size="lg"
        header-bg-variant="primary" header-text-variant="light">
        <b-form @submit.prevent="onSubmit" class="modal-form">

          <b-form-group label="Valoración">
            <b-form-rating v-model="rating" variant="warning" v-validate="'required|min_value:1|max_value:5'"
              name="rating" style="font-size:xx-large;"></b-form-rating>
            <span class="text-danger">{{ errors.first("rating") }}</span>
          </b-form-group>

          <b-form-group label="Comentarios">
            <b-form-textarea v-model="review" type="text" v-validate="'required|min:10'" name="review" />
            <span class="text-danger">{{ errors.first("review") }}</span>
          </b-form-group>

          <div class="text-center">
            <b-button style="margin-top: 5%" variant="primary" >Enviar</b-button>
          </div>
        </b-form>
      </b-modal>
      <div class="row mt-5">
        <div class="col-md-12">
          <div class="mt-2">
            <h2 class="text-center">Historial de Reservas</h2>
          </div>

          <div class="row justify-content-center mt-4">
            <div class="col-xl-12">
              <b-card class="card_shadow">
                <div class="row">
                  <div class="col-md-3">
                    <img class="img_historial" src="https://via.placeholder.com/150" alt="">
                  </div>
                  <div class="col-md-4 text-center">
                    <div class="row">
                      <div class="col-md-4">
                        <h5>Fecha de llegada</h5>
                        <p>18/03/2024</p>
                      </div>
                      <div class="col-md-4">
                        <h5>Fecha de Salida</h5>
                        <p>22/03/2024</p>
                      </div>
                      <div class="col-md-3">
                        <h5>Número de Huespedes</h5>
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <h5>Status</h5>
                    <b-badge variant="success">Activo</b-badge>
                  </div>
                  <div class="col-md-2">
                    <h5>Acciones</h5>
                    <b-button @click="showModal = true" variant="secondary">Agregar Reseña</b-button>
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
import { ValidationProvider } from "vee-validate";

export default {
  name: 'AboutView',
  components: {
    NavbarUser,
    CategoriesNavbar,
    ValidationProvider,
  },
  data() {
    return {
      showModal: false,
      review: "",
      rating: 0, // Valor inicial de la valoración
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (!valid) {
          console.log('Falta completar campos');
          alert('Debes completar todos los campos');
        } else {
          alert('Enviando registro');
          console.log('Reseña:', this.review);
          console.log('Valoración:', this.rating);
          this.showModal = false;
        }
      });
    },
  }

}
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