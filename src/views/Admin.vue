<template>
    <div>
        Admin
    </div>
    <TableCustom
        :columns="[
            {
                label: 'Nº',
                field: 'id',
            },
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
            <button type="button" class="btn btn-outline-primary" @click="info({id:props.dataId})">
                Asignar
            </button>
        </template>
    </TableCustom>
</template>

<script>
import { ref, onMounted, } from 'vue'
import TableCustom from '@/components/Table.vue'

import useFood from '../composables/useFood'

export default {
    name: 'Admin',
    components:{
        TableCustom,
    },
    setup: () => {

        const {
            fetchingData, 
            errors,
            listNotSelected,
            getListNotSelected,
            listSelected,
            getListSelected,
        } = useFood()

        const pageNotSelected = ref(1)
        const perPageNotSelected = ref(10)

        const pageSelected = ref(1)
        const perPageSelected = ref(10)
        
        const getListNotSelectedEvent = (e) => {

            console.log('getListNotSelectedEvent',e)
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

        onMounted(async () => {

            getListNotSelectedEvent()

            getListSelected({
                page: pageSelected.value,
                per_page: perPageSelected.value,
            })

        })

        return {
            getListNotSelectedEvent,
            listNotSelected,
            pageNotSelected,
            perPageNotSelected,

            listSelected,
            getListSelected,
            pageSelected,
            perPageSelected,

            fetchingData,
            errors,
        };
    },
}
</script>
