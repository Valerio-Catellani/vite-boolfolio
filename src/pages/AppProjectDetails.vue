<template>
    <JumboComponent :img_name="full_image" @click="console.log(project)"></JumboComponent>

    <div class="container py-5 text-white">
        <h1 class="text-center hype-text-shadow display-1">{{ project.title }}</h1>
        <h2 class="text-center fs-1">({{ project.type['name'] }})</h2>
        <h3 class="text-center">{{ project.created }}</h3>
        <br>
        <h4>Description</h4>
        <p>{{ project.description }} </p>

        <h4>Technologies</h4>
        <span v-for="technology in project.technologies" :key="technology.id"
            class="badge text-black fs-5 hype-shadow-white m-3" :style="{ 'background-color': technology.color }">
            {{ technology.name }}
        </span>

    </div>
</template>

<script>
import { store } from '../store';

import JumboComponent from '@/components/JumboComponent.vue';

export default {
    name: 'AppProjectDetails',

    data() {
        return {
            store,
            full_image: store.imgBasePath + store.api_data.singleProject.image_url,
            project: store.api_data.singleProject
        }
    },

    components: {
        JumboComponent
    },

    methods: {
        updateImageSrc() {
            this.full_image = this.store.imgBasePath + this.store.api_data.singleProject.image_url;
        },
    },

    watch: {
        'store.api_data.singleProject.image_url': function (newVal, oldVal) {
            if (newVal) {
                this.updateImageSrc();
            }
        },
        'store.api_data.singleProject': function (newVal, oldVal) {
            if (newVal) {
                this.project = newVal;
            }
        }
    },

    created() {
        const slug = this.$route.params.slug;
        store.methods.getSingleProject(slug);
        console.log(store.api_data.singleProject.image_url);
        console.log(store.imgBasePath + store.api_data.singleProject.image_url);
    },

}
</script>

<style lang="scss" scoped></style>