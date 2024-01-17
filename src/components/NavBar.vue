<script>
import { store } from '../store.js';

export default {
  name: 'NavBar',
  data() {
    return {
      store,
    }
  },
  created() {
    console.log(store.navLinks[0].links[0]);
  }
}
</script>

<template>
<<<<<<< HEAD
    <header class="container">
        <nav class="navbar navbar-expand-lg justify-content-between flex-grow-1">
                <a href="/">
                    <img src="../../public/logo-sidearea-1.png" alt="Site Logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li v-for="(link, i) in store.navLinks" :key="i" class="nav-item dropdown mx-2">
                            <a class="nav-link letter-spacing" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ link.name.toUpperCase() }}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item dropdown mx-2" v-for="(sectionLink, i) in store.navLinks[i].links">
                                    <a class="dropdown-item" :href="sectionLink.href">
                                        {{ sectionLink.name }}
                                    </a>
                                </li>
                            </ul>
                        </li>  
                    </ul>
                </div>
        </nav>
        <div class="icon_canvas">
            <i class="fa-solid fa-bars display" style="color: #000000;" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            </i>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <img src="../../public/logo-sidearea-1.png" alt="Marèe">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body my_offcanvas_body">
                    <span>This is Marèe, a colorful new portfolio for presenting your work. If you are a modern
                        illustrator
                        or designer, we made Marèe for you</span>
                    <div id="social_icon">
                        <i class="fa-brands fa-twitter fa-xl" style="color: #000000;"></i>
                        <i class="fa-brands fa-pinterest fa-xl" style="color: #000000;"></i>
                        <i class="fa-brands fa-facebook fa-xl" style="color: #000000;"></i>
                        <i class="fa-brands fa-linkedin fa-xl" style="color: #000000;"></i>
                    </div>
                    <input type="text" placeholder="Enter your keyword...">
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon_canvas{
    margin: 0 0.8rem;
}
.fa-solid {
    background-color: white;
    border: none;
}

.fa-solid:hover {
    background-color: white;
}
.letter-spacing{
    letter-spacing: 4px;
}
.my_offcanvas_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
        width: 50%;
    }

    span {
        margin-bottom: 80px;
    }

    i {
        margin-right: 15px;
    }

    input {
        border: none;
        border-bottom: 2px solid #F5D8CA;
        margin-top: 100px;
        width: 100%
    }

    ;
}
@media all and (max-width: 1000px){
    i.display{
        display: none;
    }
}
=======
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a href="/home">
        <img src="../../public/logo-sidearea-1.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(link, i) in store.navLinks" :key="i" class="nav-item dropdown">
            <a class="nav-link" href="#" :id="'navbarDropdown' + i" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              {{ link.name }}
            </a>
            <ul class="dropdown-menu" :aria-labelledby="'navbarDropdown' + i">
              <li v-for="(sectionLink, j) in link.links" :key="j" class="nav-item dropdown">
                <a class="nav-link" href="#" :id="'navbarDropdownSec' + i + j" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {{ sectionLink.name }}
                </a>
                <ul class="dropdown-menu" :aria-labelledby="'navbarDropdownSub' + i + j">
                  <li v-for="(subLink, k) in sectionLink.links" :key="k" class="nav-item dropdown">
                    <a class="nav-link" href="#" :id="'navbarDropdownSub' + i + j + k" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      {{ subLink.name }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@use "../styles/general.scss"
>>>>>>> f8e7f22 (tentativo di fare la navbar)
</style>