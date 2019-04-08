<template>
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.rankings') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row pb-4 text-center" v-if="rankings && rankings.length === 0">
            <div class="col mb-5 text-primary">
                <font-awesome-icon icon="futbol" size="6x" spin class="m-5"/>
            </div>
        </div>

        <div class="row" v-if="rankings && rankings.length > 0">
            <div class="col-3 mb-5" v-for="(rank, index) in rankings" v-bind:key="rank.tokenId">
                <h1 class="text-left">#{{ index + 1 }}</h1>
                <lazy-img-loader :src="rank.tokenId" :id="rank.tokenId"></lazy-img-loader>
            </div>
        </div>

        <div class="row" v-if="rankings && rankings.length > 0">
            <div class="col text-right">
                <p class="small">Rankings updated every 10 mins</p>
            </div>
        </div>


        <!--<div v-if="squad && order === 'team'">-->
        <!--<div class="row mb-5" v-for="(team, index) in teamArray" v-bind:key="team[0]">-->
        <!--<div class="col-4 text-right">-->
        <!--<h1>{{ index + 1 }}</h1>-->
        <!--</div>-->
        <!--<div class="col-4 text-right">-->
        <!--<h4>{{ team[0] }}</h4>-->
        <!--</div>-->
        <!--<div class="col-4 text-left">-->
        <!--<span class="numberCircle">{{ team[1] }}</span>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->

    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import { mapState } from 'vuex';
    import LazyImgLoader from '../components/LazyImgLoader';

    export default {
        components: {LazyImgLoader},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                order: 'attributeAvg',
                teamArray: [['Ell\'s Angels', 93], ['Real Madras', 91], ['Athletico Berlin', 86], ['Super Reds', 86], ['Yellow Submarine', 84]],
                rankings: [],
            };
        },
        computed: {
            ...mapState([
                'cardsApiService'
            ]),
        },
        methods: {
            setOrder: function (field) {
                return this.order ? this.order = field : this.order;
            },
        },
        async created () {
            const loadRankings = async () => {
                this.cardsApiService.loadRankings().then((rankings) => {
                    this.rankings = rankings;
                });
            };

            this.$store.watch(
                () => this.cardsApiService.network,
                () => loadRankings()
            );

            if (this.cardsApiService.network) {
                loadRankings();
            }
        },
    };
</script>

<style lang="scss">
    @import "../colours";

    .numberCircle {
        font-size: 1.3rem;
        border-radius: 50%;

        width: 45px;
        height: 45px;
        padding: 10px;

        background: $tertiary;
        border: 2px solid $primary;
        color: $secondary;
        text-align: center;
    }
</style>
