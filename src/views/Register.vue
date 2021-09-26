<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form action="" method="" class="row g-3">
                        <h4>Bienvenido</h4>
                        <div class="mb-12">
                            <InputText
                                name="name"
                                type="name"
                                label="Nombres y Apellidos"
                                placeholder=""
                                v-model.trim.lazy="formValues.name"
                                :value="formValues.name"
                                :errors="formValuesErrors.name"
                                @keyup.enter="registerEvent"
                            />
                        </div>
                        <div class="mb-12">
                            <InputText
                                name="email"
                                type="email"
                                label="Email"
                                placeholder=""
                                v-model.trim.lazy="formValues.email"
                                :value="formValues.email"
                                :errors="formValuesErrors.email"
                                @keyup.enter="registerEvent"
                            />
                        </div>
                        <div class="mb-12">
                            <InputText
                                name="password"
                                type="password"
                                label="Contraseña"
                                placeholder=""
                                v-model.trim.lazy="formValues.password"
                                :value="formValues.password"
                                :errors="formValuesErrors.password"
                                @keyup.enter="registerEvent"
                            />
                        </div>
                        <div class="mb-12">
                            <InputText
                                name="c_password"
                                type="password"
                                label="Confirmar contraseña"
                                placeholder=""
                                v-model.trim.lazy="formValues.c_password"
                                :value="formValues.c_password"
                                :errors="formValuesErrors.c_password"
                                @keyup.enter="registerEvent"
                            />
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
            setRegister,
            fetchingData, 
            errors,
        } = useUser()

        const schema = yup.object().shape({
            name: yup.string().min(6).required(),
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
            c_password: yup.string().min(6).required()
                .oneOf([yup.ref('password'), null], 'Passwords must match')
        });

        const formValues = reactive({});
        let formValuesErrors = reactive({});

        const registerEvent = async () => {
            try {
                const valid = await schema.validate(formValues, { abortEarly: false })
                for (const key in formValuesErrors) {
                    formValuesErrors[key] = []
                }
                setRegister(formValues)
            } catch (err) {
                formValuesErrors = getErrorsFromYup({arr:formValuesErrors, err})
            }
        }

        return {
            registerEvent,
            formValues,
            formValuesErrors,
            fetchingData,
            errors,
        };
    },
}
</script>