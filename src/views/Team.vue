<template>
    <div class="container">
        <page-header :name="$t('nav.team')"></page-header>

        <div class="row pb-4 text-center" v-if="team && team.length === 0">
            <div class="col mb-5 text-primary mx-auto">
                <loading></loading>
            </div>
        </div>

        <div v-if="team && team.team">
            <!--<h3 class="mb-4">Strikers</h3>-->
            <div class="row">
                <div class="offset-4"></div>
                <div class="col-2 mb-3" v-for="card in team.team.strikers" v-bind:key="card.tokenId">
                    <card :card="card"></card>
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

            <!--<h3 class="mb-4">Midfield</h3>-->
            <div class="row">
                <div class="offset-2"></div>
                <div class="col-2 mb-3" v-for="card in team.team.midfield" v-bind:key="card.tokenId">
                    <card :card="card"></card>
                </div>
            </div>

            <!--<h3 class="mb-4">Defence</h3>-->
            <div class="row">
                <div class="offset-2"></div>
                <div class="col-2 mb-5" v-for="card in team.team.defence" v-bind:key="card.tokenId">
                    <card :card="card"></card>
                </div>
            </div>

            <!--<h3 class="mb-4">Goalkeeper</h3>-->
            <div class="row">
                <div class="offset-5"></div>
                <div class="col-2">
                    <card :card="team.team.keeper"></card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import { mapState } from 'vuex';
    import PageHeader from '../components/PageHeader';
    import LazyImgLoader from '../components/LazyImgLoader';
    import Loading from '../components/Loading';
    import Card from "../components/Card";

    export default {
        components: {Card, Loading, LazyImgLoader, PageHeader},
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
