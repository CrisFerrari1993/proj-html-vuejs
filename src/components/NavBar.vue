<script>
import { store } from '../store';

export default {
    name: 'NavBar',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a href="/home">
        <img src="../../public/logo-sidearea-1.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(link, i) in store.navLinks" :key="i" class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ link.name }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="(sectionLink, i) in store.navLinks[i].links">
                <a class="dropdown-item" href="#">
                    {{ sectionLink.name }}
                </a>
            </li>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(subsectioLink, i) in store.navLinks[i].links[i].links " class="nav-item dropdown">
                    <a class="dropdown-item" href="#">
                        {{ subsectioLink.name }}
                    </a>
                </li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style lang="scss">
@use "../styles/general.scss"

</style>