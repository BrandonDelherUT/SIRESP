<template>
    <div>
        <Navbar />
        <CategoriesNavbar />
        <div class="container-fluid">
            <div class="row mt-5 justify-content-center">
                <div class="col-md-12">
                    <div class="justify-content-center">
                        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators
                            background="#ababab"
                            style="text-shadow: 1px 1px 2px #333; height: auto; max-width: 100%; overflow: hidden;"
                            @sliding-start="onSlideStart" @sliding-end="onSlideEnd" class="mt-3">
                            <b-carousel-slide class="carusel_slide">
                                <template #img>
                                    <img src="https://a0.muscache.com/im/pictures/17a1a95c-aca0-4823-af8d-e9ec4d43a11c.jpg?im_w=720"
                                        alt="First slide" class="d-block img-fluid w-100"
                                        style="height: 100%; object-fit: cover;" />
                                </template>
                            </b-carousel-slide>
                            <!-- Otros slides del carrusel -->
                            <b-carousel-slide class="carusel_slide">
                                <template #img>
                                    <img src="https://a0.muscache.com/im/pictures/17a1a95c-aca0-4823-af8d-e9ec4d43a11c.jpg?im_w=720"
                                        alt="First slide" class="d-block img-fluid w-100"
                                        style="height: 100%; object-fit: cover;" />
                                </template>
                            </b-carousel-slide>
                        </b-carousel>
                    </div>
                    <b-row class="mt-5">
                        <b-col cols="12" lg="6">
                            <h3 class="text-center">Cabaña en Santo Domingo Ocotitlán, México</h3>
                            <hr>
                            <p class="text-justify">
                                Nuestra cabaña rodeada de naturaleza, es ideal para desconectarse y descansar. Disfruta
                                una copa de vino
                                viendo el
                                atardecer y la linda vista desde el deck. Te invita a salirte de lo cotidiano por lo que
                                no hay
                                televisión. La
                                cabaña es privada con baño y cocina equipada, WiFi, estación de trabajo y
                                estacionamiento. Las áreas
                                comunes
                                (jacuzzi y jardín) se comparten con una cabaña de 2 ...
                            </p>
                        </b-col>
                        <b-col cols="12" lg="6">
                            <b-card class="card_shadow" border-variant="secondary" header-border-variant="secondary"
                                align="center">
                                <b-card-text></b-card-text>
                                <h2>Seleccionar Fechas</h2>
                                <b-row>
                                    <b-col class="col-6">
                                        <label for="fechaLlegada">Fecha de Llegada:</label>
                                        <b-form-input id="fechaLlegada" name="fechaLlegada" v-model="fechaLlegada"
                                            type="date"></b-form-input>
                                    </b-col>
                                    <b-col class="col-6">
                                        <label for="fechaSalida">Fecha de Salida:</label>
                                        <b-form-input id="fechaSalida" name="fechaSalida" v-model="fechaSalida"
                                            type="date"></b-form-input>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col cols="12" class="mt-3">
                                        <label slot="label" for="huespedes">Número de Huéspedes:</label>
                                    </b-col>
                                    <b-col cols="12" class="mt2">
                                        <b-row>
                                            <b-col><b-button @click="restarHuespedes"
                                                    variant="outline-secondary">-</b-button></b-col>
                                            <b-col>
                                                <b-form-input id="huespedes" v-model="numHuespedes" type="number"
                                                    min="1" max="999" class="text-center"
                                                    style="max-width: 100%;"></b-form-input>
                                            </b-col>
                                            <b-col><b-button @click="sumarHuespedes"
                                                    variant="outline-secondary">+</b-button></b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                                <b-col class="mt-3">
                                    <p v-if="error" style="color: red;">{{ error }}</p>
                                    <b-button block variant="primary" @click="validarCampos">Reservar</b-button>
                                </b-col>
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row class="mt-5 text-center">
                        <b-col cols="12">
                            <hr>
                            <h3 class="text-center mb-5">Servicios</h3>
                        </b-col>
                        <b-col cols="6" sm="6" md="4">
                            <p>Vista al jardín</p>
                            <p>Vista a la montaña</p>
                            <p>Cocina</p>
                            <p>Wifi</p>
                            <p>Área para trabajar</p>
                        </b-col>
                        <b-col cols="6" sm="6" md="4">
                            <p>Vista al jardín</p>
                            <p>Vista a la montaña</p>
                            <p>Cocina</p>
                            <p>Wifi</p>
                            <p>Área para trabajar</p>
                        </b-col>
                        <b-col cols="6" sm="6" md="4">
                            <p>Vista al jardín</p>
                            <p>Vista a la montaña</p>
                            <p>Cocina</p>
                            <p>Wifi</p>
                            <p>Área para trabajar</p>
                        </b-col>
                    </b-row>
                    <b-row class="mt-5">
                        <b-col cols="12">
                            <hr>
                            <h3 class="text-center">Calificación del sitio</h3>
                        </b-col>
                        <b-col cols="12" align="center">
                            <div>
                                <b-icon icon="star-fill" font-scale="4"></b-icon>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mt-5">
                        <b-col cols="12" align="center">
                            <div>
                                <span style="font-size: 20px; color: gray;">4.5 (254 opiniones)</span>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <hr>
                            <div class="mt-5">
                                <h2 class="mb-5">Reseñas de Huéspedes</h2>
                                <div v-for="(reseña, index) in reseñas.slice(0, 6)" :key="index" class="mb-4">
                                    <div class="d-flex align-items-center">
                                        <img :src="reseña.imagen" alt="Imagen de perfil" class="mr-3"
                                            style="width: 50px; height: 50px; border-radius: 50%;">
                                        <div>
                                            <h5>{{ reseña.nombre }}</h5>
                                            <div class="d-flex align-items-center">
                                                <div class="mr-2">Calificación:</div>
                                                <div>
                                                    <b-icon icon="star-fill" font-scale="1"
                                                        v-for="i in reseña.calificacion" :key="i"
                                                        class="text-warning"></b-icon>
                                                </div>
                                            </div>
                                            <div class="text-muted">{{ reseña.fecha }}</div>
                                        </div>
                                    </div>
                                    <p class="mt-2">{{ reseña.opinion }}</p>
                                </div>
                                <b-button v-b-modal.modal-scrollable @click="mostrarModal">Mostrar más
                                    reseñas</b-button>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mt-5">
                        <b-col cols="12">
                            <hr>
                            <vc-calendar is-expanded :columns="$screens({ default: 1, lg: 2 })"  :attributes="attrs" />
                        </b-col>
                        <b-col cols="12">
                            <vc-calendar
                            :attributes='attributes'
                            />
                        </b-col>
                    </b-row>
                    <b-row class="mt-5">
                        <b-col cols="12">
                            <hr>
                            <h3 class="text-center">Ubicación</h3>
                        </b-col>
                        <b-col cols="12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d30183.222335364135!2d-99.0606!3d18.9799!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1706200864307!5m2!1ses!2smx"
                                width="100%" height="400" style="border: 0" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <br />
                            <h4>Santo Domingo Ocotitlán, Morelos, México</h4>
                            <p>Tepoztlán es un lugar sagrado, cargado de energía. Con gran cantidad de experiencias
                                tanto de
                                naturaleza,
                                arqueológicas, gastronómicas, de aventura. Pero también es el lugar perfecto para
                                descansar y entregarte
                                a la
                                naturaleza.</p>
                        </b-col>
                    </b-row>
                    <b-row class="mt-5">
                        <b-col cols="12">
                            <b-card class="text-center anfitrion">
                                <h3>Conoce tu anfitrión</h3>
                                <b-avatar class="mt-3" src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                                <div class="mt-3">
                                    <h5>Nombre Anfitrión</h5>
                                </div>
                                <b-row class="mt-3 mb-3">
                                    <b-col cols="12">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At natus eligendi
                                        nemo, aspernatur sunt
                                        nam
                                        repudiandae quaerat aliquid quis doloribus placeat maiores officia suscipit
                                        eaque culpa iusto
                                        dolorem magnam
                                        fuga.
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col class="text-center" cols="3">
                                        <h2>254</h2>
                                        <p>Evaluaciones</p>
                                    </b-col>
                                    <b-col class="text-center" cols="6">
                                        <h2>4.5</h2>
                                        <p>Calificación</p>
                                    </b-col>
                                    <b-col cols="3">
                                        <h2>6</h2>
                                        <p>Años de Experiencia</p>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>


        <b-modal id="modal-scrollable" scrollable size="lg" ref="modal" title="Todas las reseñas">
            <div v-for="(reseña, index) in reseñas.slice(1)" :key="index" class="mb-4">
                <div class="d-flex align-items-center">
                    <img :src="reseña.imagen" alt="Imagen de perfil" class="mr-3"
                        style="width: 50px; height: 50px; border-radius: 50%;">
                    <div>
                        <h5>{{ reseña.nombre }}</h5>
                        <div class="d-flex align-items-center">
                            <div class="mr-2">Calificación:</div>
                            <div>
                                <b-icon icon="star-fill" font-scale="1" v-for="i in reseña.calificacion" :key="i"
                                    class="text-warning"></b-icon>
                            </div>
                        </div>
                        <div class="text-muted">{{ reseña.fecha }}</div>
                    </div>
                </div>
                <p class="mt-2">{{ reseña.opinion }}</p>
            </div>
        </b-modal>
    </div>
</template>



<script>
import Navbar from "../components/Navbar.vue";
import CategoriesNavbar from "../components/CategoriesNavbar.vue";

export default {
    name: 'AboutView',
    components: {
        Navbar,
        CategoriesNavbar
    },
    data() {
        return {
            slide: 0,
            sliding: null,
            fechaLlegada: '',
            fechaSalida: '',
            numHuespedes: 1,
            error: '',
            
        categories: [
          // Datos de ejemplo
          { id: 1, name: 'Casas' },
          { id: 2, name: 'Apartamentos' },
          { id: 3, name: 'Playa' },
          { id: 4, name: 'Villas' },
        ],
            attrs: [
                {
                    highlight: {
                        start: { fillMode: 'outline' },
                        base: { fillMode: 'light' },
                        end: { fillMode: 'outline' },
                    },
                    dates: { start: new Date(2024, 0, 14), end: new Date(2024, 0, 18) },
                },
                {
                    highlight: {
                        start: { fillMode: 'outline' },
                        base: { fillMode: 'light' },
                        end: { fillMode: 'outline' },
                    },
                    dates: { start: new Date(2024, 3, 14), end: new Date(2024, 3, 18) },
                },
            ],
            reseñas: [
                // Tu JSON de ejemplo
                {
                    "nombre": "Juan Pérez",
                    "imagen": "https://via.placeholder.com/150",
                    "calificacion": 4,
                    "opinion": "Excelente lugar, muy limpio y acogedor. Definitivamente volveré.",
                    "fecha": "2023-01-15"
                },
                {
                    "nombre": "María Gómez",
                    "imagen": "https://via.placeholder.com/150",
                    "calificacion": 5,
                    "opinion": "¡Increíble experiencia! El anfitrión fue muy amable y el lugar superó mis expectativas.",
                    "fecha": "2023-02-28"
                },
                {
                    "nombre": "Carlos Rodríguez",
                    "imagen": "https://via.placeholder.com/150",
                    "calificacion": 3,
                    "opinion": "Buena ubicación, pero la limpieza dejaba mucho que desear.",
                    "fecha": "2023-03-10"
                },
                {
                    "nombre": "Juan Pérez",
                    "imagen": "https://via.placeholder.com/150",
                    "calificacion": 4,
                    "opinion": "Excelente lugar, muy limpio y acogedor. Definitivamente volveré.",
                    "fecha": "2023-01-15"
                },
                {
                    "nombre": "María Gómez",
                    "imagen": "https://via.placeholder.com/150",
                    "calificacion": 5,
                    "opinion": "¡Increíble experiencia! El anfitrión fue muy amable y el lugar superó mis expectativas.",
                    "fecha": "2023-02-28"
                },
                {
                    "nombre": "Carlos Rodríguez",
                    "imagen": "https://via.placeholder.com/150",
                    "calificacion": 3,
                    "opinion": "Buena ubicación, pero la limpieza dejaba mucho que desear.",
                    "fecha": "2023-03-10"
                },
                {
                    "nombre": "Juan Pérez",
                    "imagen": "https://via.placeholder.com/150",
                    "calificacion": 4,
                    "opinion": "Excelente lugar, muy limpio y acogedor. Definitivamente volveré.",
                    "fecha": "2023-01-15"
                },
                {
                    "nombre": "María Gómez",
                    "imagen": "https://via.placeholder.com/150",
                    "calificacion": 5,
                    "opinion": "¡Increíble experiencia! El anfitrión fue muy amable y el lugar superó mis expectativas.",
                    "fecha": "2023-02-28"
                },
                {
                    "nombre": "Carlos Rodríguez",
                    "imagen": "https://via.placeholder.com/150",
                    "calificacion": 3,
                    "opinion": "Buena ubicación, pero la limpieza dejaba mucho que desear.",
                    "fecha": "2023-03-10"
                }
            ],
        }
    },
    methods: {
        mostrarModal() {
            this.$refs.modal.show()
        },
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        sumarHuespedes() {
            this.numHuespedes++;
        },
        restarHuespedes() {
            if (this.numHuespedes > 1) {
                this.numHuespedes--;
            }
        },
        validarCampos() {
            const fechaActual = new Date();
            const fechaLlegada = new Date(this.fechaLlegada);
            const fechaSalida = new Date(this.fechaSalida);

            if (!this.fechaLlegada || !this.fechaSalida || !this.numHuespedes) {
                this.error = 'Todos los campos son obligatorios';
                return;
            }

            if (fechaLlegada <= fechaActual) {
                this.error = "La fecha de llegada debe ser mayor a la fecha actual.";
                return;
            }

            if (fechaSalida <= fechaLlegada) {
                this.error = "La fecha de salida debe ser mayor a la fecha de llegada.";
                return;
            }


            if (this.numHuespedes <= 0) {
                this.error = "El número de huéspedes debe ser mayor a 0.";
                return false;
            }

            this.error = '';

            console.log("Fechas válidas. Fecha de llegada:", fechaLlegada, "Fecha de salida:", fechaSalida);

        }

    }
}
</script>

<style>
.top {
    margin-top: 10%;
    margin-left: 20px;
    margin-right: 20px;
}

.line {
    align-items: center;
    text-align: center;
    margin-top: 3%;
    margin-left: 20px;
    margin-right: 20px;
}

.carusel {
    height: 550px;
}

.carusel_slide img {
    height: 100%;
    width: auto;
}

.anfitrion {
    background-color: #f0efea;
    box-shadow: 3px 3px 2px 2px rgba(32, 32, 32, 0.3);
    margin-bottom: 5%;
}

.card_shadow {
    box-shadow: 3px 3px 3px 2px rgba(32, 32, 32, 0.3);
}
</style>