<template>
    <JumboComponent :img_name="'/public/images/jumbo.jpg'"></JumboComponent>
    <div class="container py-5">
        <h1 class="text-center hype-text-shadow text-white display-1">PROJECTS</h1>
        <SelectComponent></SelectComponent>
        <div class="row">
            <div v-for="(project, index) in store.api_data.AllProjects.data" :key="project.id" class="col-12 col-xl-6">
                <ProjectCardComponent :metaSort="(index + 1) % 2 === 0 ? 'custom-card-even' : 'custom-card-odd'"
                    :propsProject="project">
                </ProjectCardComponent>
            </div>
        </div>
        <PaginationComponent></PaginationComponent>
    </div>

</template>

<script>
import { store } from '../store';
import ProjectCardComponent from '../components/ProjectCardComponent.vue';
import PaginationComponent from '../components/PaginationComponent.vue';
import SelectComponent from '../components/SelectComponent.vue';
import JumboComponent from '@/components/JumboComponent.vue';
export default {
    name: 'AppProjectsList',
    components: {
        ProjectCardComponent,
        JumboComponent,
        PaginationComponent,
        SelectComponent
    },

    data() {
        return {
            projects_pagination: [],
            store,
            projects: [],
            currentPage: 1,
            type: '',
            params: null,
        }
    },
    created() {
        console.log(store);
    },
    methods: {
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>
