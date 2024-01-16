<script>
export default {
    name: 'AppContacts'
}
</script>

<template>
    <div class="appcontacts_container">
        <div class="txt-container">
            <h1>
                Want to work with us? Send us
                <em>a message!</em>
            </h1>
            <span class="d-block pt-4 fs-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sit libero pariatur facere assumenda molestiae
                consectetur, officia, optio quod iusto fuga voluptatem quas fugit tenetur.
            </span>
            <button class="mt-4" type="button">
                <a href="#">
                    <b>CONTACT</b>
                </a>
            </button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.appcontacts_container {
    width: 100%;
    background-image: url(https://maree.qodeinteractive.com/wp-content/uploads/2019/05/h-2-background-1.jpg?id=589);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 150px;
    padding-top: 150px;

    .txt-container {
        width: 85%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: flex;


        h1 {
            font-size: 65px;
            text-align: center;

            em {
                font-weight: bolder;
            }
        }

        span {
            color: grey;
            text-align: center;
        }

        button {
            background-color: #c0e1cf;
            padding: 17px 70px;
            border: none;
            font-size: 13px;

            a {
                text-decoration: none;
                color: black;
            }
        }

    }


}
</style>
