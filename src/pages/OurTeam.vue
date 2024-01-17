<script>
import TeamList from '../components/TeamList.vue';
import FlushContainer from '../components/FlushContainer.vue';

export default {
    name: 'OurTeam',
    components : {
        TeamList,
        FlushContainer
    
    }   
}
</script>

<template>
    <TeamList />
    <FlushContainer />
</template>

<style lang="scss">
@use "../styles/general.scss";

</style>