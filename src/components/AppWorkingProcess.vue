<script>
export default {
    name: 'AppWorkingProcess',
    data() {
        return {
            itemsList: [
                {
                    title: 'First theres an idea',
                    description: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
                    icon: 'fa-regular fa-lightbulb color-aquamarine'
                },
                {
                    title: 'Then we talk about',
                    description: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
                    icon: 'fa-regular fa-comment color-gold'
                },
                {
                    title: 'And we think about',
                    description: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
                    icon: 'fa-brands fa-cloudversify color-marron'
                },
                {
                    title: 'So we draw along',
                    description: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
                    icon: 'fa-regular fa-pen-to-square color-orange'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container-fluid text-center p-5 my-5" id="working_process">
        <h1>Working <strong><em>process</em></strong></h1>
        <div class="row">
            <div class="col-12 col-md-12 col-xl-3" v-for="(item, i) in itemsList">
                <div class="my_icon my-5">
                    <i :class="item.icon"></i>
                </div>
                <div class="text-center">
                    <h5>
                        {{ item.title }}
                    </h5>
                    <p>
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

#working_process {
    h1 {
        font-size: 4rem;
        font-weight: 500;

        em {
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    }

    p {
        color: grey;
    }

    .my_icon {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem 0;
        border-radius: 50%;
        background-color: #faf7f1;

        i {
            font-size: 3rem;
            padding: 1rem;
            background-color: none;

            &.color-orange {
                color: #eb6950;
            }

            &.color-marron {
                color: #80465f;
            }

            &.color-gold {
                color: #f8d12d;
            }

            &.color-aquamarine {
                color: #badac9;
            }
        }
    }

}
</style>