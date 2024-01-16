<script>
import App6Squares from './App6Squares.vue';
import AppContacts from './AppContacts.vue';
import AppJumbotron from './AppJumbotron.vue';
import AppWorkingProcess from './AppWorkingProcess.vue';

export default {
  name: 'AppMain',
  components: {
    App6Squares,
    AppContacts,
    AppJumbotron,
    AppWorkingProcess,
  }
}
</script>

<template>
  <!-- Jumbotron -->
  <AppJumbotron />
  <!-- Sezione con 6 quadrati -->
  <App6Squares />
  <!-- Working Progress -->
  <AppWorkingProcess/>
  <!-- Sezione contatti -->
  <AppContacts />
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

</style>