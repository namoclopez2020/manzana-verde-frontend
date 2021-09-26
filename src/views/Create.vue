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
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" name="name" placeholder="" v-model="form.name">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Descripcion</label>
                <input type="text" class="form-control" name="description" placeholder="" v-model="form.description">
            </div>
            <div class="mb-3">
                <label for="picture" class="form-label">Imagen</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="picture" placeholder="" v-model="form.picture">
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
                </div>
                <div>
                    <img :src="form.picture" alt="" class="img-fluid img-thumbnail" @error="imgPlaceholder">
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
                text="Unirse" 
                icon="" 
                :loading="createFetchingData" 
                @click="createEvent"
            />
        </template>
    </modal>
</template>

<script>

import { ref } from 'vue'

import Modal from '@/components/Modal.vue'
import ButtonCustom from '@/components/Button.vue'

import useFood from '@/composables/useFood'

export const props = {};

export default {
    props,
    components:{
        Modal,
        ButtonCustom,
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

        const form = ref({})

        const modal = ref(null)

        const open = () => {
            modal.value.open({});
        }

        const close = () => {
            form.value = {}
        }

        const createEvent = async () => {
            try {
                const evento = await setFood(form.value)
                if(evento) modal.value.close();
            } catch (error) {
                
            }
        }

        const pictureEvent = async () => {
            try {
                const pictureResponse = await getPicture({name: form.value.name})

                if(pictureResponse?.data?.image){
                    form.value['picture'] = pictureResponse.data.image.src.medium
                }

            } catch (error) {
                
            }
        }

        return {
            modal,
            open,
            close,
            form,

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
