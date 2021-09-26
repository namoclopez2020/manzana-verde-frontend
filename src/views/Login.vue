<template>
    <div class="w-50">

        <div class="alert alert-danger" role="alert" v-if="errors" v-html="errors"></div>

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="jose@gmail.com" v-model="formValues.email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" placeholder="***" v-model="formValues.password">
        </div>
        <ButtonCustom
            :classesNames="{
                btn: 'primary',
            }" 
            type="button" 
            text="Asignar" 
            icon="fas fa-save" 
            :loading="fetchingData" 
            @click="loginEvent"
        />

    </div>
</template>

<script>
import { reactive, } from "vue";

import ButtonCustom from '../components/Button.vue'

import useUser from '../composables/useUser'

export default {
    components : {
        ButtonCustom,
    },
    name: 'Register',
    setup: () => {

        const {
            getLogin,
            fetchingData, 
            errors,
        } = useUser()

        const formValues = reactive({
            email: 'prueba@gmail.com',
            password: '123456',
        });

        const loginEvent = async () => {
            getLogin(formValues)
        }

        return {
            loginEvent,
            formValues,
            fetchingData,
            errors,
        };
    },
}
</script>