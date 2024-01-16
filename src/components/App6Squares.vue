<script>
export default {
    name: 'App6Squares',
    data() {
        return {
            imgsList: [
                {
                    name: 'img1',
                    path: 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-port-img-1.jpg',
                    labletxt: {
                        title: 'All these illustrations',
                        description: 'Illustration'
                    }
                },
                {
                    name: 'img2',
                    path: 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-port-img-2.jpg',
                    labletxt: {
                        title: 'Type and illustrations',
                        description: 'Illustration'
                    }
                },
                {
                    name: 'img3',
                    path: 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-port-img-3.jpg',
                    labletxt: {
                        title: 'Draw and illustrate',
                        description: 'Illustration'
                    }
                },
                {
                    name: 'img4',
                    path: 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-port-img-4.jpg',
                    labletxt: {
                        title: 'Illustrations of novels',
                        description: 'Illustration'
                    }
                },
                {
                    name: 'img5',
                    path: 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-port-img-5.jpg',
                    labletxt: {
                        title: 'Too many illustrations',
                        description: 'Illustration'
                    }
                },
                {
                    name: 'img6',
                    path: 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-port-img-6.jpg',
                    labletxt: {
                        title: 'Dreams are illustrations',
                        description: 'Illustration'
                    }
                },
            ]
        }
    }
}
</script>

<template>
    <div class="my_container">
        <div class="my_row align-items-start">
            <div v-for="(img, i) in imgsList" class="col-md-4 col-sm-6 col-xs-12 my_col-box">
                <img class="img_box" :src="img.path" alt="">
                <div class="lable">
                    <span class="lable_title">{{ img.labletxt.title }}</span>
                    <span class="lable_description">{{ img.labletxt.description }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/general.scss";

.my_container {
    width: 100%;

    .my_row {
        gap: 0;
        display: flex;
        flex-wrap: wrap;
    }

    .my_col-box {
        position: relative;

        &:hover .lable {
            display: block;
            width: 75%;
        }

        .img_box {
            width: 100%;
        }

        .lable {
            position: absolute;
            top: 50%;
            left: 0;
            padding: 20px;
            background-color: white;
            display: none;
            transform: translate(0%, -50%);

            span {
                display: block;
            }

            .lable_title {
                font-size: 24px;
                margin: 0 auto;
            }

            .lable_description {
                font-size: 18px;
                font-style: oblique;
            }
        }
    }



}
</style>
