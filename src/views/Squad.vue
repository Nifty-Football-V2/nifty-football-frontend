<template>
    <div>
        <network-web3-banner></network-web3-banner>
        <div class="container">
            <page-header :name="$t('nav.account')"></page-header>

            <div class="row pb-4 text-center" v-if="!squad">
                <div class="col mb-5 text-primary mx-auto">
                    <loading></loading>
                </div>
            </div>
            <div class="row pb-4 text-center" v-else-if="squad && squad.length === 0">
                <div class="col mb-5 text-primary mx-auto">
                    {{ $t('common.missing_squad_message') }}
                    <router-link to="/buy" class="nav-link">{{ $t('nav.buy') }}</router-link>
                </div>
            </div>

            <div class="row" v-if="ethAccount && (squad && squad.length > 0)">
                <div class="col mb-2 text-left">
                    <squad-name></squad-name>
                </div>
            </div>

            <div class="row mt-3" v-if="squad">
                <div class="col-6 col-md-2 mb-5" style="min-height: 250px;" v-for="tokenId in squad"
                     v-bind:key="tokenId">
                    <vue-flip :active-click="true" width="100%" height="100%">
                        <div slot="front">
                            <lazy-img-loader :src="tokenId" :id="tokenId"></lazy-img-loader>
                        </div>
                        <div slot="back">
                            <div v-if="cards">
                                <card-back :card="cards[tokenId]"></card-back>
                            </div>
                            <div v-else>
                                <img src="../assets/holding.svg"/>
                            </div>
                        </div>
                    </vue-flip>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VueFlip from 'vue-flip';
    import Vue2Filters from 'vue2-filters';
    import {mapState} from 'vuex';
    import LazyImgLoader from '../components/LazyImgLoader';
    import Loading from '../components/Loading';
    import NetworkWeb3Banner from '../components/NetworkWeb3Banner';
    import PageHeader from '../components/PageHeader';
    import CardBack from '../components/CardBack';
    import SquadName from "../components/SquadName";

    export default {
        components: {SquadName, CardBack, PageHeader, NetworkWeb3Banner, Loading, LazyImgLoader, VueFlip},
        mixins: [Vue2Filters.mixin],
        data() {
            return {
                order: 'position',
            };
        },
        computed: {
            ...mapState([
                'squad',
                'cards',
                'ethAccount'
            ]),
        },
        methods: {
            setOrder: function (field) {
                return this.order ? this.order = field : this.order;
            },
        },
        created() {
            const loadSquad = () => {
                this.$store.dispatch('loadSquad');
            };

            this.$store.watch(
                () => this.ethAccount,
                () => loadSquad()
            );

            if (this.ethAccount) {
                loadSquad();
            }
        }
    };
</script>

<style lang="scss">
    .edit {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        padding-left: 15px;
    }
</style>
