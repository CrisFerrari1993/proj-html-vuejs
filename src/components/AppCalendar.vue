<script>
export default {
    name: 'AppCalendar'
}
</script>

<template>
    <h1>AppCalendar</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12 card">ciao</div>
            <div class="col-md-4 col-sm-6 col-xs-12 card">ciao</div>
            <div class="col-md-4 col-sm-6 col-xs-12 card">ciao</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container {
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

        .card {
            min-height: 200px;
            background-color: red;
        }
    }
}
</style>
