import { reactive } from 'vue';
import axios from 'axios';


export const store = reactive({
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    imgBasePath: 'http://127.0.0.1:8000/storage/',
    api_data: {
        AllProjects: []
    }
})

export const storeMethods = {
    async getAllProjects() {
        try {
            const response = await axios.get(`${store.apiBaseUrl}/projects`);
            store.api_data.AllProjects = response.data.results;
            return store.api_data.AllProjects;
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }
};