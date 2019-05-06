<template>
    <div class="container-fluid">
        <div class="row pb-4 text-center" v-if="team && team.length === 0">
            <div class="col mb-5 text-primary mx-auto">
                <loading></loading>
            </div>
        </div>

        <page-title text="Best Team"></page-title>

        <div v-if="team && team.team">
            <div class="row m-0 p-0">
                <div class="offset-4"></div>
                <div class="col-4 text-center">
                    <team-title text="Strikers" variant="orange"></team-title>
                </div>
            </div>
            <div class="row mb-4">
                <div class="offset-4"></div>
                <div class="col-2 bg-light p-3" v-for="card in team.team.strikers" v-bind:key="card.tokenId ? card.tokenId : Math.random()">
                    <card :card="card" v-if="card.tokenId"></card>
                    <img src="../assets/missing-card.svg" v-else/>
                </div>
                <div class="offset-2"></div>
                <div class="col-2">
                    <div v-if="team && team.team">
                        <font-awesome-icon :icon="['fas', 'chart-bar']" size="2x" class="text-primary"/>
                        <div class="card-stats-lg">{{ team.squadAverage }}</div>
                        <div class="card-label-sm">Average</div>
                    </div>
                </div>
            </div>

            <div class="row m-0 p-0">
                <div class="offset-4"></div>
                <div class="col-4 text-center">
                    <team-title text="Midfield" variant="blue"></team-title>
                </div>
            </div>
            <div class="row mb-4">
                <div class="offset-2"></div>
                <div class="col-2 bg-light p-3" v-for="card in team.team.midfield" v-bind:key="card.tokenId ? card.tokenId : Math.random()">
                    <card :card="card" v-if="card.tokenId"></card>
                    <img src="../assets/missing-card.svg" v-else/>
                </div>
            </div>

            <div class="row m-0 p-0">
                <div class="offset-4"></div>
                <div class="col-4 text-center">
                    <team-title text="Defence" variant="orange"></team-title>
                </div>
            </div>
            <div class="row mb-4">
                <div class="offset-2"></div>
                <div class="col-2 bg-light p-3" v-for="card in team.team.defence" v-bind:key="card.tokenId ? card.tokenId : Math.random()">
                    <card :card="card" v-if="card.tokenId"></card>
                    <img src="../assets/missing-card.svg" v-else/>
                </div>
            </div>

            <div class="row m-0 p-0">
                <div class="offset-4"></div>
                <div class="col-4 text-center">
                    <team-title text="Goalkeeper" variant="blue"></team-title>
                </div>
            </div>
            <div class="row">
                <div class="offset-5"></div>
                <div class="col-2 bg-light p-3" v-for="card in team.team.goalkeepers" v-bind:key="card.tokenId ? card.tokenId : Math.random()">
                    <card :card="card" v-if="card.tokenId"></card>
                    <img src="../assets/missing-card.svg" v-else/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import { mapState } from 'vuex';
    import Loading from '../components/Loading';
    import Card from "../components/Card";
    import NiftyFootballHeader from '../components/NiftyFootballHeader';
    import PageTitle from '../components/PageTitle';
    import PageSubTitle from '../components/PageSubTitle';
    import TeamTitle from '../components/TeamTitle';

    export default {
        components: {TeamTitle, PageSubTitle, PageTitle, NiftyFootballHeader, Card, Loading},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                nickname: null,
                team: null,
            };
        },
        computed: {
            ...mapState([
                'cardsApiService',
                'ethAccount',
            ]),
        },
        methods: {
            editEthAccountName () {
                this.nickname = `Real Madras`;
            },
            dotDotDot: function (ethAccount) {
                if (ethAccount && ethAccount.startsWith(`0x`)) {
                    return ethAccount.substr(0, 4) + '...' + ethAccount.substr(ethAccount.length - 4, ethAccount.length);
                }
                return ethAccount;
            },
        },
        async created () {
            const loadTeam = async () => {
                this.cardsApiService.loadTeam(this.ethAccount).then((team) => {
                    this.team = team;
                });
            };

            this.$store.watch(
                () => this.cardsApiService.network,
                () => loadTeam()
            );

            if (this.cardsApiService.network) {
                loadTeam();
            }
        },
    };
</script>

<style lang="scss">
    @import "../colours";

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
</style>
