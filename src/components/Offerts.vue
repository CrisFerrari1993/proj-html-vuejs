<!-- questo componente è quello dove sulla sinistra c'è una ragazza con i capelli rossi e le cuffie gialle e sulla destra le voci animation, design, lettering -->
<script>
export default {
    name: 'Offerts',
    data() {
        return {
            offersList: [
                {
                    name: 'ANIMATION',
                    content: 'Hinc assum pro ea. Meis verear an vel, ex quando legere scriptorem has, mea vide vidisse an. Eius eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumes democritum per te. Ex mei illud illum laudem, quem bonorum ius ne. His an omnes propriae fabellas, an duo aeterno expetenda explicari, ea vix propriae deseruisse. Munere utamur vertere.'
                },
                {
                    name: 'DESIGN',
                    content: 'Integre appareat cu mea, te mel ferri percipitur efficiendi, in ius phaedrum invenire expetendis. Eius eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumes democritum per te. Ex mei illud illum laudem, quem bonorum ius ne. His an omnes propriae fabellas, an duo aeterno expetenda explicari, ea vix propriae deseruisse. Inani expetendis ut cum.'
                },
                {
                    name: 'LETTERING',
                    content: 'Te sale iusto fabellas sed, eu sea tollit suscipiantur. Oblique omnesque ne eum, id putent malorum admodum vel, vix no tantas admodum nominavi. Eius eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumes democritum per te. Ex mei illud illum laudem, quem bonorum ius ne. His an omnes propriae fabellas, an duo aeterno expetend.'
                },
            ],
            activeItem: 0,
        }
    },
    methods: {
        select(index) {
            this.activeItem = index;
            console.log('Selected index:', index);
        },
    }
}
</script>

<template>
    <div class="container my_container">
        <div class="row">
            <div class="col col-lg-6 col-md-12">
                <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/what-we-offer-img-1.jpg" alt="">
            </div>
            <div class="col col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column right-col">
                <ul class="d-flex justify-content-between">
                    <li :class="{ 'active': activeItem === i }" v-for="(offer, i) in offersList" :key="i"
                        @click="select(i)">
                        <a>
                            {{ offer.name }}
                        </a>
                    </li>
                </ul>
                <div class="info-container">
                    <div v-if="activeItem !== null">
                        <p>{{ offersList[activeItem].content }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.my_container {
    margin-top: 150px;
    margin-bottom: 150px;
}

.row {
    display: flex;
    justify-content: center;
}

img {
    width: 100%;
}

ul {
    list-style-type: none;
    width: 90%;
    text-align: center;

    li {
        padding: 10px 0;
        border-bottom: 3px solid #ededed;
        width: calc((100% / 3));

        a {
            text-decoration: none;
            color: black;
            cursor: pointer;
        }
    }
}

.active {
    border-bottom: 4px solid #f5d8ca;
}

.info-container {
    min-height: 200px;
    width: 80%;
    margin-top: 20px;

    p {
        color: #6d6d6d;
        font-weight: 400;
    }
}

@media all and (max-width: 991px) {

    .right-col {
        width: 100%;
        margin-top: 80px;
        margin-bottom: 60px;

        a {
            letter-spacing: .25em;
            font-size: 13px;
            font-weight: bold;
        }
    }
}
</style>
intro