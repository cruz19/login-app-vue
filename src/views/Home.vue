<template>
    <h1>¡Has iniciado sesión!</h1>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui reprehenderit deleniti adipisci nulla voluptatum possimus cum corporis, expedita unde corrupti accusantium et officia maiores debitis maxime ipsum accusamus sed.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui reprehenderit deleniti adipisci nulla voluptatum possimus cum corporis, expedita unde corrupti accusantium et officia maiores debitis maxime ipsum accusamus sed.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui reprehenderit deleniti adipisci nulla voluptatum possimus cum corporis, expedita unde corrupti accusantium et officia maiores debitis maxime ipsum accusamus sed.</p>
    <button type="button" class="btn btn-outline-danger" v-on:click.prevent="logout">Cerrar sesión</button>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            logout() {
                localStorage.setItem('loggedIn', 'false');
                this.$router.push('/login');
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
