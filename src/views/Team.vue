<template>
    <div class="container-fluid mt-3">
        <div class="row text-center">
            <div class="col-sm-4 col-12">&nbsp;</div>
            <div class="col-sm-4 col-12">
                <page-title text="Best Team"></page-title>
            </div>
            <div class="col-sm-4 col-12">
                <div v-if="team && team.team && team.squadAverage && team.squadAverage > 0">
                    <scoreboard :score="team.squadAverage"></scoreboard>
                </div>
            </div>
        </div>

        <div class="row pb-4 text-center" v-if="!team">
            <div class="col mb-5 text-primary mx-auto">
                <loading></loading>
            </div>
        </div>

        <div v-if="team && team.team && !team.hasEmptySquad">
            <div class="row m-0 p-0">
                <div class="offset-sm-4"></div>
                <div class="col-12 col-sm-4 text-center">
                    <team-title text="Strikers" variant="orange"></team-title>
                </div>
            </div>
            <div class="row mb-4">
                <div class="offset-sm-4"></div>
                <div class="col-6 col-sm-2 bg-light p-3 border-bottom-orange" v-for="card in team.team.strikers"
                     v-bind:key="card.tokenId ? card.tokenId : Math.random()">
                    <card :card="card" v-if="card.tokenId"></card>
                    <img src="../assets/missing-card.svg" v-else/>
                </div>
                <div class="offset-2"></div>
                <div class="col-2">
                </div>
            </div>

            <div class="row m-0 p-0">
                <div class="offset-sm-4"></div>
                <div class="col-12 col-sm-4 text-center">
                    <team-title text="Midfield" variant="blue"></team-title>
                </div>
            </div>
            <div class="row mb-4">
                <div class="offset-sm-2"></div>
                <div class="col-6 col-sm-2 bg-light p-3 border-bottom-blue" v-for="card in team.team.midfield"
                     v-bind:key="card.tokenId ? card.tokenId : Math.random()">
                    <card :card="card" v-if="card.tokenId"></card>
                    <img src="../assets/missing-card.svg" v-else/>
                </div>
            </div>

            <div class="row m-0 p-0">
                <div class="offset-sm-4"></div>
                <div class="col-12 col-sm-4 text-center">
                    <team-title text="Defence" variant="purple"></team-title>
                </div>
            </div>
            <div class="row mb-4">
                <div class="offset-sm-2"></div>
                <div class="col-6 col-sm-2 bg-light p-3 border-bottom-purple" v-for="card in team.team.defence"
                     v-bind:key="card.tokenId ? card.tokenId : Math.random()">
                    <card :card="card" v-if="card.tokenId"></card>
                    <img src="../assets/missing-card.svg" v-else/>
                </div>
            </div>

            <div class="row m-0 p-0">
                <div class="offset-sm-4"></div>
                <div class="col-12 col-sm-4 text-center">
                    <team-title text="Goalkeeper" variant="lime"></team-title>
                </div>
            </div>
            <div class="row mb-4">
                <div class="offset-3 offset-sm-5"></div>
                <div class="col-6 col-sm-2 bg-light p-3 border-bottom-lime" v-for="card in team.team.goalkeepers"
                     v-bind:key="card.tokenId ? card.tokenId : Math.random()">
                    <card :card="card" v-if="card.tokenId"></card>
                    <img src="../assets/missing-card.svg" v-else/>
                </div>
            </div>
        </div>

        <div v-else-if="team && team.team && team.hasEmptySquad">
            <no-squad></no-squad>
        </div>

        <div class="row">
            <div class="col text-right mr-2">
                <p class="small text-muted">* Team updated every 10 mins</p>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import {mapState} from 'vuex';
    import Loading from '../components/Loading';
    import Card from '../components/Card';
    import PageTitle from '../components/PageTitle';
    import TeamTitle from '../components/TeamTitle';
    import Scoreboard from '../components/Scoreboard';
    import NoSquad from '../components/NoSquad';

    export default {
        components: {NoSquad, Scoreboard, TeamTitle, PageTitle, Card, Loading},
        mixins: [Vue2Filters.mixin],
        data() {
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
            dotDotDot: function (ethAccount) {
                if (ethAccount && ethAccount.startsWith(`0x`)) {
                    return ethAccount.substr(0, 4) + '...' + ethAccount.substr(ethAccount.length - 4, ethAccount.length);
                }
                return ethAccount;
            },
        },
        async created() {
            const loadTeam = () => {
                if (this.ethAccount) {
                    this.cardsApiService.loadTeam(this.ethAccount)
                        .then((team) => {
                            this.team = team;
                        });
                }
            };

            this.$store.watch(
                () => this.ethAccount,
                () => loadTeam()
            );

            this.$store.watch(
                () => this.cardsApiService.network,
                () => loadTeam()
            );

            if (this.ethAccount && this.cardsApiService.network) {
                loadTeam();
            }

            this.$store.dispatch('lazyLoadWeb3');
        },
    };
</script>

<style lang="scss" scoped>
    @import "../colours";

    .border-bottom-orange {
        border-bottom: 2px solid $orange;
    }

    .border-bottom-blue {
        border-bottom: 2px solid $blue;
    }

    .border-bottom-purple {
        border-bottom: 2px solid $purple;
    }

    .border-bottom-lime {
        border-bottom: 2px solid $lime;
    }
</style>
