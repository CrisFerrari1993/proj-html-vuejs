<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <h1>Header page</h1>

    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'home' }">
                    home
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about' }">
                    About
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'NotFound' }">
                    NotFound
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@use "../styles/general.scss"
</style>
