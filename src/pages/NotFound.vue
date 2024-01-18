<script>
export default {
    name: 'NotFound'
}
</script>

<template>
  <section class="d-flex justify-content-center align-items-center text-center">
    <div>
      <div>
        <div class="container">
          <span>Ooops!</span>
          <h1 class="big_font fw-bold">Error page <strong><em>404</em></strong></h1>
          <button class="my_btn">
              <a href="/">
                BACK TO HOME
              </a>
            </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
section{
  background-image: url(https://maree.qodeinteractive.com/wp-content/uploads/2019/05/error-page-backgroung-img-1.jpg);
  height: 81vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}
.my_btn {
    background: none;
    border: 2px solid #e1c0b0 ;
    padding: 10px 20px;
    transition: 0.5s;
    position: relative;
    overflow: hidden;

    a{
      text-decoration: none;
      color: black;

      &:hover{
        color: #fff;
      }

    }

  }
  .my_btn:hover{
    color: #fff;
    background-color: #e1c0b0;
  }

h1.big_font{
    font-size: 4rem;
    font-weight: 300;

    em{
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 700;
    }
  }

</style>