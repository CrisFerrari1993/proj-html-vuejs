<script>

// import dei componenti
import Offerts from '../components/Offerts.vue';
import VibesLovingIntro from '../components/VibesLovingIntro.vue';
import AppCalendar from '../components/AppCalendar.vue';
import AppNewsletter from '../components/AppNewsletter.vue'


export default {
    name: 'WhatWeOffer',
    components: {
        Offerts,
        VibesLovingIntro,
        AppCalendar,
        AppNewsletter
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
    <AppNewsletter />
    <AppCalendar />
</template>

<style lang="scss">
@use "../styles/general.scss";

.jumbotron {
    width: 100%;
    height: 300px;
    background-image: url(https://maree.qodeinteractive.com/wp-content/uploads/2019/06/title-area-img.png);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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