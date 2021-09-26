<template>

    <div class="row">
        <div class="col">
            <select v-model="per_page_selected" @change="update({per_page:parseInt($event.target.value)})">
                <option v-for="item in per_pages" :value="item" :key="item">
                    {{ item }}
                </option>
            </select>
        </div>
    </div>

    <table class="table table-hover table-responsive">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.field">
                    {{ column.label }}
                </th>
            </tr>
        </thead>
        <tbody v-if="list?.data">
            <tr v-for="row of list.data" :key="row.id">
                <td v-for="column in columns" :key="column.field">
                    <div v-if="column.field === 'actions'">
                        <slot name="actions" :data-id="row.id" :data-fetching-data="row?.fetchingData"></slot>
                    </div>
                    <div v-else-if="column.field === 'picture'">
                        <img :src="row[column.field]" alt="" class="img-fluid img-thumbnail" @error="imgPlaceholder">
                    </div>
                    <div v-else>
                        {{ row[column.field] }}
                    </div>
                </td>
                <!-- {{ row }} -->
            </tr>
        </tbody>
    </table>
        
    <Pagination
        :params="pagination"
        @update="update"
    />
</template>

<script>

import Pagination from './Pagination.vue'

export const props = {
    columns: {
        type: Array,
        required: true,
    },
    list: {
        type: Object,
        default: {},
    },
    per_page: {
        type: [ Number, String ],
        default: 10,
    },
};

export default {
    emits: ['update'],
    props,
    components:{
        Pagination,
    },
    data() {
        return {
            pagination: {},
            per_pages: [5,10,25,50,100,250,500,1000],
            per_page_selected: 5,
        }
    },
    methods: {
        info({text}){
            this.$swal({
                html: text,
            });
        },
        update(values){
            this.$emit('update',values)
        },
        imgPlaceholder(e){
            e.target.src = "images/not_found.png"
        },
    },  
    watch: {
        ['list']({
                current_page,
                first_page_url,
                from,
                last_page,
                last_page_url,
                links,
                next_page_url,
                path,
                per_page,
                prev_page_url,
                to,
                total,
            }){
            this.pagination = {
                current_page,
                first_page_url,
                from,
                last_page,
                last_page_url,
                links,
                next_page_url,
                path,
                per_page,
                prev_page_url,
                to,
                total,
            }
        },
    },
    created() {
        this.per_page_selected = this.per_page
    },
}
</script>