<script>
export default {
    name: 'AppMain'
}
</script>

<template>
<!-- Jumbotron -->
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../public/jumbotron/short-slider-rev-1-img-3.png" class="img-fluid" alt="jumbotron img">
    </div>
    <div class="carousel-item">
      <img src="../../public/jumbotron/short-slider-rev-1-img-1.png" class="img-fluid" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/jumbotron/short-slider-rev-1-img-5.png" class="img-fluid" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";



</style>