<template>
    <div class="row justify-content-center mt-5 mb-5 pt-5 pb-5 text-center">
        <div class="col">

            <page-sub-title text="Supported Wallets" variant="blue"></page-sub-title>

            <div class="row">
                <div class="col-6 col-sm p-4">
                    <a href="https://trustwallet.com" target="_blank">
                        <img src="../assets/wallets/trustwallet.png" class="img-fluid primary"
                             style="max-height: 100px"/>
                    </a>
                </div>
                <div class="col-6 col-sm p-4">
                    <a href="https://token.im" target="_blank">
                        <img src="../assets/wallets/imtoken.png" class="img-fluid primary" style="max-height: 100px"/>
                    </a>
                </div>
                <div class="col-6 col-sm p-4">
                    <a href="https://wallet.coinbase.com/" target="_blank">
                        <img src="../assets/wallets/coinbasewallet-logomark.png" class="img-fluid primary"
                             style="max-height: 100px"/>
                    </a>
                </div>
                <div class="col-6 col-sm p-4">
                    <a href="https://www.opera.com/mobile" target="_blank">
                        <img src="../assets/wallets/opera_logo_full-color_red_positive_horizontal_rgb.png"
                             class="img-fluid primary" style="max-height: 75px"/>
                    </a>
                </div>
                <div class="col-6 col-sm p-4">
                    <a href="https://metamask.io/" target="_blank">
                        <img src="../assets/wallets/metamask.png"
                             class="img-fluid primary" style="max-height: 75px"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageSubTitle from "./PageSubTitle";

    export default {
        name: 'wallets',
        components: {PageSubTitle},
    };
</script>

<style scoped lang="scss">
    @import "../colours";

    .partner {

    }
</style>
