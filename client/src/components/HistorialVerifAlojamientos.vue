<template>
    <b-container>
      <b-row>
        <b-col>
          <h2>Historial de Verificaciones de Alojamientos</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table
            striped
            hover
            :items="alojamientos"
            :fields="fields"
          >
            <template #cell(verDetalle)="data">
              <b-button size="sm" @click="verDetalle(data.item)">Ver Detalle</b-button>
            </template>
            <template #cell(documentos)="data">
              <a :href="data.item.urlDocumento" target="_blank">Descargar</a>
            </template>
          </b-table>
        </b-col>
      </b-row>
  
      <b-modal id="detalle-modal" title="Detalle del Alojamiento" hide-footer>
        <div>
          <b>Nombre del Alojamiento:</b> {{ detalleAlojamiento.nombre }}
        </div>
        <div>
          <b>Ubicación:</b> {{ detalleAlojamiento.ubicacion }}
        </div>
        <div>
          <b>Fecha de Verificación:</b> {{ detalleAlojamiento.fechaVerificacion }}
        </div>
      </b-modal>
    </b-container>
  </template>
  
  <script>
  export default {
    name: 'HistorialVerificacionesAlojamientos',
    data() {
      return {
        fields: [
          { key: 'nombre', label: 'Nombre del Alojamiento' },
          { key: 'ubicacion', label: 'Ubicación' },
          { key: 'fechaVerificacion', label: 'Fecha de Verificación' },
          { key: 'verDetalle', label: 'Detalle' },
          { key: 'documentos', label: 'Documentos' }
        ],
        alojamientos: [
          { nombre: 'Casa Bonita', ubicacion: 'Ciudad X', fechaVerificacion: '2024-04-01', urlDocumento: 'https://example.com/doc1.pdf' },
          { nombre: 'Apartamento Sol', ubicacion: 'Ciudad Y', fechaVerificacion: '2024-04-02', urlDocumento: 'https://example.com/doc2.pdf' }
        ],
        detalleAlojamiento: {}
      };
    },
    methods: {
      verDetalle(alojamiento) {
        this.detalleAlojamiento = alojamiento;
        this.$bvModal.show('detalle-modal');
      }
    }
  }
  </script>
  