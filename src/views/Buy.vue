<template>
    <div>
        <div class="container-fluid mt-3">
            <page-title text="Buy Packs" @click="setState('idle')"></page-title>

            <div class="row pb-4 text-center"
                 v-if="!pricesSet || buyState === 'mining' || (buyState === 'confirmed' && cards && cards.length === 0)">
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
                        <div class="buy-container bg-light pb-5 mb-5 pt-4">
                            <div class="ml-4 mr-4">
                                <page-sub-title text="Regular" variant="orange"></page-sub-title>

                                <div class="row m-2">
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('reg-1')" :class="{'buy-button-active': packType === 'reg-1'}">1 Card</div>
                                    <div class="col"></div>
                                </div>
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
                                <div class="row m-2">
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('reg-9')" :class="{'buy-button-active': packType === 'reg-9'}">3 Packs</div>
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

                                <button class="btn btn-secondary mt-3" :disabled="!ethAccount || packType.startsWith('elite') || (accountCredits > 0 && selectedNum() > accountCredits)" @click="buyCard()">Purchase</button>

                                <div class="row mt-2" v-if="accountCredits > 0">
                                    <div class="col"></div>
                                    <div class="col-8 crackerjack">You have <span class="badge">{{accountCredits}}</span> {{accountCredits|pluralize('credit')}}</div>
                                    <div class="col"></div>
                                </div>

                                <hr/>
                                <div class="text-left">
                                    <span class="text-purple-lg">4 Nationalities</span><br/>
                                    <span class="text-orange-lg">22 Kits</span><br/>
                                    <span class="text-blue-lg">22 Colourways</span><br/>
                                    <span class="text-lime-lg">Genesis Attributes</span><br/>
                                    <router-link to="/about" class="small text-muted">Full distribution</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col text-center">
                        <div class="buy-container bg-light pb-5 mb-5 pt-4">
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
                                <div class="row m-2">
                                    <div class="col"></div>
                                    <div class="col-8 buy-button" @click="setPackType('elite-12')" :class="{'buy-button-active': packType === 'elite-12'}">4 Packs</div>
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

                                <button class="btn btn-secondary mt-3" :disabled="!ethAccount || packType.startsWith('reg')" @click="buyCard()">Purchase</button>

                                <hr/>
                                <div class="text-left">
                                    <span class="text-purple-lg">+2 Nationalities</span><br/>
                                    <span class="text-orange-lg">+8 Kits</span><br/>
                                    <span class="text-blue-lg">+8 Colourways</span><br/>
                                    <span class="text-lime-lg">10% Attribute Boost</span><br/>
                                    <router-link to="/about" class="small text-muted">Full distribution</router-link>
                                </div>
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
    import Loading from '../components/Loading';
    import BuyPlayerReveal from '../components/BuyPlayerReveal';
    import PageTitle from '../components/PageTitle';
    import PageSubTitle from '../components/PageSubTitle';

    export default {
        components: {PageSubTitle, PageTitle, BuyPlayerReveal, Loading},
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
                'blindPackPriceService',
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
                    // call the respective contract to buy
                    let receipt = null;
                    if (this.packType.startsWith('reg')) {
                        receipt = await this.blindPackService.buyBlindPack(num, this.selectedNum() <= this.accountCredits);
                    } else {
                        receipt = await this.blindPackService.buyEliteBlindPack(num);
                    }


                    const txRes = await this.cardsApiService.loadTokensForTx(receipt.transactionHash);
                    this.cards = txRes.cards;

                    this.buyState = 'confirmed';

                    // Refresh credit limit
                    this.loadCreditsForAccount();

                } catch (e) {
                    console.error('TXS failed', e);
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
                this.accountCredits = await this.blindPackPriceService.getCreditsForAccount(this.ethAccount);
                this.accountCredits = parseInt(this.accountCredits);
                if (this.accountCredits > 0) {
                    this.packType = 'reg-1';
                }
            },
            async loadPackPrices () {
                this.pricesSet = false;
                const regularPrices = await this.blindPackPriceService.getRegularPriceModel();
                const elitePrices = await this.blindPackPriceService.getElitePriceModel();
                this.packPrices = {
                    ...regularPrices,
                    ...elitePrices,
                };
                this.price = this.packPrices[this.packType];
                this.pricesSet = true;
            }
        },
        async created () {

            this.$store.watch(
                () => this.blindPackPriceService.networkId,
                () => this.loadPackPrices()
            );

            if (this.blindPackPriceService.networkId) {
                await this.loadPackPrices();
            }

            if (this.$store.state.ethAccount && this.blindPackPriceService.networkId) {
                await this.loadCreditsForAccount();
            }

            this.$store.watch(
                () => (this.$store.state.ethAccount, this.blindPackService),
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
</style>
