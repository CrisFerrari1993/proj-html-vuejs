<script>

// import dei componenti
import Offerts from '../components/Offerts.vue';
import VibesLovingIntro from '../components/VibesLovingIntro.vue';
import AppCalendar from '../components/AppCalendar.vue';


export default {
    name: 'WhatWeOffer',
    components: {
        Offerts,
        VibesLovingIntro,
        AppCalendar
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
    <VibesLovingIntro />
    <AppCalendar />
</template>

<style lang="scss">
@use "../styles/general.scss";

.jumbotron {
    width: 100%;
    height: 300px;
    // da modificare con img di background
    background-image: url(https://maree.qodeinteractive.com/wp-content/uploads/2019/06/title-area-img.png);
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