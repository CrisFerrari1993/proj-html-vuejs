<!-- componente della pagina what we offer -->
<script>
export default {
    name: 'VibesLovingIntro',

    data() {
        return {
            progress: [
                { name: "ANIMATION", progressBar: "50%" },
                { name: "DESIGN", progressBar: "60%" },
                { name: "LETTERING", progressBar: "90%" },
                { name: "ANIMATION", progressBar: "70%" },
            ]
        }
    }
}
</script>

<template>
    <div class="container my_container">

        <div class="row">

            <!-- left col -->
            <div class="col-12  col-md-6 text-align-start">
                <h1 class="big_font">
                    Vibes loving <strong><em>intro</em></strong>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, veniam sint. Delectus eaque minus
                    voluptatibus, accusamus, officiis porro commodi natus, expedita nam molestias magni sunt saepe
                    laboriosam nihil corrupti ab! Lorem, ipsum dolor sit amet consectetunus ex harum nobis consectetur magni
                    quasi voluptates maiores voluptate.</p>
            </div>

            <!-- right col -->
            <div class="col-12  col-md-6">

                <div v-for="(element, i) in progress" :key="i" class="my_progress_container">
                    <div class="text">
                        <span>{{ element.name }}</span>
                        <span>{{ element.progressBar }}</span>
                    </div>
                    <div class="progress my_progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar my_progress_bar" :style="{ width: `${element.progressBar}%` }"></div>
                    </div>
                </div>

                <!-- style="width: 25%" -->

            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.my_container {
    margin-bottom: 130px;
}

h1.big_font {
    font-size: 4rem;
    font-weight: 300;

    em {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-weight: 700;
    }
}

.text {
    padding: 10px;
    display: flex;
    justify-content: space-between
}

.my_progress {
    height: 10px;
}

.my_progress_bar {
    background-color: #F5D8CA;
}
</style>