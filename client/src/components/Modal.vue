<template>
    <div>
      <!-- Botón de registro -->
      <b-button @click="showModal = true" variant="primary">Registrar</b-button>
  
      <!-- Modal -->
      <b-modal  v-model="showModal" title="Registro de Usuario" hide-footer size="lg" modal-class="custom-modal" header-bg-variant="warning" >
        <b-form @submit.prevent="onSubmit" class="modal-form ">
          <b-row>
            <b-col cols="6">
              <b-form-group label="Nombre">
                <b-form-input v-validate="'required|alpha_spaces'" name="name" v-model="name" type="text" />
                <span class="text-danger">{{ errors.first('name') }}</span>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group label="Apellidos">
                <b-form-input v-validate="'required|alpha_spaces'" name="surname" v-model="surname" type="text" />
                <span class="text-danger">{{ errors.first('surname') }}</span>
              </b-form-group>
            </b-col>
          </b-row>
  
          <b-row>
            <b-col cols="6">
              <b-form-group label="Correo electrónico">
                <b-form-input v-validate="'required|email'" name="email" v-model="email" type="email" />
                <span class="text-danger">{{ errors.first('email') }}</span>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group label="Dirección">
                <b-form-input v-validate="'required|regex:^[a-zA-Z0-9 ]+$'" name="address" v-model="address" type="text" />
                <span class="text-danger">{{ errors.first('address') }}</span>
              </b-form-group>
            </b-col>
          </b-row>
  
          <b-row>
            <b-col cols="6">
              <b-form-group label="Fecha de Nacimiento">
                <b-form-datepicker v-validate="'required'" name="birthdate" v-model="birthdate" type="text" />
                <span class="text-danger">{{ errors.first('birthdate') }}</span>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group label="Teléfono">
                <b-form-input v-validate="'required|digits:10'" name="telephone" v-model="telephone" type="text" />
                <span class="text-danger">{{ errors.first('telephone') }}</span>
              </b-form-group>
            </b-col>
          </b-row>
  
          <b-row>
            <b-col cols="6">
              <b-form-group label="Género">
                <b-form-select v-validate="'required'" name="gender" v-model="gender">
                  <option value="">Seleccionar Género</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </b-form-select>
                <span class="text-danger">{{ errors.first('gender') }}</span>
              </b-form-group>
            </b-col>

            <b-col cols="6">
                        <b-form-group label="Imagen de perfil">
                          <b-form-file v-validate="'required'"
                           name="profileImage" 
                           v-model="profileImage"
                           :state="Boolean(profileImage)"
                            placeholder="Seleccione una imagen"
                            accept="image/*"
                            > 
                          </b-form-file>
                          <span class="text-danger">{{ errors.first('profileImage') }}</span>
                        </b-form-group>
                      </b-col>
          </b-row>
  
          <!-- Botón Enviar -->
          <div class="text-center">
            <b-button style="margin-top: 5%;" type="submit" variant="primary">Enviar</b-button>
        </div>
         
         
        </b-form>
      </b-modal>
    </div>
  </template>
  
  <script>
  import { ValidationProvider } from 'vee-validate';
  
  export default {
    components: {
      ValidationProvider,
    },
    data() {
      return {
        showModal: false, // Estado del modal
        name: '',
        surname: '',
        email: '',
        address: '',
        birthdate: '',
        telephone: '',
        gender: '',
        profileImage: null,
      };
    },
    methods: {
      onSubmit() {
        this.$validator.validate().then(valid => {
          if (!valid) {
            console.log('Falta completar campos');
            alert('Debes completar todos los campos');
          } else {
            alert('Enviando registro');
            console.log('Todo correcto');
            console.log(this.$data);
            this.showModal = false; // Cierra el modal después de enviar el formulario
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
 .custom-modal .modal-dialog {
  max-width: 800px; /* Ancho personalizado del modal */
}

.custom-modal .modal-content {
  min-height: 800px; /* Altura personalizada del modal */
}

.modal-form {
  margin: 0 auto;
  max-width: 600px; /* Ajusta el ancho del formulario dentro del modal */
}

.b-form-group {
  margin-bottom: 20px; /* Espacio entre grupos de formulario */
}

  </style>
  