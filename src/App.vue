<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <router-view></router-view>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      store,
    };
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
  },
  created() {
    this.store.methods.getProjects();
    this.store.methods.getTypes();
  }
};
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;



main {
  background-color: $background-primary-color;
  min-height: 100vh;
}
</style>
