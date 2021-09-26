<template>
    <div class="row">
        <Create
            ref="modal_create"
        />
        <button @click="modalEvent">Modal</button>
        <div class="col">
            <p class="h1">Listado de comidas</p>
            <template v-if="notSelectedErrors">
                <div class="alert alert-danger" role="alert" v-if="notSelectedErrors" v-html="notSelectedErrors"></div>
            </template>
            <template v-if="notSelectedFetchingData">
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
            </template>
            <TableCustom
                :columns="[
                    {
                        label: 'Nombre',
                        field: 'name',
                    },
                    {
                        label: 'Descripción',
                        field: 'description',
                    },
                    {
                        label: 'Imagen',
                        field: 'picture',
                    },
                    {
                        label: 'Acciones',
                        field: 'actions',
                    },
                ]"
                :list="listNotSelected"
                :per_page="pageNotSelected"
                @update="getListNotSelectedEvent"
            >
                <template v-slot:actions="props">
                    <ButtonCustom
                        :classesNames="{
                            btn_custom: 'btn-outline-primary',
                        }" 
                        type="button" 
                        text="Ingresar" 
                        icon="fas fa-save" 
                        :loading="props.dataFetchingData" 
                        @click="assignEvent({id:props.dataId})"
                    />
                </template>
            </TableCustom>
        </div>

        <div class="col">
            <p class="h1">Listado de comidas asignadas al usuario</p>
            <template v-if="selectedErrors">
                <div class="alert alert-danger" role="alert" v-if="selectedErrors" v-html="selectedErrors"></div>
            </template>
            <template v-if="selectedFetchingData">
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
            </template>
            <TableCustom
                :columns="[
                    {
                        label: 'Nombre',
                        field: 'name',
                    },
                    {
                        label: 'Descripción',
                        field: 'description',
                    },
                    {
                        label: 'Imagen',
                        field: 'picture',
                    },
                    {
                        label: 'Acciones',
                        field: 'actions',
                    },
                ]"
                :list="listSelected"
                :per_page="pageSelected"
                @update="getListSelectedEvent"
                >
                <template v-slot:actions="props">
                    <ButtonCustom
                        :classesNames="{
                            btn_custom: 'btn-outline-danger',
                        }" 
                        type="button" 
                        text="Eliminar" 
                        icon="fas fa-save" 
                        :loading="props.dataFetchingData" 
                        @click="deleteEvent({id:props.dataId})"
                    />
                </template>
            </TableCustom>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, } from 'vue'

import TableCustom from '@/components/Table.vue'
import ButtonCustom from '@/components/Button.vue'
import Create from './Create.vue'

import useFood from '@/composables/useFood'

export default {
    name: 'Admin',
    components:{
        TableCustom,
        ButtonCustom,
        Create,
    },
    setup: () => {

        const {
            selectedFetchingData, 
            notSelectedFetchingData,
            selectedErrors,
            notSelectedErrors,

            listNotSelected,
            getListNotSelected,
            listSelected,
            getListSelected,

            setAssign,
            setDelete,
        } = useFood()

        const modal_create = ref(null)
        const modalEvent = () => {
            console.log('modal_create',modal_create)
            modal_create.value.open();
        }

        const pageNotSelected = ref(1)
        const perPageNotSelected = ref(10)

        const pageSelected = ref(1)
        const perPageSelected = ref(10)

        const assignEvent = ({id}) => {
            setAssign({
                id,
                lists : {
                    notSelected: {
                        page: pageNotSelected.value,
                        per_page: perPageNotSelected.value,
                    },
                    selected: {
                        page: pageSelected.value,
                        per_page: perPageSelected.value,
                    },
                }
            })
        }

        const deleteEvent = ({id}) => {
            setDelete({
                id,
                lists : {
                    notSelected: {
                        page: pageNotSelected.value,
                        per_page: perPageNotSelected.value,
                    },
                    selected: {
                        page: pageSelected.value,
                        per_page: perPageSelected.value,
                    },
                }
            })
        }
        
        const getListNotSelectedEvent = (e) => {
            if(e){
                if(e?.page){
                    pageNotSelected.value = e?.page
                }
                if(e?.per_page){
                    perPageNotSelected.value = e?.per_page
                }
            }
            getListNotSelected({
                page: pageNotSelected.value,
                per_page: perPageNotSelected.value,
            })
        }
        
        const getListSelectedEvent = (e) => {
            if(e){
                if(e?.page){
                    pageSelected.value = e?.page
                }
                if(e?.per_page){
                    perPageSelected.value = e?.per_page
                }
            }
            getListSelected({
                page: pageSelected.value,
                per_page: perPageSelected.value,
            })
        }

        onMounted(async () => {

            getListNotSelectedEvent()
            getListSelectedEvent()

        })

        return {
            getListNotSelectedEvent,
            listNotSelected,
            pageNotSelected,
            perPageNotSelected,

            listSelected,
            getListSelectedEvent,
            pageSelected,
            perPageSelected,

            assignEvent,
            deleteEvent,

            selectedFetchingData, 
            notSelectedFetchingData,
            selectedErrors,
            notSelectedErrors,

            modal_create,
            modalEvent,
        };
    },
}
</script>
