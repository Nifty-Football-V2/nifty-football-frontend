<template>
    <div>
        <network-web3-banner></network-web3-banner>
        <div class="container">
            <div class="row pb-4">
                <div class="col">
                </div>
                <div class="col">
                    <img src="../assets/logo.svg" style="max-height: 75px" class="mt-3 mb-3"/>
                </div>
                <div class="col">
                    <h2 class="mt-3 text-right">{{ $t('nav.rankings') }}</h2>
                </div>
            </div>

            <div class="row pb-4 text-center" v-if="rankings && rankings.length === 0">
                <div class="col mb-5 text-primary">
                    <loading></loading>
                </div>
            </div>

            <div class="row" v-if="rankings && rankings.length > 0">
                <div class="col mb-3 text-left">
                    <code>You have {{ countMyCards() }} {{ parseInt(countMyCards()) | pluralize('card') }} in the top 50 cards by average attribute value</code>
                </div>
            </div>

            <div class="row" v-if="rankings && rankings.length > 0">
                <div class="col-3 mb-5" v-for="(rank, index) in rankings" v-bind:key="rank.tokenId">
                    <h3 class="text-left">#{{ index + 1 }}</h3>
                    <div class="text-center">
                        <lazy-img-loader :src="rank.tokenId" :id="rank.tokenId"></lazy-img-loader>
                        <code v-if="isMine(rank.owner)">* MY TRADING CARD *</code>
                    </div>
                </div>
            </div>

            <div class="row" v-if="rankings && rankings.length > 0">
                <div class="col text-right">
                    <p class="small">Rankings updated every 10 mins</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import { mapState } from 'vuex';
    import LazyImgLoader from '../components/LazyImgLoader';
    import NetworkWeb3Banner from '../components/NetworkWeb3Banner';
    import Loading from '../components/Loading';

    export default {
        components: {Loading, NetworkWeb3Banner, LazyImgLoader},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                rankings: [],
            };
        },
        computed: {
            ...mapState([
                'cardsApiService',
                'ethAccount',
            ]),
        },
        methods: {
            setOrder: function (field) {
                return this.order ? this.order = field : this.order;
            },
            isMine: function (owner) {
                if (!this.ethAccount) return false;

                return owner.toUpperCase() === this.ethAccount.toUpperCase();
            },
            countMyCards: function () {
                if (!this.ethAccount && !this.rankings) return 0;

                return this.rankings.filter(ranking => ranking.owner.toUpperCase() === this.ethAccount.toUpperCase()).length;
            }
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
