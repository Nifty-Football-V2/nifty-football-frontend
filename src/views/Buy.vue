<template>
    <div>
        <network-web3-banner></network-web3-banner>
        <div class="container-fluid">
            <nifty-football-header></nifty-football-header>

            <page-title text="Buy Packs"></page-title>

            <div class="row pb-4 text-center"
                 v-if="buyState === 'mining' || (buyState === 'confirmed' && cards && cards.length === 0)">
                <div class="col mb-5 text-primary">
                    <loading></loading>
                </div>
            </div>

            <div class="row pb-4 text-center" v-show="cards && cards.length > 0 && buyState === 'confirmed'">
                <div class="col-3 mb-5" v-for="card in cards" v-bind:key="card.tokenId" style="min-height: 320px">
                    <buy-player-reveal :card="card"></buy-player-reveal>
                </div>
            </div>

            <div class="row pb-5 pt-5 bg-dark" v-if="buyState === 'idle'">
                <div class="col-sm"></div>
                <div class="col-6 offset-3 offset-sm-0 col-sm-2 text-center">
                    <img src="../assets/packs.svg" @click="buyCard(3, true)"/>
                </div>
                <div class="col-sm"></div>
            </div>

            <div class="row" v-if="buyState === 'idle'">
                <div class="col-lg"></div>
                <div class="col text-center" v-if="accountCredits > 0">
                    <b-dropdown split @click="buyCard(accountCredits >= 3 ? 3 : accountCredits, true)"
                                text="Use Credits" class="mt-5" variant="secondary" size="lg" :disabled="!packPrices">
                        <b-dropdown-item href="#" @click="buyCard(1, true)" v-if="accountCredits >= 1">Buy 1 Card
                        </b-dropdown-item>
                        <b-dropdown-item href="#" @click="buyCard(3, true)" v-if="accountCredits >= 3">Buy 1 Pack
                        </b-dropdown-item>
                    </b-dropdown>

                    <div class="mt-3"><span class="badge badge-secondary">{{accountCredits}}</span> credits</div>
                </div>
                <div class="col text-center">

                    <b-dropdown split @click="buyCard(3)" text="Buy Pack" class="mt-5" variant="secondary" size="lg"
                                :disabled="!packPrices">
                        <b-dropdown-item href="#" @click="buyCard(3)">Buy 1 Pack</b-dropdown-item>
                        <b-dropdown-item href="#" @click="buyCard(6)">Buy 2 Packs</b-dropdown-item>
                        <b-dropdown-item href="#" @click="buyCard(9)">Buy 3 Packs</b-dropdown-item>
                    </b-dropdown>

                    <div class="small">1 pack is 3 cards</div>
                </div>
                <div class="col-lg"></div>
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
    import { mapState } from 'vuex';
    import NetworkWeb3Banner from '../components/NetworkWeb3Banner';
    import Loading from '../components/Loading';
    import BuyPlayerReveal from '../components/BuyPlayerReveal';
    import NiftyFootballHeader from '../components/NiftyFootballHeader';
    import PageTitle from '../components/PageTitle';

    export default {
        components: {PageTitle, NiftyFootballHeader, BuyPlayerReveal, Loading, NetworkWeb3Banner},
        data () {
            return {
                packPrices: {},
                accountCredits: 0,
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
                'notificationService',
                'rankings',
            ]),
        },
        methods: {
            async buyCard (num, useCredits = false) {
                this.buyState = 'mining';

                try {
                    this.notificationService.showPurchaseNotification();

                    // wait for tx to be mined
                    let tx = await this.blindPackService.buyBlindPack(num, useCredits);

                    // console.log(tx);

                    this.notificationService.showProcessingNotification(tx.hash);

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
            showAllCards () {
                this.revealAll = true;
            },
            async loadCreditsForAccount () {
                this.accountCredits = await this.blindPackService.getCreditsForAccount(this.ethAccount);

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
    .btn-xxl {
        padding: 20px 26px;
        font-size: 35px;
        border-radius: 8px;
    }
</style>
