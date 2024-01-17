<script>

// import dei componenti
import Offerts from '../components/Offerts.vue';


export default {
    name: 'WhatWeOffer',
    components: {
        Offerts,
    }
}
</script>

<template>
    <div class="jumbotron">
        <h1 class="big_font">
            What we <strong><em>offer</em></strong>
        </h1>
    </div>

    <Offerts />
</template>

<style lang="scss">
@use "../styles/general.scss";

.jumbotron {
    width: 100%;
    height: 300px;
    // da modificare con img di background
    background-color: #FAF7F1;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1.big_font {
    font-size: 4rem;
    font-weight: 300;

    em {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-weight: 700;
    }
}
</style>