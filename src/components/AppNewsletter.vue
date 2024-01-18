<script>
export default {
    name: 'AppNewsletter'
}
</script>

<template>
    <h1>Newsletter</h1>
    <div class="container">
        <div class="txt-container">
            <h2>Subscribe to our
                <span>newsletter</span>
            </h2>
            <div class="form-container">
                <input type="text" placeholder="Your E-mail">
                <button>SEND</button>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container {
    width: 90%;
    background-image: url(https://maree.qodeinteractive.com/wp-content/uploads/2019/05/what-we-offer-background-img-2.jpg?id=1659);
    display: flex;
    align-items: center;
    justify-content: center;
    // debug
    min-height: 400px;

    .txt-container {
        width: 90%;
        text-align: center;

        h2 {
            font-size: 50px;

            span {
                font-weight: bold;
                font-style: italic;
            }
        }

        .form-container {
            width: 90%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin: 0 auto;

            input {
                width: 70%;
                margin-right: 15px;
                padding: 11px 21px 12px;
                min-height: 60px;
                margin-top: 20px;
                border: 3px solid #f5d8ca;
                background: none;
            }

            button {
                font-size: 13px;
                padding: 16px 73px;
                margin-top: 20px;
                background-color: #d8f0e3;
                border: none;
                letter-spacing: .25em;
                font-weight: bold;
            }
        }
    }

}
</style>