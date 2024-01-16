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
            <img src="../../public/logo-sidearea-1.png" alt="Marèe">
        </div>

        <!-- nav bar -->
        <nav>

            <!-- dropdown menu -->
            <div class="dropdown">

                <!-- Home -->
                <button class="btn my_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME
                </button>
                <ul class="dropdown-menu my_dropdown-menu">
                    <li v-for="(element, i) in store.homeLinks" :key="i">
                        <a class="dropdown-item" :href="element.href">
                            {{ element.name }}
                        </a>
                    </li>
                </ul>

                <!-- Pages -->
                <button class="btn my_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                </button>
                <ul class="dropdown-menu my_dropdown-menu">
                    <li v-for="(element, i) in store.pagesLinks" :key="i">
                        <a class="dropdown-item" :href="element.href">
                            {{ element.name }}
                        </a>
                    </li>
                </ul>

                <!-- Portfolio -->
                <button class="btn my_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PORTFOLIO
                </button>
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
                <button class="btn my_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    BLOG
                </button>
                <ul class="dropdown-menu my_dropdown-menu">
                    <li v-for="(element, i) in store.blogLinks" :key="i">
                        <a class="dropdown-item" :href="element.href">
                            {{ element.name }}
                        </a>
                    </li>
                </ul>

                <!-- Shop -->
                <button class="btn my_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SHOP
                </button>
                <ul class="dropdown-menu my_dropdown-menu">
                    <li v-for="(element, i) in store.shopLinks" :key="i">
                        <a class="dropdown-item" :href="element.href">
                            {{ element.name }}
                        </a>
                    </li>
                </ul>

                <!-- Elements -->
                <button class="btn my_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ELEMENTS
                </button>
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

            </div>

            <!-- off canvas menu -->
            <i class="fa-solid fa-bars btn btn-primary" style="color: #000000;" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    ...
                </div>
            </div>

        </nav>

    </header>
</template>

<style lang="scss">
header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
}

nav {
    display: flex;
}

.my_dropdown-menu {
    background-color: #FAF7F2 !important;
    border: none !important;
    line-height: 30px;
}

.portfolio_dropdown {
    width: 100vw !important;
    padding: 50px !important;
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
    background-color: white !important;
    border: none !important;
}
</style>