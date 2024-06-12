<template>
    <div class="p-5">
        <select name="type" id="type" class="form-select" v-model="store.paramsObject.type" @change="selectSend">
            <option value="" active>All</option>
            <option :value="elementType.id" v-for="elementType in store.api_data.allTypes.data" :key="elementType.id">{{
                elementType.name
            }}
            </option>
        </select>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'SelectComponent',
    data() {
        return {
            store,
        }
    },
    methods: {
        selectSend() {
            store.paramsObject.page = 1;
            store.methods.getProjects(store.paramsObject);
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.form-select {
    background-color: $background-4th-color;
    border: none !important;

    &:focus {
        box-shadow: 0 0 0 0.25rem $active-primary-color !important;
    }
}
</style>