<template>
    <div class="container-fluid mb-5">
        <div class="row bg-warning pt-5 pb-5 mb-5">
            <div class="col" v-if="card">
                <card :card="card" style="max-width: 300px" class="mx-auto"></card>
            </div>
        </div>

        <h1 class="text-center">{{ card.fullName }}</h1>

        <div class="row mt-xl">
            <div class="col" v-if="card">
                <span class="card-label">Serial</span><br/>
                <span class="card-stats">#{{ ('00000' + card.tokenId).slice(-6) | uppercase }}</span>
            </div>
            <div class="col" v-if="card">
                <span class="card-label">Position</span><br/>
                <span class="card-stats">{{ card.positionText }}</span>
            </div>
            <div class="col" v-if="card">
                <span class="card-label">Nationality</span><br/>
                <span class="card-stats">{{ card.nationalityText }}</span>
            </div>
        </div>

        <div class="row mt-5 mb-5">
            <div class="col" v-if="card">
                <span class="card-label">Kit</span><br/>
                <span class="card-stats">Two-tone</span>
            </div>
            <div class="col" v-if="card">
                <span class="card-label">Colours</span><br/>
                <span class="card-stats">Clarets</span>
            </div>
            <div class="col" v-if="card">
                <span class="card-label">Ethenicity</span><br/>
                <span class="card-stats">Yorkshire</span>
            </div>
        </div>

        <div class="row mt-xl">
            <div class="col" v-if="card">
                <!--<div class="text-xxl">💯</div>-->
                <div class="card-stats">{{ card.attributeAvg }}</div>
                <div class="card-label">Average</div>
            </div>
            <div class="col" v-if="card">
                <!--<div class="text-xxl">🤹</div>-->
                <div class="card-stats">{{ card.skill }}</div>
                <div class="card-label">Skill</div>
            </div>
            <div class="col" v-if="card">
                <!--<div class="text-xxl">🧠</div>-->
                <div class="card-stats">{{ card.intelligence }}</div>
                <div class="card-label">Intelligence</div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col" v-if="card">
                <!--<div class="text-xxl">💪</div>-->
                <div class="card-stats">{{ card.strength }}</div>
                <div class="card-label">Strength</div>
            </div>
            <div class="col" v-if="card">
                <!--<div class="text-xxl">🏃</div>-->
                <div class="card-stats">{{ card.speed }}</div>
                <div class="card-label">Speed</div>
            </div>
            <div class="col" v-if="card">
                <!--<div class="text-xxl">🏅</div>-->
                <div class="card-stats">{{ card.special ? card.special : 'NA' }}</div>
                <div class="card-label">Special</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Card from '../components/Card';
    import {mapState} from 'vuex';
    import CardsApiService from "../services/api/cardsApi.service";

    export default {
        components: {Card},
        data() {
            return {
                card: null,
            };
        },
        computed: {
            ...mapState(['networkId']),
        },
        methods: {
        },
        async created() {
            console.log(this.$route.params.tokenId, this.networkId);
            const cardsApiService = new CardsApiService(5777);

            this.card = await cardsApiService.loadTokenForTokenId(this.$route.params.tokenId);
        },
    };
</script>

<style lang="scss">
    @import "../colours";

    h1 {
        font-size: 3rem;
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

    .card-label {
        font-size: 1rem;
        color: $primary;
    }

    .card-stats {
        font-family: 'Bungee Inline', cursive;
        font-size: 1.5rem;
        color: $white;
    }

    .text-xxl {
       font-size: 4rem !important
    }

    .mt-xl {
        margin-top: 9rem !important
    }
</style>
