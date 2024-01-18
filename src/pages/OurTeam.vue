<script>
import TeamList from '../components/TeamList.vue';
import FlushContainer from '../components/FlushContainer.vue';
import TeamSlider from '../components/TeamSlider.vue';
import CharacterDesign from '../components/CharacterDesign.vue';

export default {
    name: 'OurTeam',
    components : {
        TeamList,
        FlushContainer,
        TeamSlider,
        CharacterDesign
    
    }   
}
</script>

<template>
    <TeamList />
    <FlushContainer />
    <TeamSlider/>
    <CharacterDesign />
</template>

<style lang="scss">
@use "../styles/general.scss";

</style>