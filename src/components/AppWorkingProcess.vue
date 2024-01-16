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
            <div class="text-center">
                <i class="fa-solid fa-lightbulb p-5 "></i>
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
            <div class="text-center">
                <i class="fa-regular fa-comment p-5"></i>
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
            <div class="text-center">
                <i class="fa-solid fa-cloud p-5"></i>
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
            <div class="text-center">
                <i class="fa-solid fa-pen-ruler p-5"></i>
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

<style lang="scss">
@use "../styles/general.scss";
#working_process{
    h1 {
        font-size: 4rem;
        font-weight: 500;
        em{
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    }
}
</style>