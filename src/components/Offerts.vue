<!-- questo componente è quello dove sulla sinistra c'è una ragazza con i capelli rossi e le cuffie gialle e sulla destra le voci animation, design, lettering -->
<script>
export default {
    name: 'Offerts'
}
</script>

<template>
    <div class="container my_container">
        <div class="row">
            <div class="col-12  col-md-6">
                <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/what-we-offer-img-1.jpg" alt="">
            </div>
            <div class="col-12  col-md-6 d-flex align-items-center justify-content-center">
                <span>Bootstrap element</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 100%;
}

.my_container {
    margin-top: 130px;
    margin-bottom: 130px;
}
</style>
