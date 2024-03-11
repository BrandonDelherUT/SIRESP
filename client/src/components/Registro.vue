<template>
  <body>
    <div id="formulario">
      <b-container class="bv-example-row">
        <b-row class="text-center">
          <b-col></b-col>
          <b-col cols="8">
            <div style="margin-top: 5%;">
              <b-card title="Registro de Usuario" class="shadow p-3 mb-5 bg-white rounded">
                <b-card-body>
                  <b-form @submit.prevent="onSubmit">
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
    
                    <b-button style="margin-top: 5%;" type="submit" variant="primary">Enviar</b-button>
                  </b-form>
                </b-card-body>
              </b-card>
            </div>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </div>
  </body>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      address: '',
      birthdate: '',
      telephone: '',
      gender: '',
      profileImage: null,
    }
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
        }
      });
    }
  }
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
  background-color:aliceblue ;
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
