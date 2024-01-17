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
                },
                {
                    img: 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-blog-img-2.jpg',
                    title: 'I try to give people a different way of looking art',
                    author: 'Emily Fields',
                    date: {
                        day: '07',
                        month: 'MAY',
                        year: "'19"
                    }
                },
                {
                    img: 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-blog-img-3.jpg',
                    title: 'Introduce Richard Laperrière of those amazing features',
                    author: 'Emily Fields',
                    date: {
                        day: '07',
                        month: 'MAY',
                        year: "'19"
                    }
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12 card my-4" v-for="(item, i) in calendarItems">
                <div class="img-container">
                    <img :src="item.img" alt="">
                </div>
                <h4>
                    <a href="#">
                        {{ item.title }}
                    </a>
                </h4>
                <span class="author-name">
                    <a href="#">
                        <em>By {{ item.author }}</em>
                    </a>
                </span>
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
    margin-top: 50px;
    // debug
    min-height: 300px;

    .row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .card {
            min-height: 400px;
            position: relative;
            border: none;

            img {
                width: 100%;
                transition: transform 0.3s ease;
                transform-origin: center center
            }

            &:hover {
                img {
                    transform: scale(1.03);
                }
            }

            h4 {
                font-size: 26px;
                padding-top: 25px;

                &::selection {
                    background: #c0e1cf;
                    color: white;
                }

            }

            a {
                text-decoration: none;
                color: black;
                background-size: 0 100%;
                background-image: linear-gradient(transparent calc(100% - 13px), #d8f0e3 0);
                transition: .6s
            }

            .author-name {
                font-size: 15px;
                padding-top: 10px
            }

            .bookmark {
                position: absolute;
                top: -15px;
                left: 25px;

                span {
                    display: block;
                    text-align: center;
                }

                .day {
                    font-family: "Playfair Display", serif;
                    font-style: italic;
                    font-size: 35px;
                    background-color: #c0e1cf;
                }

                .month-year {
                    font-size: 11px;
                    background-color: #f3d0c7;
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
                    letter-spacing: 1.1px;
                    padding: 8px 5px 12px 5px;
                }
            }
        }
    }
}
</style>
