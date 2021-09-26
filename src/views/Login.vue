<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form action="" method="" class="row g-3">
                        <h4>Bienvenido</h4>
                        <div class="col-12">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" name="email" @keyup.enter="loginEvent" class="form-control" placeholder="jose@gmail.com" v-model="formValues.email">
                        </div>
                        <div class="col-12">
                            <label for="password" class="form-label">Contraseña</label>
                            <input type="password" name="password" @keyup.enter="loginEvent" class="form-control" placeholder="***" v-model="formValues.password">
                        </div>
                        <div class="col-12">
                            <ButtonCustom
                                :classesNames="{
                                    btn_custom: 'btn btn-success float-end',
                                }" 
                                type="button" 
                                text="Ingresar" 
                                icon="fas fa-save" 
                                :loading="fetchingData" 
                                @click="loginEvent"
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
            getLogin,
            fetchingData, 
            errors,
        } = useUser()

        const formValues = reactive({});

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