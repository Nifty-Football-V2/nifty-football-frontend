<template>
    <div class="container mb-5">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('common.nifty_football') }}</h1>
                <img src="../assets/card.svg" style="max-height: 300px" class="mt-4"/>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row">
            <div class="col text-center">
                <button type="button" class="btn btn-primary btn-lg m-4"
                        @click="buyCard(1)"
                        :disabled="!packPrices[1]">
                    {{ $t('common.buy') }} 1 Card
                </button>
                <br/>
                <span v-if="packPrices && packPrices[1]" class="text-muted">{{ packPrices[1] }} WEI</span>
            </div>
            <div class="col text-center">
                <button type="button" class="btn btn-primary btn-lg m-4"
                        @click="buyCard(3)"
                        :disabled="!packPrices[3]">
                    {{ $t('common.buy') }} 3 Pack
                </button>
                <br/>
                <span v-if="packPrices && packPrices[3]" class="text-muted">{{ packPrices[3] }} WEI</span>
            </div>
            <div class="col text-center">
                <button type="button" class="btn btn-primary btn-lg m-4"
                        @click="buyCard(6)"
                        :disabled="!packPrices[6]">
                    {{ $t('common.buy') }} 6 Pack
                </button>
                <br/>
                <span v-if="packPrices && packPrices[6]" class="text-muted">{{ packPrices[6] }} WEI</span>
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
            };
        },
        computed: {
            ...mapState([
                'account',
                'ethAccount',
                'blindPackService',
            ]),
        },
        components: {},
        methods: {
            buyCard: async function (num) {

                console.log(num, this.packPrices[num], this.ethAccount);

                const noficationService = new NotificationService();

                noficationService.showPurchaseNotification();

                // wait for tx to be mined
                let tx = await this.blindPackService.buyBlindPack(num);

                noficationService.showProcessingNotification();

                let receipt = await tx.wait(1);

                // for local DEMO purposes!!!
                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                await sleep(2000);

                // FIXME this doesnt work with multiple purchases...?

                const secondEvent = receipt.events[1];
                this.buildingTokenId = web3.toDecimal(secondEvent.topics[1]);

                console.log(`Token ID:`, this.buildingTokenId);
                noficationService.showConfirmedNotification(this.buildingTokenId);
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
        }
    };
</script>
