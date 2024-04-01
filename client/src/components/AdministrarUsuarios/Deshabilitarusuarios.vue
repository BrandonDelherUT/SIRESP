<template>
  <div>
    <b-table striped hover :items="userData" :fields="tableFields" v-if="userData.length > 0">
      <!-- Table cells as before -->
      <template #cell(actions)="data">
        <b-button @click="toggleUserStatus(data.item)" :variant="data.item.status === 'Habilitado' ? 'danger' : 'success'">
          {{ data.item.status === 'Habilitado' ? 'Deshabilitar' : 'Habilitar' }}
        </b-button>
      </template>
    </b-table>

    <div v-else>
      <p>No se encontraron datos del usuario.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [
        {
          id: 1,
          name: "Nombre",
          lastName: "Apellido",
          username: "username",
          role: "Rol",
          address: "Dirección",
          date: "Fecha de Nacimiento",
          phone: "Teléfono",
          gender: "Género",
          email: "Email",
          profilePicture: "URL de la foto",
          status: "Habilitado", // Puedes cambiar el estado según necesites
        },
        // Otros objetos de usuario según necesites
      ],
      tableFields: [
        { key: "name", label: "Nombre" },
        { key: "lastName", label: "Apellidos" },
        { key: "username", label: "Username" },
        { key: "role", label: "Rol" },
        { key: "address", label: "Dirección" },
        { key: "date", label: "Fecha de Nacimiento" },
        { key: "phone", label: "Teléfono" },
        { key: "gender", label: "Género" },
        { key: "email", label: "Email" },
        { key: "profilePicture", label: "Foto de Perfil" },
        { key: "actions", label: "Acciones" },
      ],
    };
  },
  methods: {
    toggleUserStatus(user) {
      const newStatus = user.status === 'Habilitado' ? 'Deshabilitado' : 'Habilitado';
      console.log(`Cambiando estado del usuario ${user.id} a ${newStatus}`);
      alert(`Estado del usuario ${user.id} cambiado a ${newStatus}.`);
      user.status = newStatus; // Cambia el estado localmente para demostración
    },
  },
};
</script>

<style scoped>
/* Estilos responsivos */
@media (max-width: 767px) {
  .table-responsive {
    overflow-x: auto;
  }
}
</style>
