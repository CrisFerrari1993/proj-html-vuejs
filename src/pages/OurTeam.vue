<script>

export default {
    name: 'OurTeam',
    data() {
        return {
            teamMembers : [
                {
                    imgPath : 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/team-img-1-1.jpg',
                    memberName : 'Mike Gregg',
                    memberRole : 'Web Design'
                },
                {
                    imgPath : 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/team-img-9-1.jpg',
                    memberName : 'Tabatha Fraser',
                    memberRole : 'Animation'
                },
                {
                    imgPath : 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/team-img-3.jpg',
                    memberName : 'Alisha Selby',
                    memberRole : 'Marketing manager'
                },
                {
                    imgPath : 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/team-img-10-1.jpg',
                    memberName : 'Octavia Scala',
                    memberRole : 'Frontend Developer'
                },
                {
                    imgPath : 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/team-img-11-1.jpg',
                    memberName : 'Scott Scheetz',
                    memberRole : 'Backend Developer'
                },
                {
                    imgPath : 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/team-img-6.jpg',
                    memberName : 'Barbara Thomas',
                    memberRole : 'Graphic Designer'
                },
                {
                    imgPath : 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/team-img-12-1.jpg',
                    memberName : 'Jessie Lee',
                    memberRole : 'Photographer'
                },
                {
                    imgPath : 'https://maree.qodeinteractive.com/wp-content/uploads/2019/05/team-img-8.jpg',
                    memberName : 'Barbara Thomas',
                    memberRole : 'Creative DIrector'
                },
            ]
        }
    }
}
</script>

<template>
    <!-- Team mebers -->
  <div class="my_container">
        <div class="my_row align-items-start">
            <div v-for="(memeber, i) in teamMembers" class="col-12 col-xl-3 col-xxl-3 my_col-box">
                <img class="img_box" :src="memeber.imgPath" alt="">
                <div class="lable">
                    <span class="lable_title">{{ memeber.memberName }}</span>
                    <span class="lable_description">{{ memeber.memberRole }}</span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
@use "../styles/general.scss";
.my_container {
    width: 100%;

    .my_row {
        gap: 0;
        display: flex;
        flex-wrap: wrap;
    }

    .my_col-box {
        position: relative;

        &:hover .lable {
            display: block;
            width: 75%;
        }

        .img_box {
            width: 100%;
        }

        .lable {
            position: absolute;
            top: 70%;
            left: 0;
            padding: 20px;
            background-color: white;
            display: none;
            transform: translate(0%, -50%);

            span {
                display: block;
            }

            .lable_title {
                font-size: 24px;
                margin: 0 auto;
            }

            .lable_description {
                font-size: 18px;
                font-style: oblique;
            }
        }
    }
}
</style>