<template>
  <ul>
    <li v-for="(project, index) in projects" :key="index">{{ project.title }}
      <img :src="store.imgBasePath + project.image_url" :alt="project.title">
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
import { store } from './store';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      store,
      projects: []
    }
  },
  methods: {
    getAllPosts() {
      axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
        console.log(res.data.results);
        this.projects = res.data.results;
      })
    }
  },
  mounted() {
    this.getAllPosts();

  }
}
</script>

<style lang="scss" scoped></style>