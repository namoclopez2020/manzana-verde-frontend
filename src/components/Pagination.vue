<template>
    <div class="d-flex justify-content-end">
        <ul class="pagination">
            <li
                v-for="item of params.links"
                :key="item.label"
                @click="click(item)"
                class="page-item"
                :class="{
                    active: item.active,
                    disabled: !item.url,
                }"
            >
                <a class="page-link" href="#" v-html="item.label"></a>
            </li>
        </ul>
    </div>
</template>

<script>

export const props = {
    params: {
        type: Object,
        required: true,
    },
};

export default {
    emits: ['update'],
    props,
    methods: {
        click(item){
            if(item.url && !item.active) this.$emit('update',{page:item.label})
        },
    },
}
</script>