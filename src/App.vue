<script>
import AppFooter from './components/AppFooter.vue';
import NavBar from './components/NavBar.vue';


export default {
  components: {
    AppFooter,
    NavBar,
  }
}
</script>

<template>
  <NavBar />
  <main>
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
