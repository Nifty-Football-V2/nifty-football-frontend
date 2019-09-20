<template>
    <div class="container-fluid mt-3">
        <page-title text="Rankings"></page-title>

        <div class="row pb-4 text-center" v-if="rankings && rankings.length === 0">
            <div class="col mb-5 text-primary">
                <loading></loading>
            </div>
        </div>

        <div v-if="rankings && rankings.length > 0">
            <div class="row">
                <div class="col mb-3 text-left">
                    <code>
                        You have {{ countMyCards() }} {{ parseInt(countMyCards()) | pluralize('card') }} in the top {{ rankings.length }} cards
                    </code>
                </div>

                <div class="col mb-3 text-right">
                    <a href="#" class="nf-link mr-3" :class="{'nf-link-active': rankingsFilter === null || rankingsFilter === undefined}" @click="setFilter()">ALL</a>
                    <a href="#" class="nf-link mr-3" :class="{'nf-link-active': rankingsFilter === 0}" @click="setFilter(0)">GK</a>
                    <a href="#" class="nf-link mr-3" :class="{'nf-link-active': rankingsFilter === 1}" @click="setFilter(1)">DF</a>
                    <a href="#" class="nf-link mr-3" :class="{'nf-link-active': rankingsFilter === 2}" @click="setFilter(2)">MD</a>
                    <a href="#" class="nf-link mr-3" :class="{'nf-link-active': rankingsFilter === 3}" @click="setFilter(3)">ST</a>
                </div>
            </div>

            <div class="row">
                <div class="col-6 col-lg-2 col-md-3 col-sm-3 mb-2" v-for="(rank, index) in filterBy(rankings, rankingsFilter, 'position')" v-bind:key="rank.tokenId">
                    <h3 class="text-left">
                        #{{ index + 1 }}
                    </h3>
                    <div class="text-center mb-2">
                        <card :card="rank"></card>
                    </div>
                    <div class="text-center mb-2">
                        <img src="../assets/yourCard.svg" v-if="isMine(rank.owner)" style="max-height: 25px"/>
                    </div>
                </div>
            </div>

            <ten-min-warning></ten-min-warning>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import { mapState } from 'vuex';
    import Loading from '../components/Loading';
    import Card from '../components/Card';
    import PageTitle from '../components/PageTitle';
    import _ from 'lodash';
    import TenMinWarning from '../components/TenMinWarning';

    export default {
        components: {TenMinWarning, PageTitle, Card, Loading},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                rankingsFilter: null,
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
            setFilter: function (position) {
                if (!position) {
                    this.rankingsFilter = position;
                    return;
                }
                this.rankingsFilter = position;
            },
            isMine: function (owner) {
                if (!this.ethAccount) return false;

                return owner.toUpperCase() === this.ethAccount.toUpperCase();
            },
            countMyCards: function () {
                if (!this.ethAccount && _.size(this.rankings) > 1) return 0;

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
