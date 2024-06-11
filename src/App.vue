<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <router-view></router-view>
  </main>
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
    };
  },
  components: {
    HeaderComponent
  },
  methods: {
  },
  mounted() {
    this.store.getAllProjects();
  }
};
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

main {
  background-color: $background-tertiary-color;
  min-height: 100vh;
}
</style>
