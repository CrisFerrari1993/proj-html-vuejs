<script>
export default {
  name: 'FlushContainer'
}
</script>

<template>
  <!-- FlushContainer -->
  <div class="container">
    <!-- container row -->
    <div class="row">
      <!-- left side -->
      <div class="col-12 col-xl-6 col-xxl-6">
        <div class="container px-5 my-5">
          <!-- flushItem -->
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion border-pink">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button  fw-bold letter-spacing" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne">
                  ANIMATION
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, vis dicunt mediocrem no, saperet pericula eam an. Justo labitur bonorum vix
                  at, vitae integre sit an, pri adipisci.
                </div>
              </div>
            </div>
            <div class="accordion border-pink">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed fw-bold letter-spacing" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo">
                  RIGGERING
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, vis dicunt mediocrem no, saperet pericula eam an. Justo labitur bonorum vix
                  at, vitae integre sit an, pri adipisci.
                </div>
              </div>
            </div>
            <div class="accordion border-pink">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed fw-bold letter-spacing" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree">
                  SPECIAL EFFECTS
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, vis dicunt mediocrem no, saperet pericula eam an. Justo labitur bonorum vix
                  at, vitae integre sit an, pri adipisci.
                </div>
              </div>
            </div>
            <div class="accordion border-pink">
              <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button class="accordion-button collapsed fw-bold letter-spacing" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour">
                  3D MODELLING
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFour">
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, vis dicunt mediocrem no, saperet pericula eam an. Justo labitur bonorum vix
                  at, vitae integre sit an, pri adipisci.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- rigth side -->
      <div class="col-12 col-xl-6 col-xxl-6">
        <div class="container d-flex justify-content-center align-items-center px-5 my-5">
          <div class="container">
            <h1 class="big_font">
              Vibes loving <strong><em>intro</em></strong>
            </h1>
            <p class="grey">
              No homero adolescens mei, eum cu decore reformidans, cum erant nonumy dictas ei. Ne vis congue gloriatur,
              vel eu doming philosophia. Qui quem munere ad, et agam copiosae nam. Ei reque verear periculis eam. Has
              commune constituam eu, ex vis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
h1.big_font {
  font-size: 4rem;
  font-weight: 300;

  em {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
  }
}

p {
  color: grey;
}

.border-pink {
  border-bottom: 3px solid #f5d8ca;
}

.letter-spacing {
  letter-spacing: 2px;
}
</style>
