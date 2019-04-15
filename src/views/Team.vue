<template>
    <div class="container">
        <page-header :name="$t('nav.team')"></page-header>

        <div class="row pb-4 text-center" v-if="team && team.length === 0">
            <div class="col mb-5 text-primary mx-auto">
                <loading></loading>
            </div>
        </div>

        <div class="row" v-if="ethAccount">
            <div class="col text-left">
                <strong>{{ nickname || dotDotDot(ethAccount) }}</strong>
                <!--<a href="#" @click="editEthAccountName" class="edit">{{ $t('common.edit') }}</a>-->
            </div>
            <div class="col text-right">
                <h1 class="mb-3" v-if="team">{{ team.squadAverage }}</h1>
            </div>
        </div>

        <div v-if="team && team.team">
            <h3 class="mb-4">Strikers</h3>
            <div class="row" >
                <div class="col-3  mb-5" v-for="card in team.team.strikers" v-bind:key="card.tokenId">
                    <lazy-img-loader :src="card.tokenId" :id="card.tokenId"></lazy-img-loader>
                </div>
            </div>

            <h3 class="mb-4">Midfield</h3>
            <div class="row">
                <div class="col-3  mb-5" v-for="card in team.team.midfield" v-bind:key="card.tokenId">
                    <lazy-img-loader :src="card.tokenId" :id="card.tokenId"></lazy-img-loader>
                </div>
            </div>

            <h3 class="mb-4">Defence</h3>
            <div class="row">
                <div class="col-3  mb-5" v-for="card in team.team.defence" v-bind:key="card.tokenId">
                    <lazy-img-loader :src="card.tokenId" :id="card.tokenId"></lazy-img-loader>
                </div>
            </div>

            <h3 class="mb-4">Goalkeeper</h3>
            <div class="row">
                <div class="col-3">
                    <lazy-img-loader :src="team.team.keeper.tokenId" :id="team.team.keeper.tokenId"></lazy-img-loader>
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

    export default {
        components: {Loading, LazyImgLoader, PageHeader},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                nickname: null,
                team: [],
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
                () => this.cardsApiService && this.ethAccount,
                () => loadTeam()
            );

            if (this.cardsApiService && this.ethAccount) {
                loadTeam();
            }
        },
    };
</script>

<style lang="scss">
</style>
