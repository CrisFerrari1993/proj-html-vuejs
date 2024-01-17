<script>
//import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import NavBar from './components/NavBar.vue';


export default {
    components: {
        //AppHeader,
        AppFooter,
        NavBar,
    }
}
</script>

<template>
  <!-- <AppHeader /> -->
  <NavBar />
  <main>
        <router-view></router-view>
  </main>
  <AppFooter/>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
