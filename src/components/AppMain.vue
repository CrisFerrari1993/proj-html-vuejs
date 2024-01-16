<script>
import App6Squares from './App6Squares.vue';
import AppContacts from './AppContacts.vue';

export default {
  name: 'AppMain',
  components: {
    App6Squares,
    AppContacts
  }
}
</script>

<template>
  <!-- Jumbotron -->
  <div id="carouselExampleControls" class="carousel slide mb-5" data-bs-ride="carousel">
    <div class="carousel-inner custom-padding">
      <div class="carousel-item active">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-xl-6 d-flex justify-content-center align-items-center mb-2">
              <div>
                <h1 class="big_font">
                  Projects made with <strong><em>love</em></strong>
                </h1>
                <p class="grey">
                  Aliquid unde suscipit repudiandae quidem iure! Blanditiis, omnis vel. Rerum, modi!
                </p>
                <button class="my_btn">
                  READ MORE
                </button>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-xl-6 d-flex justify-content-center align-items-center mb-2">
              <img src="../../public/jumbotron/short-slider-rev-1-img-3.png" class="fill" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-xl-6 d-flex justify-content-center align-items-center mb-2">
              <div>
                <h1 class="big_font">
                  Our new folio full of <strong><em>joy</em></strong>
                </h1>
                <p class="grey">
                  Aliquid unde suscipit repudiandae quidem iure! Blanditiis, omnis vel. Rerum, modi!
                </p>
                <button class="my_btn">
                  READ MORE
                </button>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-xl-6 d-flex justify-content-center align-items-center mb-2">
              <img src="../../public/jumbotron/h-2-slider-img-11.png" class="fill" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-xl-6 d-flex justify-content-center align-items-center mb-2">
              <div>
                <h1 class="big_font">
                  Devotion that never <strong><em>ends</em></strong>
                </h1>
                <p class="grey">
                  Aliquid unde suscipit repudiandae quidem iure! Blanditiis, omnis vel. Rerum, modi!
                </p>
                <button class="my_btn">
                  READ MORE
                </button>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-xl-6 d-flex justify-content-center align-items-center mb-2">
              <img src="../../public/jumbotron/h-2-slider-img-16.png" class="img_50 fill" alt="">
              <img src="../../public/jumbotron/h-2-slider-img-15.png" class="img_50 fill" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control px-3 py-2 rounded-circle pink" aria-hidden="true"><i
          class="fa-solid fa-angle-left"></i></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control px-3 py-2 rounded-circle pink" aria-hidden="true"><i
          class="fa-solid fa-angle-right"></i></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- Sezione con 6 quadrati -->
  <App6Squares />

  <!-- Sezione contatti -->
  <AppContacts />
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
#carouselExampleControls {
  .custom-padding {
  padding: 0 10rem;
}
  h1.big_font{
    font-size: 4rem;
    font-weight: 300;

    em{
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 700;
    }
  }

<<<<<<< HEAD
  p{
    margin: 2rem 0;
  }
  p.grey{
    color: grey;
    font-size: 1.2rem;
  }
  .my_btn {
    background: none;
    border: 2px solid #e1c0b0 ;
    padding: 10px 20px;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
  }
  .my_btn:hover{
    color: #fff;
  }
  .my_btn::before{
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #e1c0b0;
    z-index: -1;
    transition: 0.5s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  .my_btn:hover::before{
    height: 180%;
  }
  .img_50{
    max-width: 250px;
    max-height: 300px;
  }
  img{
    max-width: 400px;
    height: 300px;
    .fill{
      object-fit: contain;
    }
  }
  .pink {
    background-color: #e1c0b0;
  }
  }
=======
.fixed-height {
  height: 500px;
}

.pink {
  background-color: #e1c0b0;
}
>>>>>>> 0430e38 (creazione componente)
</style>