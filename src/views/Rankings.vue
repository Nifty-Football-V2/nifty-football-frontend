<template>
    <div>
        <div class="container-fluid">
            <page-title text="Rankings"></page-title>

            <div class="row pb-4 text-center" v-if="rankings && rankings.length === 0">
                <div class="col mb-5 text-primary">
                    <loading></loading>
                </div>
            </div>

            <div v-if="rankings && rankings.length > 0">
                <div class="row">
                    <div class="col mb-3 text-left">
                        <code>You have {{ countMyCards() }} {{ parseInt(countMyCards()) | pluralize('card') }} in the top 50 cards</code>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 col-sm-2 mb-5" v-for="(rank, index) in rankings" v-bind:key="rank.tokenId">
                        <h3 class="text-left">
                            #{{ index + 1 }}
                        </h3>
                        <div class="text-center">
                            <card :card="rank"></card>
                        </div>
                        <div>
                            <img src="../assets/yourCard.svg" v-if="isMine(rank.owner)" style="max-height: 25px"/>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col text-right">
                        <p class="small text-muted">* Rankings updated every 10 mins</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import {mapState} from 'vuex';
    import Loading from '../components/Loading';
    import Card from "../components/Card";
    import PageTitle from '../components/PageTitle';

    export default {
        components: {PageTitle, Card, Loading},
        mixins: [Vue2Filters.mixin],
        data() {
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
        async created() {
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
