<template>
    <table id="projects-table" class="table table-dark table-hover shadow mb-2 mt-3 hype-unselectable">
        <thead>
            <tr>
                <th scope="col">#id Project</th>
                <th scope="col">Project Title</th>
                <th scope="col" class="d-none d-xl-table-cell">Created at</th>
                <th scope="col" class="d-none d-lg-table-cell">Type</th>
                <th scope="col" class="d-none d-lg-table-cell">Techonlogies</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="element in projects" :key="element.id">

                <td>{{ element.id }}</td>
                <td>{{ element.title }}</td>
                <td class="d-none d-xl-table-cell">{{ element.created }}</td>
                <td class="d-none d-lg-table-cell" v-if="element.type_id">
                    {{ element.type.name }}
                </td>
                <td class="d-none d-lg-table-cell" v-else>
                    Nessun tipo
                </td>
                <td class="d-none d-lg-table-cell">
                    <div v-if="element.technologies" class="d-flex align-items-center gap-3">
                        <a v-for="technology in element.technologies" :key="technology.id"
                            class="tec-link hype-pointer position-relative" href="#"><i
                                class="fs-3 hype-text-shadow position-relative" :class="technology.icon"
                                :style="{ color: technology.color }">
                            </i>
                            <div class="tec-info">
                                {{ technology.name }}
                            </div>
                        </a>
                    </div>
                    <h6 v-else>No Technology</h6>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>
import { store } from '../store';
export default {
    name: 'AppProjectsList1',

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
                console.log(this.projects.forEach(element => {
                    console.log(element);
                }));
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#projects-table {
    --bs-table-bg: linear-gradient(45deg,
            rgba(0, 0, 0, 0.88) 54%,
            rgba(140, 0, 0, 1) 99%);
    background: var(--bs-table-bg);

    .table-icon {
        padding: 0 !important;
        width: auto !important;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
    }

    td {
        vertical-align: middle;
        padding: 5px 15px !important;
    }
}

.pagination {
    --bs-pagination-color: $active-secondary-color !important;
    --bs-pagination-hover-color: $active-secondary-color !important;
    --bs-pagination-focus-color: $active-secondary-color !important;
    --bs-pagination-active-bg: $active-secondary-color !important;
    --bs-pagination-active-border-color: $active-secondary-color !important;

    .page-item.active {
        color: black !important;

        .page-link {
            background-color: $active-primary-color !important;

            &:focus {
                box-shadow: 0 0 0 0.25rem $active-tertiary-color !important;
            }
        }
    }

    .page-link {
        background-color: $background-4th-color !important;
        border: var(--bs-pagination-border-width) solid $background-tertiary-color;

        &:focus {
            box-shadow: 0 0 0 0.25rem $active-primary-color !important;
        }
    }
}
</style>
