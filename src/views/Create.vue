<template>
    <modal
        ref="modal"
        :custom="{
            bg: {
                'header': 'primary',
            },
            size: 'full',
        }"
        @close="close"
    >
        <template v-slot:title>
            <h5 class="modal-title font-weight-bold">Crear comida</h5>
        </template>
        <template v-slot:body>
            <div class="alert alert-danger" role="alert" v-if="createErrors" v-html="createErrors"></div>

            <div class="mb-3">
                <InputText
                    name="name"
                    type="text"
                    label="Nombre"
                    placeholder=""
                    v-model.trim.lazy="formValues.name"
                    :value="formValues.name"
                    :errors="formValuesErrors.name"
                    @keyup.enter="createEvent"
                />
            </div>
            <div class="mb-3">
                <InputText
                    name="description"
                    type="text"
                    label="Descripción"
                    placeholder=""
                    v-model.trim.lazy="formValues.description"
                    :value="formValues.description"
                    :errors="formValuesErrors.description"
                    @keyup.enter="createEvent"
                />
            </div>
            <div class="mb-3">
                <InputText
                    name="picture"
                    type="text"
                    label="Imagen"
                    placeholder=""
                    v-model.trim.lazy="formValues.picture"
                    :value="formValues.picture"
                    :errors="formValuesErrors.picture"
                    @keyup.enter="createEvent"
                >
                    <template 
                        v-slot:buttons
                        >
                        <ButtonCustom
                            :classesNames="{
                                btn_custom: 'btn-outline-primary',
                            }" 
                            type="button" 
                            text="Buscar" 
                            icon="" 
                            :loading="pictureFetchingData" 
                            @click="pictureEvent"
                        />
                    </template>
                </InputText>
                <div>
                    <img :src="formValues.picture" alt="" class="img-fluid img-thumbnail" @error="imgPlaceholder">
                </div>
            </div>
        </template>
        <template 
            v-slot:actions
        >
            <ButtonCustom
                :classesNames="{
                    btn: 'primary',
                }" 
                type="button" 
                text="Guardar" 
                icon="" 
                :loading="createFetchingData" 
                @click="createEvent"
            />
        </template>
    </modal>
</template>

<script>

import { ref, reactive } from 'vue'

import * as yup from 'yup';

import Modal from '@/components/Modal.vue'
import ButtonCustom from '@/components/Button.vue'
import InputText from '../components/InputText.vue'

import useFood from '@/composables/useFood'

import { getErrorsFromYup } from '../helpers'

export const props = {};

export default {
    props,
    components:{
        Modal,
        ButtonCustom,
        InputText,
    },
    setup: () => {

        const {
            setFood, 

            getPicture,
            pictureFetchingData,
            pictureErrors,

            createFetchingData, 
            createErrors,
        } = useFood()


        const imgPlaceholder = (e) => {
            e.target.src = "images/not_found.png"
        }

        const schemaCreate = yup.object().shape({
            name: yup.string().min(3).max(100).required(),
            description: yup.string().min(6).max(100).required(),
        });

        const schemaPicture = yup.object().shape({
            name: yup.string().min(3).max(100).required(),
        });

        let formValues = reactive({})

        let formValuesErrors = reactive({});

        const modal = ref(null)

        const open = () => {
            modal.value.open({});
        }

        const close = () => {
            for (const key in formValues) {
                formValues[key] = null
            }
        }

        const createEvent = async () => {

            try {
                const valid = await schemaCreate.validate(formValues, { abortEarly: false })
                for (const key in formValuesErrors) {
                    formValuesErrors[key] = []
                }
                try {
                    const evento = await setFood(formValues)
                    if(evento) modal.value.close();
                } catch (error) {
                    console.log('error',error)
                }
            } catch (err) {
                formValuesErrors = getErrorsFromYup({arr:formValuesErrors, err})
            }
            
        }

        const pictureEvent = async () => {
            try {
                const valid = await schemaPicture.validate(formValues, { abortEarly: false })
                for (const key in formValuesErrors) {
                    formValuesErrors[key] = []
                }
                try {
                    const pictureResponse = await getPicture({name: formValues.name})

                    console.log(formValues['picture'])

                    formValues['picture'] = '';

                    if(pictureResponse?.data?.image){
                        formValues['picture'] = pictureResponse.data.image.src.medium
                    }else{
                        formValues['picture'] = null
                        formValuesErrors['picture'] = ['No se encontró ninguna imagen']
                    }

                    console.log(formValues['picture'])

                } catch (error) {
                    
                }
            } catch (err) {
                formValuesErrors = getErrorsFromYup({arr:formValuesErrors, err})
            }
        }

        return {
            modal,
            open,
            close,
            formValues,
            formValuesErrors,

            imgPlaceholder,

            createFetchingData, 
            createErrors,

            createEvent,

            pictureEvent,
            pictureFetchingData,
            pictureErrors,
        };
    },
}
</script>
