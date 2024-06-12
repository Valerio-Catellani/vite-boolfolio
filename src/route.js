import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppProjectsList from './pages/AppProjectsList.vue';
import AppProjectDetails from './pages/AppProjectDetails.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', //path della rotta
            name: 'home', //nome della rotta
            meta: {
                visible: true
            },
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            meta: {
                visible: true
            },
            component: AppProjectsList
        },
        {
            path: '/projects/:slug',
            name: 'project-details',
            meta: {
                visible: false
            },
            component: AppProjectDetails
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            meta: {
                visible: false
            },
            component: NotFound
        }
    ]
});
export { router };