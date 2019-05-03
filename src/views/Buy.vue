<template>
    <div>
        <network-web3-banner></network-web3-banner>
        <div class="container-fluid">
            <nifty-football-header></nifty-football-header>

            <page-title text="Buy Packs" @click="setState('idle')"></page-title>

            <div class="row pb-4 text-center"
                 v-if="buyState === 'mining' || (buyState === 'confirmed' && cards && cards.length === 0)">
                <div class="col mb-5 text-primary">
                    <loading></loading>
                </div>
            </div>

            <div class="row pb-4 text-center" v-show="cards && cards.length > 0 && buyState === 'confirmed'">
                <div class="col-6 col-md-2 mb-5" v-for="card in cards" v-bind:key="card.tokenId">
                    <buy-player-reveal :card="card"></buy-player-reveal>
                </div>
            </div>

            <div class="row" v-if="buyState === 'idle'">
                <div class="col-lg"></div>
                <div class="col text-center">
                    <div class="buy-container bg-light pb-5">
                        <div class="ml-4 mr-4">
                            <page-sub-title text="Regular" variant="orange"></page-sub-title>

                            <div class="row m-2">
                                <div class="col"></div>
                                <div class="col-8 buy-button" @click="setPackType('reg-1')" :class="{'buy-button-active': packType === 'reg-1'}">1 Pack</div>
                                <div class="col"></div>
                            </div>
                            <div class="row m-2">
                                <div class="col"></div>
                                <div class="col-8 buy-button" @click="setPackType('reg-2')" :class="{'buy-button-active': packType === 'reg-2'}">2 Packs</div>
                                <div class="col"></div>
                            </div>
                            <div class="row m-2">
                                <div class="col"></div>
                                <div class="col-8 buy-button" @click="setPackType('reg-3')" :class="{'buy-button-active': packType === 'reg-3'}">3 Packs</div>
                                <div class="col"></div>
                            </div>

                            <div class="row mt-5">
                                <div class="col-2"></div>
                                <div class="col price-window text-right pt-2 pb-2">
                                    &nbsp;
                                    <transition name="slide-fade">
                                        <span v-if="packType.startsWith('reg')">
                                            {{ price | toEth }} ETH
                                        </span>
                                    </transition>
                                </div>
                                <div class="col-2"></div>
                            </div>

                            <button class="btn btn-secondary mt-3" :disabled="packType.startsWith('elite')" @click="buyCard()">Purchase</button>
                        </div>
                    </div>

                    <div v-if="accountCredits > 0" class="mt-3">
                        <b-dropdown split @click="buyCard(accountCredits >= 3 ? 3 : accountCredits, true)"
                                    text="Use Credits" class="mt-5" variant="secondary" :disabled="!packPrices">
                            <b-dropdown-item href="#" @click="buyCard(true)" v-if="accountCredits >= 1">Buy 1 Card
                            </b-dropdown-item>
                            <b-dropdown-item href="#" @click="buyCard(true)" v-if="accountCredits >= 3">Buy 1 Pack
                            </b-dropdown-item>
                        </b-dropdown>

                        <div class="mt-3"><span class="badge badge-secondary">{{accountCredits}}</span> credits</div>
                    </div>
                </div>
                <div class="col text-center">
                    <div class="buy-container bg-light pb-5">
                        <div class="ml-4 mr-4">
                            <page-sub-title text="Elite" variant="blue"></page-sub-title>

                            <div class="row m-2">
                                <div class="col"></div>
                                <div class="col-8 buy-button" @click="setPackType('elite-1')" :class="{'buy-button-active': packType === 'elite-1'}">1 Pack</div>
                                <div class="col"></div>
                            </div>
                            <div class="row m-2">
                                <div class="col"></div>
                                <div class="col-8 buy-button" @click="setPackType('elite-2')" :class="{'buy-button-active': packType === 'elite-2'}">2 Packs</div>
                                <div class="col"></div>
                            </div>
                            <div class="row m-2">
                                <div class="col"></div>
                                <div class="col-8 buy-button" @click="setPackType('elite-3')" :class="{'buy-button-active': packType === 'elite-3'}">3 Packs</div>
                                <div class="col"></div>
                            </div>

                            <div class="row mt-5">
                                <div class="col-2"></div>
                                <div class="col price-window text-right pt-2 pb-2">
                                    &nbsp;
                                    <transition name="slide-fade">
                                        <span v-if="packType.startsWith('elite')">
                                            {{ price | toEth }} ETH
                                        </span>
                                    </transition>
                                </div>
                                <div class="col-2"></div>
                            </div>

                            <button class="btn btn-secondary mt-3" :disabled="packType.startsWith('reg')" @click="buyCard()">Purchase</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import NetworkWeb3Banner from '../components/NetworkWeb3Banner';
    import Loading from '../components/Loading';
    import BuyPlayerReveal from '../components/BuyPlayerReveal';
    import NiftyFootballHeader from '../components/NiftyFootballHeader';
    import PageTitle from '../components/PageTitle';
    import PageSubTitle from '../components/PageSubTitle';

    export default {
        components: {PageSubTitle, PageTitle, NiftyFootballHeader, BuyPlayerReveal, Loading, NetworkWeb3Banner},
        data () {
            return {
                packPrices: null,
                accountCredits: 0,
                buyState: 'idle',
                packType: 'elite-1',
                price: null,
                cards: [],
                revealAll: false
            };
        },
        computed: {
            ...mapState([
                'ethAccount',
                'blindPackService',
                'cardsApiService',
                'notificationService',
                'rankings',
            ]),
        },
        methods: {
            async buyCard (useCredits = false) {

                const cardsPerPack = 3;
                this.buyState = 'mining';
                
                const num = parseInt(this.packType.split('-')[1]) * cardsPerPack;

                console.log(`Buying ${this.packType} = ${num} cards`);

                try {
                    this.notificationService.showPurchaseNotification();

                    // call the respective contract to buy
                    let tx = null;
                    if (this.packType.startsWith('reg')) {
                        tx = await this.blindPackService.buyBlindPack(num, useCredits);
                    } else {
                        tx = await this.blindPackService.buyEliteBlindPack(num);
                    }
                    // console.log(tx);

                    this.notificationService.showProcessingNotification(tx.hash);

                    // wait for tx to be mined
                    await tx.wait(1);

                    const txRes = await this.cardsApiService.loadTokensForTx(tx.hash);
                    this.cards = txRes.cards;

                    this.buyState = 'confirmed';

                    this.notificationService.showConfirmedNotification(tx.hash);

                    // Refresh credit limit
                    this.loadCreditsForAccount();

                } catch (e) {
                    console.error('TXS failed', e);
                    this.notificationService.showFailureNotification('Transaction rejected');
                    this.buyState = 'idle';
                }
            },
            setState (state) {
                this.buyState = state;
                this.revealAll = false;
            },
            setPackType (pType) {
                this.packType = pType;
                this.price = this.packPrices[pType];
            },
            showAllCards () {
                this.revealAll = true;
            },
            async loadCreditsForAccount () {
                this.accountCredits = await this.blindPackService.getCreditsForAccount(this.ethAccount);

            }
        },
        async created () {
            const loadData = async () => {
                const regularPrices = await this.blindPackService.getRegularPriceModel();
                const elitePrices = await this.blindPackService.getElitePriceModel();
                this.packPrices = {
                    ...regularPrices,
                    ...elitePrices,
                };
                this.price = this.packPrices[this.packType];
            };

            this.$store.watch(
                () => this.$store.state.blindPackService,
                () => loadData()
            );

            if (this.$store.state.blindPackService) {
                await loadData();
            }

            if (this.$store.state.ethAccount && this.blindPackService) {
                await this.loadCreditsForAccount();
            }

            this.$store.watch(
                () => this.$store.state.ethAccount && this.blindPackService,
                () => this.loadCreditsForAccount()
            );
        }
    };
</script>

<style lang="scss" scoped>
    @import "../colours";

    .btn-xxl {
        padding: 20px 26px;
        font-size: 35px;
        border-radius: 8px;
    }

    .buy-button {
        font-family: 'CrackerJack', sans-serif;
        text-transform: uppercase;
        font-size: 1.1rem;
        background-color: $lightgrey;
        border: 2px solid $lightgrey;
        cursor: pointer;
    }

    .buy-button-active {
        border: 2px solid $secondary !important;
    }

    .price-window {
        background-color: $black;
        color: $secondary;
        font-family: 'CrackerJack', sans-serif;
        font-size: 1.15rem;
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .2s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
