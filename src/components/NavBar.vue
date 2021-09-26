<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-custom">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand"><img src="images/logo-manzana-verde.svg" alt="Manzana Verde"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" active-class="active" class="nav-link">Home</router-link>
                    </li>
                    <template v-if="loggedIn">
                        <li class="nav-item">
                            <router-link to="/admin" active-class="active" class="nav-link">Admin</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Usuario
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#" @click="logoutEvent">
                                        Cerrar sesión
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </template>
                    <li class="nav-item dropdown" v-else>
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Iniciar sesión
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link to="/register" active-class="active" class="dropdown-item">Registrar</router-link>
                            </li>
                            <li>
                                <router-link to="/login" active-class="active" class="dropdown-item">Ingresar</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/documentation" active-class="active" class="nav-link">Documentación</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import useUser from '../composables/useUser'

export default {
    components : {
    },
    name: 'NavBar',
    setup: () => {

        const {
            loggedIn, 
            setLogout, 
        } = useUser()

        const logoutEvent = async () => {
            setLogout()
        }

        return {
            logoutEvent,
            loggedIn,
        };
    },
}
</script>

<style scoped>
.nav-custom{
    height: 8vh;
}
.dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: rgb(0 149 30 / 90%);
}
.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
    color: rgb(0 109 22 / 90%);
    font-weight: bold;
}
</style>