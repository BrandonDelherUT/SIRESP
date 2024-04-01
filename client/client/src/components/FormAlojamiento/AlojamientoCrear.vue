<template>
  <div id="formulario">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8">
          <div style="margin-top: 5%">
            <b-card
              title="Modificación/Creación de Alojamiento"
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
                    <b-col cols="6">
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
                  </b-row>

                  <b-row>
                    <b-col cols="6">
                      <b-form-group label="Número de Huéspedes">
                        <b-form-input
                          v-validate="'required|numeric|min_value:1'"
                          name="guests"
                          v-model="accommodation.NumGuest"
                          type="number"
                        />
                        <span class="text-danger">{{
                          errors.first("guests")
                        }}</span>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group label="Número de Habitaciones">
                        <b-form-input
                          v-validate="'required|numeric|min_value:1'"
                          name="rooms"
                          v-model="accommodation.NumBeds"
                          type="number"
                        />
                        <span class="text-danger">{{
                          errors.first("rooms")
                        }}</span>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col cols="6">
                      <b-form-group label="Número de Camas">
                        <b-form-input
                          v-validate="'required|numeric|min_value:1'"
                          name="beds"
                          v-model="accommodation.NumBathrooms"
                          type="number"
                        />
                        <span class="text-danger">{{
                          errors.first("beds")
                        }}</span>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group label="Número de Baños">
                        <b-form-input
                          v-validate="'required|numeric|min_value:1'"
                          name="bathrooms"
                          v-model="accommodation.NumBeds"
                          type="number"
                        />
                        <span class="text-danger">{{
                          errors.first("bathrooms")
                        }}</span>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-form-group label="Extras">
                    <b-form-checkbox-group v-model="accommodation.extras">
                      <b-form-checkbox value="wifi">Wifi</b-form-checkbox>
                      <b-form-checkbox value="tv">TV</b-form-checkbox>
                      <b-form-checkbox value="kitchen">Cocina</b-form-checkbox>
                      <b-form-checkbox value="Alberca">Alberca</b-form-checkbox>
                      <b-form-checkbox value="Estacionamiento">Estacionamiento</b-form-checkbox>

                      <!-- Agrega más checkboxes según sea necesario -->
                    </b-form-checkbox-group>
                  </b-form-group>

                  <b-form-group label="imagenes">
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

                  <b-row>
                    <b-col cols="6">
                      <b-form-group label="Disponibilidad">
                        <b-form-radio-group
                          v-model="accommodation.availability"
                        >
                          <b-form-radio value="Por Aprobar"
                            >Por Aprobar</b-form-radio
                          >
                          <b-form-radio value="Disponible"
                            >Disponible</b-form-radio
                          >
                          <b-form-radio value="No Disponible"
                            >No Disponible</b-form-radio
                          >
                        </b-form-radio-group>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-button
                    style="margin-top: 5%"
                    type="submit"
                    variant="primary"
                    >Enviar</b-button
                  >
                </b-form>
              </b-card-body>
            </b-card>
          </div>
        </b-col>
        <b-col></b-col>
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
          // Aquí puedes enviar los datos al servidor o realizar cualquier otra acción
          console.log("Datos del formulario:", this.accommodation);
          alert("Formulario enviado correctamente.");
        }
      });
    },
    checkReceptionTime(value) {
      // Validación personalizada para la hora de recepción
      // Puedes agregar tu lógica de validación aquí
      return value > this.accommodation.checkoutTime;
    },
    checkCheckoutTime(value) {
      // Validación personalizada para la hora de salida
      // Puedes agregar tu lógica de validación aquí
      return value < this.accommodation.receptionTime;
    },
    validLocation(value) {
      // Validación personalizada para la ubicación
      // Puedes agregar tu lógica de validación aquí
      return value !== "Invalid";
    },
  },
};
</script>

<style>
#formulario {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: aliceblue;
}

/* Estilos adicionales para mejorar la apariencia del formulario */
.b-card {
  border-radius: 15px;
}

.text-danger {
  font-size: 14px;
}

.b-form-group {
  margin-bottom: 30px;
}
</style>
