<script>
export default {
    name: 'CharacterDesign',
    
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-6 px-5">
                    <img class="img-fluid" src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/team-single-img-1.jpg" alt="">
                </div>
                <div class="col-12 col-xl-6 px-5 d-flex align-items-center">
                    <div>
                        <h1 class="big_font">
                            Character <strong><em>design</em></strong>
                        </h1>
                        <p class="grey">
                            No homero adolescens mei, eum cu decore reformidans, cum erant nonumy dictas ei. Ne vis congue gloriatur vel eu. 
                        </p>
                        <button class="my_btn">
                          READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
section{
    padding: 5rem 0;

    h1.big_font{
    font-size: 4rem;
    font-weight: 300;

    em{
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 700;
    }
  }

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
}
</style>