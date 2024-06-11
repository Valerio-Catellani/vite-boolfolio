<template>

    <div class="container">
        <div class="row">
            <div v-for="(project, index) in projects" :key="project.id" class="col-12 col-xl-6">
                <ProjectCardComponent :metaSort="(index + 1) % 2 === 0 ? 'custom-card-even' : 'custom-card-odd'"
                    :propsProject="project">
                </ProjectCardComponent>
            </div>
        </div>
    </div>

</template>

<script>
import { store } from '../store';
import ProjectCardComponent from '../components/ProjectCardComponent.vue';
export default {
    name: 'AppProjectsList',
    components: {
        ProjectCardComponent
    },

    data() {
        return {
            projects: []
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        async getProjects() {
            try {
                this.projects = await store.getAllProjects();
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>
