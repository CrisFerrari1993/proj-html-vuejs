<script>
export default {
    name: 'AppCalendar',
    data() {
        return {
            calendarItems: [
                {
                    img: 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-blog-img-1.jpg',
                    title: 'This way, loves: a detailed guide through new design ',
                    author: 'Emily Fields',
                    date: {
                        day: '07',
                        month: 'MAY',
                        year: "'19"
                    }
                }
            ]
        }
    }
}
</script>

<template>
    <h1>AppCalendar</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12 card" v-for="(item, i) in calendarItems">
                <img :src="item.img" alt="">
                <h2>{{ item.title }}</h2>
                <span>By {{ item.author }}</span>
                <div class="bookmark">
                    <span class="day">{{ item.date.day }}</span>
                    <span class="month-year">{{ item.date.month }} {{ item.date.year }}</span>
                </div>
            </div>
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
            position: relative;

            .bookmark {
                position: absolute;
                top: 0;
                left: 0;
                // debug
                background-color: orange;

                span {
                    display: block;
                    padding: 5px 10px;
                    text-align: center;
                }

                .day {
                    font-size: 35px;
                    background-color: #c0e1cf;
                }

                .month-year {
                    font-size: 11px;
                    background-color: #f3d0c7;
                }
            }
        }
    }
}
</style>
