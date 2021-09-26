<template>
    <modal
        ref="modal"
        :custom="{
            bg: {
                'header': 'primary',
            },
            size: 'full',
        }"
        @close="reset"
    >
        <template v-slot:title>
            <h5 class="modal-title font-weight-bold">Información</h5>
        </template>
        <template v-slot:body>
            
        </template>
        <template 
            v-slot:actions
            v-if="
                (validate)
                &&
                (!exist)
            "
        >
            <button-custom
                @clic="newClient"
                :classesNames="{
                    btn: 'primary',
                }" 
                text="Unirse" 
                icon="" 
                :loading="fetchingData" 
                :disabled="fetchingData" 
            />
        </template>
    </modal>
</template>

<script>

import Modal from '@/components/Modal.vue'
import ButtonCustom from '@/components/Button.vue'

export const props = {};

export default {
    props,
    data() {
        return {
            fetchingData: false,
            exist: false,
            validate: false,
        }
    },
    components:{
        Modal,
        ButtonCustom,
    },
    methods: {
        open() {
            this.$refs.modal.open({
                backdrop: 'static',
                keyboard: false, 
            });
        },
    },
}
</script>
