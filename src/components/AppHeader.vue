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

                    <div class="row">
                        <div class="col">
                            <span>TYPES</span>
                            <li v-for="(element, i) in store.typeLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </div>

                        <div class="col">
                            <span>LAYOUTS</span>
                            <li v-for="(element, i) in store.layoutsLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </div>
                        <div class="col">
                            <span>HOVER TYPES</span>
                            <li v-for="(element, i) in store.hoverTypesLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </div>
                        <div class="col">
                            <span>SINGLES</span>
                            <li v-for="(element, i) in store.singleLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
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

                    <div class="row">
                        <div class="col">
                            <span>TYPES</span>
                            <li v-for="(element, i) in store.typeLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </div>

                        <div class="col">
                            <span>LAYOUTS</span>
                            <li v-for="(element, i) in store.layoutsLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </div>
                        <div class="col">
                            <span>HOVER TYPES</span>
                            <li v-for="(element, i) in store.hoverTypesLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </div>
                        <div class="col">
                            <span>SINGLES</span>
                            <li v-for="(element, i) in store.singleLinks" :key="i">
                                <a class="dropdown-item" :href="element.href">
                                    {{ element.name }}
                                </a>
                            </li>
                        </div>
                    </div>
                </ul>

            </div>

        </nav>
    </header>
</template>

<style lang="scss">
header {
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.my_dropdown-menu {
    background-color: #FAF7F2 !important;
    border: none !important;
}

.portfolio_dropdown {
    width: 100vw !important;
    // display: flex !important;
}
</style>