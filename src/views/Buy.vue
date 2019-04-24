<template>
    <div>
        <network-web3-banner></network-web3-banner>
        <div class="container">
            <page-header :name="``"></page-header>

            <div class="row pb-4 text-center"
                 v-if="buyState === 'mining' || (buyState === 'confirmed' && cards && cards.length === 0)">
                <div class="col mb-5 text-primary">
                    <loading></loading>
                </div>
            </div>

            <div class="row pb-4 text-center" v-show="cards && cards.length > 0 && buyState === 'confirmed'">
                <div class="col-12 col-md-3 mb-5" v-for="card in cards" v-bind:key="card.tokenId">
                    <buy-player-flip-image :token-id="card.tokenId" v-bind:key="1" :reveal-all="revealAll"></buy-player-flip-image>
                </div>
            </div>
            
            <div class="row pb-4 text-center" v-show="cards && cards.length > 0 && buyState === 'confirmed'">
                <div class="col mb-5">
                    <b-button variant="outline-primary" size="lg" @click="showAllCards()">Reveal</b-button>
                    <b-button variant="outline-primary" size="lg" @click="setState('idle')">Buy more?</b-button>
                </div>
            </div>

            <div class="row" v-if="buyState === 'idle'">
                <div class="col text-center">

                    <b-dropdown split @click="buyCard(3)" text="Buy Pack" class="mt-5" variant="secondary" size="lg"
                                :disabled="!packPrices">
                        <b-dropdown-item href="#" @click="buyCard(1)">Buy 1 Card</b-dropdown-item>
                        <b-dropdown-item href="#" @click="buyCard(3)">Buy 1 Pack</b-dropdown-item>
                        <b-dropdown-item href="#" @click="buyCard(6)">Buy 2 Packs</b-dropdown-item>
                    </b-dropdown>
                    <div class="small">1 pack is 3 cards</div>
                </div>
            </div>
            <div class="row" v-if="buyState === 'idle'">
                <div class="col text-right mr-5">
                    <div class="mt-5 text-muted small ">
                        <div v-for="(price, num) in packPrices" v-bind:key="num">
                            {{ num }} {{ parseInt(num) | pluralize('Card') }} for {{ price | toEth }} ETH
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { mapState } from 'vuex';
    import NotificationService from '../services/notification.service';
    import _ from 'lodash';

    import LazyImgLoader from '../components/LazyImgLoader';
    import NetworkWeb3Banner from '../components/NetworkWeb3Banner';
    import Loading from '../components/Loading';
    import PageHeader from '../components/PageHeader';
    import BuyPlayerImage from '../components/BuyPlayerImage';
    import BuyPlayerFlipImage from '../components/BuyPlayerFlipImage';

    export default {
        components: {BuyPlayerFlipImage, BuyPlayerImage, PageHeader, Loading, NetworkWeb3Banner, LazyImgLoader},
        data () {
            return {
                packPrices: {},
                buyState: 'idle',
                cards: [],
                revealAll: false
            };
        },
        computed: {
            ...mapState([
                'ethAccount',
                'blindPackService',
                'cardsApiService',
                'rankings',
            ]),
        },
        methods: {
            buyCard: async function (num) {

                this.buyState = 'mining';

                const notificationService = new NotificationService();

                notificationService.showPurchaseNotification();

                // wait for tx to be mined
                let tx = await this.blindPackService.buyBlindPack(num);

                // console.log(tx);

                notificationService.showProcessingNotification();

                await tx.wait(1);

                const txRes = await this.cardsApiService.loadTokensForTx(tx.hash);
                this.cards = txRes.cards;

                // // for local DEMO purposes!!!
                // function sleep (ms) {
                //     return new Promise(resolve => setTimeout(resolve, ms));
                // }
                //
                // await sleep(1000);

                this.buyState = 'confirmed';

                notificationService.showConfirmedNotification();
            },
            setState (state) {
                this.buyState = state;
                this.revealAll = false;
            },
            showAllCards () {
                this.revealAll = true;
            }
        },
        async created () {
            const loadData = async () => {
                this.packPrices = await this.blindPackService.getPriceModel();
            };

            this.$store.watch(
                () => this.$store.state.blindPackService,
                () => loadData()
            );

            if (this.$store.state.blindPackService) {
                await loadData();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .btn-xxl {
        padding: 20px 26px;
        font-size: 35px;
        border-radius: 8px;
    }
</style>
