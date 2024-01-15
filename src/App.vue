<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
    components: {
        AppHeader,
        AppMain,
        AppFooter
    }
}
</script>

<template>
  <AppHeader />
  <main>
        <AppMain/>
        <router-view></router-view>
  </main>
  <AppFooter/>
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>
