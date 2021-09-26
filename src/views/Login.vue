<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form action="" method="" class="row g-3">
                        <h4>Bienvenido</h4>
                        <div class="col-12">
                            <InputText
                                name="email"
                                type="email"
                                label="Email"
                                placeholder=""
                                v-model.trim.lazy="formValues.email"
                                :value="formValues.email"
                                :errors="formValuesErrors.email"
                            />
                        </div>
                        <div class="col-12">
                            <InputText
                                name="password"
                                type="password"
                                label="Contraseña"
                                placeholder=""
                                v-model.trim.lazy="formValues.password"
                                :value="formValues.password"
                                :errors="formValuesErrors.password"
                            />
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

import * as yup from 'yup';

import ButtonCustom from '../components/Button.vue'
import InputText from '../components/InputText.vue'

import useUser from '../composables/useUser'

import { getErrorsFromYup } from '../helpers'

export default {
    components : {  
        ButtonCustom,
        InputText,
    },
    name: 'Register',
    setup: () => {

        const {
            getLogin,
            fetchingData, 
            errors,
        } = useUser()

        const formValues = reactive({});
        let formValuesErrors = reactive({});

        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        });

        const loginEvent = async () => {
            try {
                const valid = await schema.validate(formValues, { abortEarly: false })
                for (const key in formValuesErrors) {
                    formValuesErrors[key] = []
                }
                getLogin(formValues)
            } catch (err) {
                formValuesErrors = getErrorsFromYup({arr:formValuesErrors, err})
            }
        }

        return {
            loginEvent,
            formValues,
            formValuesErrors,
            fetchingData,
            errors,
        };
    },
}
</script>