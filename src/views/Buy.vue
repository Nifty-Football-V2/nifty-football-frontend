<template>
    <div class="container">

        <div class="row pb-4 text-center" v-if="buyState === 'mining' || (buyState === 'confirmed' && cards && cards.length === 0)">
            <div class="col mb-5 text-primary">
                <font-awesome-icon icon="futbol" size="6x" spin class="m-5"/>
            </div>
        </div>

        <div class="row pb-4 text-center" v-show="cards && cards.length > 0 && buyState === 'confirmed'">
            <div class="col-3 mb-5" v-for="card in cards" v-bind:key="card.tokenId">
                <img src="../assets/back.svg" v-show="!cardsShow" @click="showCard()" :id="card.tokenId" :key="card.tokenId"/>
                <lazy-img-loader :src="card.tokenId" :id="card.tokenId" v-show="cardsShow"></lazy-img-loader>
            </div>
        </div>

        <div class="row pb-4 text-center" v-show="cards && cards.length > 0 && buyState === 'confirmed'">
            <div class="col mb-5">
                <b-button variant="outline-primary" size="lg" @click="showCard()" v-show="!cardsShow">Reveal</b-button>
                <b-button variant="outline-primary" size="lg" @click="setState('idle')" v-show="cardsShow">Buy more?</b-button>
                <router-link to="/squad" class="ml-5">View Squad</router-link>
            </div>
        </div>

        <div class="row" v-if="buyState === 'idle'">
            <div class="col text-center">
                <b-dropdown split @click="buyCard(3)" text="Buy Pack" class="m-5" variant="primary" size="lg" :disabled="!packPrices">
                    <b-dropdown-item href="#" @click="buyCard(1)">Buy 1 Card</b-dropdown-item>
                    <b-dropdown-item href="#" @click="buyCard(3)">Buy 3 Cards</b-dropdown-item>
                    <b-dropdown-item href="#" @click="buyCard(6)">Buy 6 Cards</b-dropdown-item>
                </b-dropdown>

                <div v-for="(price, num) in packPrices" v-bind:key="num">{{ num }} {{ parseInt(num) | pluralize('Card') }} for {{ price | toEth }} ETH</div>
                <div class="small">1 pack is 3 cards</div>

            </div>
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import NotificationService from '../services/notification.service';

    import LazyImgLoader from '../components/LazyImgLoader';

    export default {
        components: {LazyImgLoader},
        data () {
            return {
                packPrices: {},
                buyState: 'idle',
                cards: [],
                cardsShow: false,
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
                this.cardsShow = false;
            },
            showCard (card) {
                console.log(`card`, card);
                // this.cards[0].show = true;
                this.cardsShow = true;
            },
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
