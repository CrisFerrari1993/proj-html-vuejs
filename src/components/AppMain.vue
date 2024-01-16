<script>
import App6Squares from './App6Squares.vue';
import AppContacts from './AppContacts.vue';
import AppJumbotron from './AppJumbotron.vue';

export default {
  name: 'AppMain',
  components: {
    App6Squares,
    AppContacts,
    AppJumbotron
  }
}
</script>

<template>
  <!-- Jumbotron -->
  <AppJumbotron />
  <!-- Sezione con 6 quadrati -->
  <App6Squares />

  <!-- Sezione contatti -->
  <AppContacts />
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

</style>