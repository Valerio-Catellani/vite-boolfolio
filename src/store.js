import { reactive } from 'vue';
import axios from 'axios';
import { router } from './route.js';


export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imgBasePath: 'http://127.0.0.1:8000/storage/',
    api_data: {
        AllProjects: []
    },
    async getAllProjects() {
        try {
            const response = await axios.get(`${this.apiBaseUrl}/projects`);
            this.api_data.AllProjects = response.data.results;
            console.log(this.api_data.AllProjects);
            return response.data.results;
        } catch (error) {
            console.log(router);
            router.push({ name: 'not-found' })
        }
    }
});