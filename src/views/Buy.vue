<template>
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('common.nifty_football') }}</h1>
                <img src="../assets/tiger.svg" style="max-height: 300px" class="mt-4"/>
            </div>
        </div>

        <div class="row" v-if="buyState === 'idle'">
            <div class="col text-center">
                <b-dropdown split @click="buyCard(3)" text="Buy Pack" class="m-2" variant="primary" size="lg" :disabled="!packPrices">
                    <b-dropdown-item href="#" @click="buyCard(1)">Buy 1 Trading Card</b-dropdown-item>
                    <b-dropdown-item href="#" @click="buyCard(3)">Buy 1 Packs</b-dropdown-item>
                    <b-dropdown-item href="#" @click="buyCard(6)">Buy 2 Packs</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>

        <div v-else class="row">
            <div class="col text-center">
                BOOOM!
            </div>
        </div>

    </div>
</template>

<script>
    /* global web3 */
    import {mapState} from 'vuex';
    import NotificationService from '../services/notification.service';

    export default {
        name: 'home',
        data() {
            return {
                packPrices: {},
                buyState: 'idle',
            };
        },
        computed: {
            ...mapState([
                'squad',
                'ethAccount',
                'blindPackService',
            ]),
        },
        components: {},
        methods: {
            buyCard: async function (num) {

                console.log(num, this.packPrices[num], this.ethAccount);

                // FIXME should this be in the view or a service?

                const notificationService = new NotificationService();

                notificationService.showPurchaseNotification();

                // wait for tx to be mined
                let tx = await this.blindPackService.buyBlindPack(num);

                this.buyState = 'ongoing';

                notificationService.showProcessingNotification();

                let receipt = await tx.wait(1);

                // for local DEMO purposes!!!
                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                await sleep(2000);

                this.buyState = 'confirmed';

                await sleep(2000);

                const secondEvent = receipt.events[1];

                // FIXME this doesnt work with multiple purchases...?
                this.buildingTokenId = web3.toDecimal(secondEvent.topics[1]);

                console.log(`Token ID:`, this.buildingTokenId);
                notificationService.showConfirmedNotification(this.buildingTokenId);

                this.$store.dispatch('loadSquad');

                this.buyState = 'idle';
            }
        },
        async created() {

            const loadData = async () => {
                this.packPrices = await this.blindPackService.getPriceModel();
            };

            this.$store.watch(
                () => this.$store.state.blindPackService,
                () => loadData()
            );

            if (this.$store.state.blindPackService) {
                loadData();
            }
        }
    };
</script>