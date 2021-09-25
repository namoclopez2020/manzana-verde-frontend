<template>
    <button 
        @click="clic" 
        :disabled="loading" 
        :type="type" 
        :class="[
            ( btn[classesNames?.btn] || btn[404] ),
            ( classesNames?.btn_custom ),
            'ml-1'
        ]"
    >
        <div v-if="!loading">
            <i :class="icon"></i>
            {{ text }}
        </div>
        <div v-else class="d-flex justify-content-center align-items-center">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-if="text">
                &nbsp;Cargando...
            </span>
        </div>
    </button>
</template>

<script>

import { ref } from "vue";

export default {
    name: 'Button',
    props: {
        text: { 
            type: String,
            default: '',
        },
        type: { 
            type: String,
            default: '',
        },
        icon: { 
            type: String,
            default: 'fas fa-sync-alt',
        },
        classesNames: { 
            type: Object,
            default: {
                btn: 'default',
            },
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    setup: () => {
    
        const btn = ref({
            primary: 'btn btn-primary',
            secondary: 'btn btn-secondary',
            success: 'btn btn-success',
            danger: 'btn btn-danger',
            warning: 'btn btn-warning',
            info: 'btn btn-info',
            default: 'btn btn-default',
            404: 'btn btn-default',
        });

        return {
            btn,
        };
    },
}
</script>

<style scoped>

button {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    /* color: #212529; */
    height: 64px;
    text-align: center;
    width: 100%;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* background-color: transparent; */
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 1rem;
    font-weight: bold;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

button:focus {
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.2);
    /* box-shadow: 0 0 0 0.25rem rgb(13 110 0 / 25%); */
    /* box-shadow: 0 0 0 0.25rem #ff0033; */
}

</style>