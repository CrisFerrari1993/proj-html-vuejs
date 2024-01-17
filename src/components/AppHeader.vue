<script>

// import store
import { store } from '../store';

export default {
    name: 'AppHeader',

    data() {
        return {
            store,
        }
    }
}



</script>

<template>
    <header>


        <!-- logo -->
        <div class="logo">
            <!-- <router-link :to="home" class="nav-link"> -->
            <img src="../../public/logo-sidearea-1.png" alt="Marèe">
            <!-- </router-link> -->
        </div>

        <!-- nav bar -->
        <nav>

            <!-- dropdown menu -->
            <div class="dropdown">

                <div class="container-fluid d-flex">

                    <div class="row align-items-center">

                        <!-- Home -->
                        <div class=" col custom-cursor" data-bs-toggle="dropdown" aria-expanded="false">
                            HOME
                        </div>
                        <ul class="dropdown-menu my_dropdown-menu">
                            <li v-for="(element, i) in store.homeLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </ul>

                        <!-- Pages -->
                        <div class="col custom-cursor" data-bs-toggle="dropdown" aria-expanded="false">
                            PAGES
                        </div>
                        <ul class="dropdown-menu my_dropdown-menu">
                            <li v-for="(element, i) in store.pagesLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </ul>

                        <!-- Portfolio -->
                        <div class="col custom-cursor" data-bs-toggle="dropdown" aria-expanded="false">
                            PORTFOLIO
                        </div>
                        <ul class="dropdown-menu my_dropdown-menu portfolio_dropdown my_dropdown">

                            <div class="row my_row">
                                <div class="col">
                                    <span>TYPES</span>
                                    <ul>
                                        <li v-for="(element, i) in store.typeLinks" :key="i">
                                            <a class="dropdown-item" :href="element.href">
                                                {{ element.name }}
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                                <div class="col">
                                    <span>LAYOUTS</span>
                                    <ul>
                                        <li v-for="(element, i) in store.layoutsLinks" :key="i">
                                            <a class="dropdown-item" :href="element.href">
                                                {{ element.name }}
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                                <div class="col">
                                    <span>HOVER TYPES</span>
                                    <ul>
                                        <li v-for="(element, i) in store.hoverTypesLinks" :key="i">
                                            <a class="dropdown-item" :href="element.href">
                                                {{ element.name }}
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                                <div class="col">
                                    <span>SINGLES</span>
                                    <ul>
                                        <li v-for="(element, i) in store.singleLinks" :key="i">
                                            <a class="dropdown-item" :href="element.href">
                                                {{ element.name }}
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </ul>

                        <!-- Blog -->
                        <div class="col custom-cursor" data-bs-toggle="dropdown" aria-expanded="false">
                            BLOG
                        </div>
                        <ul class="dropdown-menu my_dropdown-menu">
                            <li v-for="(element, i) in store.blogLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </ul>

                        <!-- Shop -->
                        <div class="col custom-cursor" data-bs-toggle="dropdown" aria-expanded="false">
                            SHOP
                        </div>
                        <ul class="dropdown-menu my_dropdown-menu">
                            <li v-for="(element, i) in store.shopLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </ul>

                        <!-- Elements -->
                        <div class="col custom-cursor" data-bs-toggle="dropdown" aria-expanded="false">
                            ELEMENTS
                        </div>
                        <ul class="dropdown-menu my_dropdown-menu portfolio_dropdown">

                            <div class="row my_row">
                                <div class="col-3">
                                    <span>TYPES</span>
                                    <ul>
                                        <li v-for="(element, i) in store.typeLinks" :key="i">
                                            <a class="dropdown-item" :href="element.href">
                                                {{ element.name }}
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                                <div class="col-3">
                                    <span>LAYOUTS</span>
                                    <ul>
                                        <li v-for="(element, i) in store.layoutsLinks" :key="i">
                                            <a class="dropdown-item" :href="element.href">
                                                {{ element.name }}
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                                <div class="col-3">
                                    <span>HOVER TYPES</span>
                                    <ul>
                                        <li v-for="(element, i) in store.hoverTypesLinks" :key="i">
                                            <a class="dropdown-item" :href="element.href">
                                                {{ element.name }}
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                                <div class="col-3">
                                    <span>SINGLES</span>
                                    <ul>
                                        <li v-for="(element, i) in store.singleLinks" :key="i">
                                            <a class="dropdown-item" :href="element.href">
                                                {{ element.name }}
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </ul>

                    </div>
                    <!-- off canvas menu -->
                    <i class="fa-solid fa-bars" style="color: #000000;" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>

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

            </div>

        </nav>

    </header>
</template>

<style lang="scss" scoped>
header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
}

nav {
    display: flex;
    align-items: center;
    height: 100px;
}

.container-fluid {
    align-items: center;
}

.col .dropdown {
    align-items: center;
    height: 100%;
    display: flex;
}

div.custom-cursor {
    cursor: pointer;
}

.custom-cursor {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;
    height: 100px;
}

.my_dropdown-menu {
    background-color: #FAF7F2;
    border: none;
    line-height: 30px;
    width: fit-content;
    padding: 30px;
}

.portfolio_dropdown {
    width: 100vw;
    padding: 50px;
}

span {
    font-weight: bold;
}

.my_row {
    text-align: left;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.fa-solid {
    background-color: white;
    border: none;
}

.fa-solid:hover {
    background-color: white;
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
</style>