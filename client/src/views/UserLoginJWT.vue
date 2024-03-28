<template>
    <div class="container mt5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h2>
                    Login de Usuario
                </h2>
                <form @submit.prevent="loginUser">
                    <div class="form-group">
                        <label for="username">Usuario:</label>
                        <input type="text" class="form-control" id="username" v-model="user.username" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Contrasena:</label>
                        <input type="password" class="form-control" id="password" v-model="user.password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Ingresar</button>
                </form>
            </div>
        </div>
    </div>


</template>

<script>
import axios from 'axios';

export default {
    name: 'UserLoginJWT',
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        loginUser() {
            axios.post('http://localhost:8080/auth/generateToken', this.user)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>