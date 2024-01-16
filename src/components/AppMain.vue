<script>
import App6Squares from './App6Squares.vue';

export default {
  name: 'AppMain',
  components: {
    App6Squares
  }
}
</script>

<template>
  <!-- Jumbotron -->
  <div id="carouselExampleControls" class="carousel slide fixed-height" data-bs-ride="carousel">
    <div class="carousel-inner custom-padding">
      <div class="carousel-item active">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
              <div>
                <h1>
                  Projects made with <strong>love</strong>
                </h1>
                <p>
                  Aliquid unde suscipit repudiandae quidem iure! Blanditiis, omnis vel. Rerum, modi!
                </p>
                <button class="my_btn">
                  READ MORE
                </button>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
              <img src="../../public/jumbotron/short-slider-rev-1-img-3.png" class="my_img" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
              <div>
                <h1>
                  Projects made with <strong>love</strong>
                </h1>
                <p>
                  Aliquid unde suscipit repudiandae quidem iure! Blanditiis, omnis vel. Rerum, modi!
                </p>
                <button class="my_btn">
                  READ MORE
                </button>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
              <img src="../../public/jumbotron/h-2-slider-img-11.png" class="my_img" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
              <div>
                <h1>
                  Projects made with <strong>love</strong>
                </h1>
                <p>
                  Aliquid unde suscipit repudiandae quidem iure! Blanditiis, omnis vel. Rerum, modi!
                </p>
                <button class="my_btn">
                  READ MORE
                </button>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
              <img src="../../public/jumbotron/h-2-slider-img-16.png" class="my_img" alt="">
              <img src="../../public/jumbotron/h-2-slider-img-15.png" class="my_img" alt="">

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
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.custom-padding {
  padding: 0 15rem;
}

.fixed-height {
  height: 500px;
}
.pink {
  background-color: #e1c0b0;
}
</style>