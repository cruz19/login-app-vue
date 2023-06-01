<template>
    <div class="container-fluid mt-2">
        <div class="row justify-content-center">
          <div class="col-4">
            <form v-on:submit.prevent="login">
              <div class="card">
                <div class="card-header">
                  <b class="text-center text-muted">LOGIN APP</b>
                </div>
                <div class="card-body text-left">
                    <div class="mb-4">
                      <label for="username" class="font-weight-bold text-muted">Usuario</label>
                      <input type="username" id="username" class="form-control" v-model="username" required />
                    </div>
                    <div class="mb-4">
                      <label for="password" class="font-weight-bold text-muted">Contraseña</label>
                      <input type="password" id="password" class="form-control" v-model="password" required />
                    </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-info btn-block">INICIAR SESIÓN</button>
                </div>
              </div>
            </form>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  
  import qs from 'querystring';
  import swal from 'sweetalert';
  import apiService from '../services/apiService';

  export default {
    name: 'LoginAuth',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        const formData = {
          user: this.username,
          pacc: this.password,
          key: process.env.VUE_APP_AUTH_TOKEN
        };
        apiService.post('/auth/login', qs.stringify(formData))
            .then(({ data }) => {
              const { sys } = data;
              if (sys.login) {
                localStorage.setItem('loggedIn', 'true');
                this.$router.push('/');
              } else {
                swal('Oops!', 'Usuario y/o contraseña incorrecto', 'error');
              }
            })
            .catch(err => {
              console.log(err);
              alert('Ha ocurrido un error');
            });
      },
    }
  };
  </script>

<style>
  .card {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
</style>
