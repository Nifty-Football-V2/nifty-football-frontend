<template>
    <div class="card" style="min-height: 280px">
        <div class="card-footer bg-dark m-2">
            <div class="row">
                <div class="col-8 text-light brand">Futball Cards</div>
                <div class="col-4 text-right"><span class="badge badge-primary">{{ card.attributeAvg }}</span></div>
            </div>
        </div>
        <div class="card-body bg-light m-2">
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
    .badge {
        font-size: 1.25rem;
    }

    .brand {
        font-size: 0.75rem;
        letter-spacing: 0.15rem;
    }

    .card-title {
        margin-bottom: 0px;
    }
</style>