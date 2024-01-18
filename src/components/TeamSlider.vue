<script>
export default {
    name: 'TeamSlider',
    data() {
        return {
            sliderInfo: [
                {
                    creator: 'Akiko Rector',
                    content: 'Lorem ipsum dolor sit amet, Id quo dicant, ne copiosae populo veritas'
                },
                {
                    creator: 'Mark Beaver',
                    content: 'Doloremque, dolore similique architecto officia natus quidem perferendis ut vitae debitis'
                },
                {
                    creator: 'Lara Colins',
                    content: 'Qui quia quis, architecto delectus quo iste! Esse officia nostrum dolor voluptatem'
                }

            ]
        }
    }
}
</script>

<template>
<!-- Carousel -->
<section>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div id="carousel-content" class="container d-flex- justift-content-center align-items-center">
                <div class="text bg-personalized">
                    <h1>
                        {{ sliderInfo[0].content }}
                    </h1>
                    <span>
                        <em>
                            {{ sliderInfo[0].creator }}
                        </em>
                    </span>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div id="carousel-content" class="container d-flex- justift-content-center align-items-center">
                <div class="text bg-personalized">
                    <h1>
                        {{ sliderInfo[1].content }}
                    </h1>
                    <span>
                        <em>
                            {{ sliderInfo[1].creator }}
                        </em>
                    </span>
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div id="carousel-content" class="container d-flex- justift-content-center align-items-center">
                <div class="text bg-personalized">
                    <h1>
                        {{ sliderInfo[2].content }}
                    </h1>
                    <span>
                        <em>
                            {{ sliderInfo[2].creator }}
                        </em>
                    </span>
                </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control round " aria-hidden="true"><i
          class="fa-solid fa-angle-left"></i></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control round" aria-hidden="true"><i
          class="fa-solid fa-angle-right"></i></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
section{
    margin: 2rem 0;
    background-color: #faf7f1;
    
    .text{
        padding: 0 7rem;

        em{
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-weight: 100;
            font-size: 1.5rem;
        }
    }
    .round{
        padding: 0.5rem 1rem;
        background-color: #e1c0b0 ;
        border-radius: 50%;
    }
    .bg-personalized{
        background-image: url(../../public/SliderTeam/Daco_3580844.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 8rem;
    }
    #carousel-content{
        padding: 5rem 0;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
}
</style>