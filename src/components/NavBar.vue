<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Manzana Verde</router-link>
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
                                User
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#" @click="logoutEvent">
                                        Logout
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
                                <router-link to="/register" active-class="active" class="dropdown-item">Register</router-link>
                            </li>
                            <li>
                                <router-link to="/login" active-class="active" class="dropdown-item">Login</router-link>
                            </li>
                        </ul>
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