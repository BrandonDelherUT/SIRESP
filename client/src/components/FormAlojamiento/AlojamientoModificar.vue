<template>
  <div id="formulario">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="8">
          <b-card
            title="Modificación de Alojamiento"
            class="shadow p-3 mb-5 bg-white rounded"
          >
            <b-card-body>
              <b-form @submit.prevent="onSubmit">
                <b-row>
                  <b-col cols="6">
                    <b-form-group label="Nombre">
                      <b-form-input
                        v-validate="'required|min:3'"
                        name="name"
                        v-model="accommodation.name"
                        type="text"
                      />
                      <span class="text-danger">{{
                        errors.first("name")
                      }}</span>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Descripción">
                      <b-form-textarea
                        v-validate="'required|min:10'"
                        name="description"
                        v-model="accommodation.Description"
                      />
                      <span class="text-danger">{{
                        errors.first("description")
                      }}</span>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row> 
                <b-col cols="12">
                    <b-form-group label="Ubicación">
                      <b-form-input
                        v-validate="'required|validLocation'"
                        name="location"
                        v-model="accommodation.location"
                        type="text"
                      />
                      <span class="text-danger">{{
                        errors.first("location")
                      }}</span>
                    </b-form-group>
                  </b-col>

                </b-row> 

                <b-row>
               
                  <b-col cols="6">
                    <b-form-group label="Precio">
                      <b-form-input
                        v-validate="'required|numeric|min_value:0'"
                        name="price"
                        v-model="accommodation.price"
                        type="number"
                      />
                      <span class="text-danger">{{
                        errors.first("price")
                      }}</span>
                    </b-form-group>
                  </b-col>

                  <b-col cols="6">
                    <b-form-group label="Huespedes">
                      <b-form-input
                        v-validate="'required|numeric|min_value:0'"
                        name="NumGuest"
                        v-model="accommodation.NumGuest"
                        type="number"
                      />
                      <span class="text-danger">{{
                        errors.first("NumGuest")
                      }}</span>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                
                  <b-col cols="6">
                    <b-form-group label="Camas">
                      <b-form-input
                        v-validate="'required|numeric|min_value:0'"
                        name="NumBeds"
                        v-model="accommodation.NumBeds"
                        type="number"
                      />
                      <span class="text-danger">{{
                        errors.first("NumBeds")
                      }}</span>
                    </b-form-group>
                  </b-col>

                  <b-col cols="6">
                    <b-form-group label="Baños">
                      <b-form-input
                        v-validate="'required|numeric|min_value:0'"
                        name="NumBathrooms"
                        v-model="accommodation.NumBathrooms"
                        type="number"
                      />
                      <span class="text-danger">{{
                        errors.first("NumBathrooms")
                      }}</span>
                    </b-form-group>
                  </b-col>
               
                </b-row>

                <b-row>

                <b-col cols="12">

                  <b-form-group label="Extras">
                  <b-form-checkbox-group v-model="accommodation.extras">
                    <b-form-checkbox value="wifi">Wifi</b-form-checkbox>
                    <b-form-checkbox value="tv">TV</b-form-checkbox>
                    <b-form-checkbox value="kitchen">Cocina</b-form-checkbox>
                    <!-- Agrega más checkboxes según sea necesario -->
                  </b-form-checkbox-group>
                </b-form-group>
                </b-col>
                  
                </b-row>


              

                <b-form-group label="Imagenes">
                  <b-form-file
                    v-validate="'required|imageSize'"
                    name="images"
                    v-model="accommodation.images"
                    :state="Boolean(accommodation.images)"
                    placeholder="Seleccione una imagen"
                    accept="image/*"
                    multiple
                  >
                  </b-form-file>
                  <span class="text-danger">{{
                    errors.first("images")
                  }}</span>
                </b-form-group>

                <b-row>


                  <b-col cols="6">
                    <b-form-group label="Hora de Recepción">
                      <b-form-timepicker
                        v-validate="'required|checkReceptionTime'"
                        name="receptionTime"
                        v-model="accommodation.receptionTime"
                      />
                      <span class="text-danger">{{
                        errors.first("receptionTime")
                      }}</span>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Hora de Salida">
                      <b-form-timepicker
                        v-validate="'required|checkCheckoutTime'"
                        name="checkoutTime"
                        v-model="accommodation.checkoutTime"
                      />
                      <span class="text-danger">{{
                        errors.first("checkoutTime")
                      }}</span>
                    </b-form-group>
                  </b-col>

                 



                </b-row> 
                  


                <b-form-group label="Disponibilidad">
                  <b-form-radio-group v-model="accommodation.availability">
                    <b-form-radio value="Por Aprobar">Por Aprobar</b-form-radio>
                    <b-form-radio value="Disponible">Disponible</b-form-radio>
                    <b-form-radio value="No Disponible">No Disponible</b-form-radio>
              </b-form-radio-group>
            </b-form-group>

            <b-row class="justify-content-center">
  <b-col cols="12" lg="8">
    <b-button type="submit" variant="primary" class="mt-3 d-block mx-auto"> <!-- Agregar la clase 'd-block' para convertir el botón en un bloque y 'mx-auto' para centrarlo horizontalmente -->
      Enviar
    </b-button>
  </b-col>
</b-row>

          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</b-container>
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
      accommodation: {
        name: "",
        Description: "",
        location: "",
        price: 0,
        NumGuest: 0,
        NumBeds: 0,
        NumBathrooms: 0,
        images: null,
        extras: [],
        receptionTime: "",
        checkoutTime: "",
        availability: "Por Aprobar",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validate().then((valid) => {
        if (!valid) {
          console.log("Falta completar campos");
          alert("Debes completar todos los campos correctamente.");
        } else {
          console.log("Datos del formulario:", this.accommodation);
          alert("Formulario enviado correctamente.");
        }
      });
    },
    checkReceptionTime(value) {
      return value > this.accommodation.checkoutTime;
    },
    checkCheckoutTime(value) {
      return value < this.accommodation.receptionTime;
    },
    validLocation(value) {
      return value !== "Invalid";
    },
  },
};
</script>
<style>
#formulario {
  background-color: aliceblue;
}

.b-card {
  border-radius: 15px;
}

.text-danger {
  font-size: 14px;
}

.b-form-group {
  margin-bottom: 20px;
}

@media (max-width: 991px) {
  .b-card {
    padding: 20px;
  }

  .b-form-group {
    margin-bottom: 15px;
  }
}
</style>
