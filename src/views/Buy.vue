<template>
    <div>
        <div class="container-fluid">
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

            <div class="row pb-4 text-center" v-show="cards && cards.length > 0 && buyState === 'confirmed'">
                <div class="col">
                    <a href="#" @click="setState('idle')" class="nf-link">Add more cards to your squad?</a>
                </div>
            </div>

            <transition name="fade" v-if="pricesSet">
                <div class="row" v-if="buyState === 'idle'">
                    <div class="col-lg"></div>
                    <div class="col text-center">
                        <div class="buy-container bg-light pb-5">
                            <div class="ml-4 mr-4">
                                <page-sub-title text="Regular" variant="orange"></page-sub-title>

                                <div class="row m-2">
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('reg-3')" :class="{'buy-button-active': packType === 'reg-3'}">1 Pack</div>
                                    <div class="col"></div>
                                </div>
                                <div class="row m-2">
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('reg-6')" :class="{'buy-button-active': packType === 'reg-6'}">2 Packs</div>
                                    <div class="col"></div>
                                </div>
                                <div class="row m-2" v-if="accountCredits === 0">
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('reg-9')" :class="{'buy-button-active': packType === 'reg-9'}">3 Packs</div>
                                    <div class="col"></div>
                                </div>
                                <div class="row m-2" v-else>
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('reg-1')" :class="{'buy-button-active': packType === 'reg-1'}">1 Card</div>
                                    <div class="col"></div>
                                </div>

                                <div class="row mt-5">
                                    <div class="col-2"></div>
                                    <div class="col price-window text-right pt-2 pb-2">
                                        &nbsp;
                                        <transition name="slide-fade">
                                        <span v-if="packType.startsWith('reg') && accountCredits === 0">
                                            {{ price | toEth }} ETH
                                        </span>
                                        <span v-if="packType.startsWith('reg') && accountCredits > 0">
                                            {{ selectedNum() }} {{accountCredits|pluralize('credit')|uppercase}}
                                        </span>
                                        </transition>
                                    </div>
                                    <div class="col-2"></div>
                                </div>

                                <button class="btn btn-secondary mt-3" :disabled="packType.startsWith('elite') || (accountCredits > 0 && selectedNum() > accountCredits)" @click="buyCard()">Purchase</button>

                                <div class="row mt-2" v-if="accountCredits > 0">
                                    <div class="col"></div>
                                    <div class="col-8 crackerjack">You have <span class="badge">{{accountCredits}}</span> {{accountCredits|pluralize('credit')}}</div>
                                    <div class="col"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col text-center">
                        <div class="buy-container bg-light pb-5">
                            <div class="ml-4 mr-4">
                                <page-sub-title text="Elite" variant="blue"></page-sub-title>

                                <div class="row m-2">
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('elite-3')" :class="{'buy-button-active': packType === 'elite-3'}">1 Pack</div>
                                    <div class="col"></div>
                                </div>
                                <div class="row m-2">
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('elite-6')" :class="{'buy-button-active': packType === 'elite-6'}">2 Packs</div>
                                    <div class="col"></div>
                                </div>
                                <div class="row m-2">
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('elite-9')" :class="{'buy-button-active': packType === 'elite-9'}">3 Packs</div>
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
            </transition>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import NetworkWeb3Banner from '../components/NetworkWeb3Banner';
    import Loading from '../components/Loading';
    import BuyPlayerReveal from '../components/BuyPlayerReveal';
    import PageTitle from '../components/PageTitle';
    import PageSubTitle from '../components/PageSubTitle';

    export default {
        components: {PageSubTitle, PageTitle, BuyPlayerReveal, Loading, NetworkWeb3Banner},
        data () {
            return {
                packPrices: null,
                accountCredits: 0,
                buyState: 'idle',
                packType: 'elite-3',
                price: null,
                cards: [],
                pricesSet: false,
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
            async buyCard () {

                this.buyState = 'mining';

                const num = parseInt(this.packType.split('-')[1]);

                console.log(`Buying ${this.packType} = ${num} cards`);

                try {
                    this.notificationService.showPurchaseNotification();

                    // call the respective contract to buy
                    let tx = null;
                    if (this.packType.startsWith('reg')) {
                        tx = await this.blindPackService.buyBlindPack(num, this.selectedNum() <= this.accountCredits);
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
            },
            setPackType (pType) {
                this.packType = pType;
                this.price = this.packPrices[pType];
            },
            selectedNum () {
                return parseInt(this.packType.split('-')[1]);
            },
            async loadCreditsForAccount () {
                this.accountCredits = await this.blindPackService.getCreditsForAccount(this.ethAccount);
                this.accountCredits = parseInt(this.accountCredits);
                if (this.accountCredits > 0) {
                    this.packType = 'reg-1';
                }
            }
        },
        async created () {
            const loadData = async () => {
                this.pricesSet = false;
                const regularPrices = await this.blindPackService.getRegularPriceModel();
                const elitePrices = await this.blindPackService.getElitePriceModel();
                this.packPrices = {
                    ...regularPrices,
                    ...elitePrices,
                };
                this.price = this.packPrices[this.packType];
                this.pricesSet = true;
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

            this.$store.dispatch('lazyLoadWeb3');
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
        border: 4px solid $lightgrey;
        cursor: pointer;
    }

    .buy-button-active {
        border: 4px solid $secondary !important;
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
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .75s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
