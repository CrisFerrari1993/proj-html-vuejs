<script>
export default {
    name: 'AppCalendar'
}
</script>

<template>
    <h1>AppCalendar</h1>
    <div class="appcalendar_container">
        <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12 ">ciao</div>
            <div class="col-md-4 col-sm-6 col-xs-12">ciao</div>
            <div class="col-md-4 col-sm-6 col-xs-12">ciao</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.appcalendar_container {
    display: flex;
    align-items: center;
    justify-content: center;
    // debug
    min-height: 300px;

    .row {
        width: 85%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
