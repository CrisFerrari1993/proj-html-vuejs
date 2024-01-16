<script>
export default {
  name: 'AppWorkingProcess'
}
</script>

<template>
  <div class="container-fluid text-center p-5 my-5" id="working_process">
    <h1>Working <strong><em>process</em></strong></h1>
    <div class="row">
        <div class="col-12 col-md-12 col-xl-3">
            <div class="my_icon my-5">
                <i class="fa-solid fa-lightbulb color-aquamarine"></i>
            </div>
            <div class="text-center">
                <h5>
                    First theres an idea
                </h5>
                <p>
                    Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.
                </p>
            </div>
        </div>
        <div class="col-12 col-md-12 col-xl-3">
            <div class="my_icon my-5">
                <i class="fa-regular fa-comment color-gold"></i>
            </div>
            <div class="text-center">
                <h5>
                    Then we talk about
                </h5>
                <p>
                    Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.
                </p>
            </div>
        </div>
        <div class="col-12 col-md-12 col-xl-3">
            <div class="my_icon my-5">
                <i class="fa-solid fa-cloud color-marron"></i>
            </div>
            <div class="text-center">
                <h5>
                    And we think about
                </h5>
                <p>
                    Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.
                </p>
            </div>
        </div>
        <div class="col-12 col-md-12 col-xl-3">
            <div class="my_icon my-5">
                <i class="fa-solid fa-pen-ruler color-orange"></i>
            </div>
            <div class="text-center">
                <h5>
                    So we draw along
                </h5>
                <p>
                    Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
#working_process{
    h1 {
        font-size: 4rem;
        font-weight: 500;
        em{
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    }
    p {
        color: grey;
    }
    .my_icon{
            width: 200px;
            height: 200px;
            margin: 0 auto;
        	display: flex;
            justify-content: center;
            align-items: center;
            padding: 4rem 0;
            background-color: #faf7f1;
            border-radius: 50%;
        i {
        font-size: 3rem;
        &.color-orange {
            color:#eb6950 ;
        }
        &.color-marron {
            color:#80465f ;
        }
        &.color-gold {
            color:#f8d12d ;
        }
        &.color-aquamarine {
            color:#badac9 ;
        }
        }
    }
    
}
</style>