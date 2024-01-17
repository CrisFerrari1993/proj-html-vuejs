<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-sm-12 col-md-6 col-lg-3 text-center my-col mb-3">
          <img src="../../public/logo-sidearea-1.png" alt="Marèe">
          <span>Let's Get Creative</span>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 text-center my-col mb-5">
          <span>maree@qodeinteractive.com</span>
          <span>+44645 321 789</span>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 text-center my-col mb-5">
          <span>Avenue d'Auberghem 10</span>
          <span>1040 Brussels, Belgium</span>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 text-center my-col mb-5">
          <span>Stay in touch with us</span>
          <div id="social_icon">
            <i class="fa-brands fa-twitter" style="color: #000000;"></i>
            <i class="fa-brands fa-pinterest" style="color: #000000;"></i>
            <i class="fa-brands fa-facebook" style="color: #000000;"></i>
            <i class="fa-brands fa-linkedin" style="color: #000000;"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>



<style lang="scss" scoped>
footer {
  background-color: #BFE1CF;
  padding-top: 50px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
}

.my-col {
  display: flex;
  align-items: center;
  flex-direction: column;
}

i {
  margin-right: 20px;
}
</style>
