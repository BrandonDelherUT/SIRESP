<template>
    <div>
      <!-- Botón de cancelación -->
      <b-button @click="showModal = true" variant="danger">Cancelar Reserva</b-button>
  
      <!-- Modal de cancelación -->
      <b-modal
        v-model="showModal"
        title="Cancelar Reserva"
        hide-footer
        size="lg"
        header-bg-variant="danger"
        header-text-variant="light"
      >
        <b-form @submit.prevent="onSubmit" class="modal-form">
  
          <b-form-group label="Motivo de la cancelación">
            <b-form-textarea v-model="cancellationReason" type="text" v-validate="'required|noContarEspacios:10'" name="cancellationReason" />
            <span class="text-danger">{{ errors.first("cancellationReason") }}</span>
          </b-form-group>
  
          <!-- Botón Enviar -->
          <div class="text-center">
            <b-button style="margin-top: 5%" type="submit" variant="danger">Confirmar Cancelación</b-button>
          </div>
        </b-form>
      </b-modal>
  
      <!-- Modal de confirmación -->
      <b-modal
        v-if="showConfirmModal"
        v-model="showConfirmModal"
        title="Confirmar Cancelación"
        hide-footer
        size="sm"
        header-bg-variant="warning"
        header-text-variant="light"
      >
        <p>¿Estás seguro de cancelar la reserva?</p>
        <div class="text-center">
          <b-button style="margin-top: 5%" @click="showConfirmModal = false" variant="outline-secondary">Cancelar</b-button>
          <b-button style="margin-top: 5%" @click="confirmCancellation" variant="danger">Confirmar Cancelación</b-button>
        </div>
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
        showConfirmModal: false,
        cancellationReason: "",
      };
    },
    methods: {
      onSubmit() {
        this.$validator.validateAll().then((valid) => {
          if (valid) {
            this.showConfirmModal = true;
          } else {
            console.log('Falta completar campos');
            alert('Debes completar todos los campos');
          }
        });
      },
      confirmCancellation() {
        alert('Cancelando reserva con motivo:', this.cancellationReason);
        console.log('Motivo de cancelación:', this.cancellationReason);
        this.showModal = false;
        this.showConfirmModal = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-modal .modal-content {
    border-radius: 20px; /* Cambia el valor según tus preferencias */
  }
  
  .modal-form {
    margin: 0 auto;
    max-width: 600px;
  }
  
  .b-form-group {
    margin-bottom: 20px;
  }
  </style>
  