import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', //path della rotta
            name: 'home', //nome della rotta
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ''//() => import('./pages/Projects.vue')
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ''//() => import('./pages/Contacts.vue')
        }
    ]
});
export { router };