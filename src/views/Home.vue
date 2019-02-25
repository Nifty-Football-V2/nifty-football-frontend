<template>
    <div class="container mb-5">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('common.futball_cards') }}</h1>
                <img src="../assets/card.svg" style="max-height: 300px" class="mt-4"/>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row pb-4">
            <div class="col text-center">
                <button class="btn btn-primary btn-lg pl-4 pr-4" @click="buyCard">{{ $t('common.buy') }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    /* global web3 */
    import { ethers } from 'ethers';
    import futballCardsBlindPackAbi from '../abi/futballCardsBlindPack';
    import NotificationService from "../services/notification.service";

    export default {
        name: 'home',
        components: {},
        methods: {
            buyCard: async function () {

                const noficationService =  new NotificationService();
                let overrides = {

                    // The maximum units of gas for the transaction to use
                    gasLimit: 6721975,

                    // The price (in wei) per unit of gas
                    gasPrice: 1000000000,

                    // The amount to send with the transaction (i.e. msg.value)
                    value: this.priceInWei,
                };

                noficationService.showPurchaseNotification();

                // wait for tx to be mined
                let tx = await this.blindPackContract.blindPack(overrides);

                noficationService.showProcessingNotification();

                let receipt = await tx.wait(1);

                // for local DEMO purposes!!!
                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
                await sleep(2000);

                const secondEvent = receipt.events[1];
                this.buildingTokenId = web3.toDecimal(secondEvent.topics[1]);

                console.log(`Token ID:`, this.buildingTokenId);
                noficationService.showConfirmedNotification(this.buildingTokenId);

            }
        },
        created: async function () {
            const provider = new ethers.providers.Web3Provider(web3.currentProvider);
            const signer = provider.getSigner();

            // 5777
            this.blindPackContract = new ethers.Contract(
                '0x790c7E699107A39b08E195AdAa09eA20D5E867B9',
                futballCardsBlindPackAbi,
                signer
            );

            this.priceInWei = (await this.blindPackContract.priceInWei()).toNumber();
        }
    };
</script>
