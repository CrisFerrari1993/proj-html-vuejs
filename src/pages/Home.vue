<script>
import App6Squares from '../components/App6Squares.vue';
import AppContacts from '../components/AppContacts.vue';
import AppJumbotron from '../components/AppJumbotron.vue';
import AppWorkingProcess from '../components/AppWorkingProcess.vue';
import AppCalendar from '../components/AppCalendar.vue';
export default {
    name: 'Home',
    components: {
    App6Squares,
    AppContacts,
    AppJumbotron,
    AppWorkingProcess,
    AppCalendar
  }
}
</script>

<template>
  <!-- Jumbotron -->
  <AppJumbotron />
  <!-- Sezione con 6 quadrati -->
  <App6Squares />
  <!-- Working Progress -->
  <AppWorkingProcess />
  <!-- Sezione contatti -->
  <AppContacts />
  <!-- Sezione calendario -->
  <AppCalendar />
</template>

<style lang="scss">
@use "../styles/general.scss"

</style>