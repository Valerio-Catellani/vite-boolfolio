<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
</template>

<script>
import { store } from './store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      store,
      projects: []
    };
  },
  components: {
    HeaderComponent
  },
  methods: {
    getAllPosts() {
      axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
        console.log(res.data.results);
        this.projects = res.data.results;
      });
    }
  },
  mounted() {
    this.getAllPosts();
  }
};
</script>

<style lang="scss" scoped></style>
