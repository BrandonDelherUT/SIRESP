<template>
    <div>
        <b-row>
            <b-button class="col-5 md-3 -p-3" @click="consumoAdmin()">Admin</b-button>
            <b-button class="col-5 md-3 -p-3" @click="consumoUser()">User</b-button>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserAuth',
    methods: {
        consumoAdmin() {
            const token = localStorage.getItem('token');
            // VALIDAMOS SI EXISTE UN TOKEN Y HACEMOS LA PETICION
            if (token) {
                axios.get('http://localhost:8080/auth/admin/adminProfile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        consumoUser() {
            const token = localStorage.getItem('token');
            // VALIDAMOS SI EXIST
            if (token) {
                axios.get('http://localhost:8080/auth/user/userProfile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
}
</script>