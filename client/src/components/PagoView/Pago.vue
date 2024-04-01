<template>
  <div>
    <!-- Tu código existente aquí -->

    <!-- Botón de Stripe -->
    <button @click="redirectToStripe" class="btn-stripe">Pagar con Stripe</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToStripe() {
      // Redirigir al enlace de Stripe
      ;
    }
  }
}
</script>

<style>
/* Estilo para el botón de Stripe */
.btn-stripe {
  background-color: #6772E5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.btn-stripe:hover {
  background-color: #5469d4;
}
</style>
