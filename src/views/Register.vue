<template>
    <div class="w-50">

        <div class="alert alert-danger" role="alert" v-if="errors" v-html="errors"></div>

        <div class="mb-3">
            <label for="name" class="form-label">Nombres y Apellidos</label>
            <input type="text" class="form-control" id="name" placeholder="Jose Namoc" v-model="formValues.name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="jose@gmail.com" v-model="formValues.email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" placeholder="***" v-model="formValues.password">
        </div>
        <div class="mb-3">
            <label for="c_password" class="form-label">Confirmar contraseña</label>
            <input type="password" class="form-control" id="c_password" placeholder="***" v-model="formValues.c_password">
        </div>
        <ButtonCustom
            :classesNames="{
                btn: 'primary',
            }" 
            type="button" 
            text="Registrarse" 
            icon="fas fa-save" 
            :loading="fetchingData" 
            @click="registerEvent"
        />

    </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";

import ButtonCustom from '../components/Button.vue'

import useUser from '../composables/useUser'

export default {
    components : {
        ButtonCustom,
    },
    name: 'Register',
    setup: () => {

        const {
            setFetchingData,
            setRegister,
            fetchingData, 
            errors,
        } = useUser()

        const currentStep = ref(0);

        const formValues = reactive({
            name: 'prueba de nombres',
            email: 'prueba@gmail.com',
            password: '123456',
            c_password: '123456',
        });

        const formValuesErrors = ref({});

        onMounted(async () => {
        })

        const registerEvent = async () => {
            console.log('registerEvent',formValues)
            setRegister(formValues)
        }

        return {
            registerEvent,
            formValues,
            fetchingData,
            errors,
        };
    },
}
</script>