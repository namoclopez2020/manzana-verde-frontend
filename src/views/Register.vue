<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form action="" method="" class="row g-3">
                        <h4>Bienvenido</h4>
                        <div class="mb-12">
                            <label for="name" class="form-label">Nombres y Apellidos</label>
                            <input type="text" class="form-control" @keyup.enter="registerEvent" id="name" placeholder="Jose Namoc" v-model="formValues.name">
                        </div>
                        <div class="mb-12">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" @keyup.enter="registerEvent" id="email" placeholder="jose@gmail.com" v-model="formValues.email">
                        </div>
                        <div class="mb-12">
                            <label for="password" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" @keyup.enter="registerEvent" id="password" placeholder="***" v-model="formValues.password">
                        </div>
                        <div class="mb-12">
                            <label for="c_password" class="form-label">Confirmar contraseña</label>
                            <input type="password" class="form-control" @keyup.enter="registerEvent" id="c_password" placeholder="***" v-model="formValues.c_password">
                        </div>
                        <div class="col-12">
                            <ButtonCustom
                                :classesNames="{
                                    btn_custom: 'btn btn-success float-end',
                                }" 
                                type="button" 
                                text="Registrarse" 
                                icon="fas fa-save" 
                                :loading="fetchingData" 
                                @click="registerEvent"
                            />
                        </div>
                    </form>
                    <template v-if="errors">
                        <hr class="mt-4">
                        <div class="col-12">
                            <div class="alert alert-danger" role="alert" v-if="errors" v-html="errors"></div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
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
            setRegister,
            fetchingData, 
            errors,
        } = useUser()

        const formValues = reactive({});

        const registerEvent = async () => {
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