<template>
    <modal
        ref="modal"
        :custom="{
            bg: {
                'header': 'primary',
            },
            size: 'full',
        }"
    >
        <template v-slot:title>
            <h5 class="modal-title font-weight-bold">Información</h5>
        </template>
        <template v-slot:body>
            <!--
                name
                description
                url
            -->
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
                <input type="text" class="form-control" name="picture" placeholder="" v-model="form.picture">
            </div>
            {{ form }}
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
            createFetchingData, 
            createErrors,
        } = useFood()

        const form = ref({
            name: 'prueba',
            description: 'prueba descripcion',
            picture: 'https://www.cine-calidad.com/',
        })

        const modal = ref(null)

        const open = () => {
            modal.value.open({});
        }

        const createEvent = async () => {
            try {
                const evento = await setFood(form.value)
                if(evento) modal.value.close();
            } catch (error) {
                
            }
        }

        return {
            modal,
            open,
            form,

            createFetchingData, 
            createErrors,

            createEvent,
        };
    },
}
</script>
