<template>
  <div>
    <!-- Botón de registro -->
    <b-button @click="showModal = true" variant="primary">Registrar</b-button>

    <!-- Modal -->
    <b-modal
      v-model="showModal"
      :modal-class="['custom-modal']"
      title="Reseña"
      hide-footer
      size="lg"
      header-bg-variant="primary"
      header-text-variant="light"
      
     
    
      
      
    >
      <b-form @submit.prevent="onSubmit" class="modal-form">

        <b-form-group label="Valoración">
          <b-form-rating v-model="rating" variant="warning" v-validate="'required|min_value:1|max_value:5' " name="rating" style="font-size:xx-large;"></b-form-rating>
          <span class="text-danger">{{ errors.first("rating") }}</span>
        </b-form-group>

        <b-form-group label="Comentarios">
          <b-form-textarea v-model="review" type="text" v-validate="'required|noContarEspacios:10'" name="review" />
          <span class="text-danger">{{ errors.first("review") }}</span>
        </b-form-group>

        <!-- Botón Enviar -->
        <div class="text-center">
          <b-button style="margin-top: 5%" type="submit" variant="primary">Enviar</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
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
  },
};
</script>

<style scoped>

.custom-modal .modal-content {
  border-radius: 10px; /* Bordes redondeados */
}


.modal-form {
  margin: 0 auto;
  max-width: 600px;
}

.b-form-group {
  margin-bottom: 20px;
}




</style>
