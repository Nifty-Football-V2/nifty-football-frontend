<template>
    <div class="container-fluid mb-5 text-center" v-if="card">

        <div class="row pb-4 text-center" v-if="!card">
            <div class="col mb-5 text-primary">
                <loading></loading>
            </div>
        </div>


        <div class="row bg-secondary pt-3 pb-5 mb-5">
            <div class="col">
                <router-link to="/squad">
                    <font-awesome-icon :icon="['fas', 'arrow-left']" size="3x" class="text-primary float-left"/>
                </router-link>
            </div>
            <div class="col">
                <lazy-img-loader :src="card.tokenId" :id="card.tokenId" style="max-width: 300px;"></lazy-img-loader>
            </div>
            <div class="col">
                &nbsp;
            </div>
        </div>

        <!--<h1 class="text-center">{{ card.fullName }}</h1>-->

        <div class="row mt-xl">
            <div class="col">
                <font-awesome-icon :icon="['fas', 'chart-bar']" size="2x" class="text-primary"/>
                <div class="card-stats-lg">{{ card.attributeAvg }}</div>
                <div class="card-label-sm">Average</div>
            </div>
            <div class="col">
                <font-awesome-icon :icon="['fas', 'futbol']" size="2x" class="text-primary"/>
                <div class="card-stats-lg">{{ card.skill }}</div>
                <div class="card-label-sm">Skill</div>
            </div>
            <div class="col">
                <font-awesome-icon :icon="['fas', 'lightbulb']" size="2x" class="text-primary"/>
                <div class="card-stats-lg">{{ card.intelligence }}</div>
                <div class="card-label-sm">Intelligence</div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <font-awesome-icon :icon="['fas', 'dumbbell']" size="2x" class="text-primary"/>
                <div class="card-stats-lg">{{ card.strength }}</div>
                <div class="card-label-sm">Strength</div>
            </div>
            <div class="col">
                <font-awesome-icon :icon="['fas', 'running']" size="2x" class="text-primary"/>
                <div class="card-stats-lg">{{ card.speed }}</div>
                <div class="card-label-sm">Speed</div>
            </div>
            <div class="col">
                <font-awesome-icon :icon="['fas', 'magic']" size="2x" class="text-primary"/>
                <div class="card-stats-lg">?</div>
                <div class="card-label-sm">Special</div>
            </div>
        </div>

        <div class="row mt-xl">
            <div class="col">
                <span class="card-label-sm">Serial</span><br/>
                <span class="card-stats">#{{ ('0000000' + card.tokenId).slice(-8) | uppercase }}</span>
            </div>
            <div class="col">
                <span class="card-label-sm">Position</span><br/>
                <span class="card-stats">{{ card.positionText }}</span>
            </div>
        </div>

        <div class="row mt-3 mb-3">
            <div class="col">
                <span class="card-label-sm">Nationality</span><br/>
                <span class="card-stats">{{ card.nationalityText }}</span>
            </div>
            <div class="col">
                <span class="card-label-sm">Kit</span><br/>
                <span class="card-stats">{{ card.kitText }}</span>
            </div>
        </div>

        <div class="row mt-3 mb-3">
            <div class="col">
                <span class="card-label-sm">Colours</span><br/>
                <span class="card-stats">{{ card.colourText }}</span>
            </div>
            <div class="col">
                <span class="card-label-sm">Ethnicity</span><br/>
                <span class="card-stats">{{ card.ethincityText }}</span>
            </div>
        </div>

    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import LazyImgLoader from '../components/LazyImgLoader';

    export default {
        components: {LazyImgLoader},
        data () {
            return {
                card: null,
            };
        },
        computed: {
            ...mapState([
                'cardsApiService'
            ]),
        },
        methods: {},
        async created () {
            this.card = await this.cardsApiService.loadTokenForTokenId(this.$route.params.tokenId);
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
        color: gray;
    }

    .card-label-sm {
        font-size: .85rem;
        color: gray;
    }

    .card-stats {
        font-family: 'Anton', cursive;
        font-size: 2rem;
        color: $black;
    }

    .card-stats-lg {
        font-family: 'Anton', cursive;
        font-size: 3.5rem;
        color: $black;
    }

    .mt-xl {
        margin-top: 7rem !important
    }
</style>
