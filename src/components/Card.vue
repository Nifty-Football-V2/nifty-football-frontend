<template>
    <div class="card" style="min-height: 280px">
        <div class="card-footer bg-dark m-2">
            <div class="row">
                <div class="col-8 text-light brand">Futball Cards</div>
                <div class="col-4 text-right">
                </div>
            </div>
        </div>
        <div class="card-body bg-light m-2">
            <div class="attribute-holder">
                <span class="numberCircle">{{ card.attributeAvg }}</span>
            </div>
            <img :src="`http://localhost:5000/futbol-cards/us-central1/api/network/5777/image/${card.tokenId}`" style="max-width: 100px;" class="mx-auto m-3"/>
        </div>
        <div class="card-body bg-dark m-2">
            <h5 class="card-title text-light">{{ card.fullName | uppercase }}</h5>
        </div>
        <div class="card-footer">
            <small class="text-muted">{{ card.positionText }}</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: ['card'],
    };
</script>

<style lang="scss">
    @import "../colours";

    .attribute-holder {
        position: absolute;
        right: 10px;
        top: 65px
    }

    .numberCircle {
        font-size: 1.3rem;
        border-radius: 50%;

        width: 45px;
        height: 45px;
        padding: 10px;

        background: $body-bg;
        border: 2px solid $primary;
        color: $secondary;
        text-align: center;
    }

    .brand {
        font-size: 0.85rem;
        letter-spacing: 0.15rem;
    }

    .card-title {
        margin-bottom: 0px;
    }
</style>