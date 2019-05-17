<template>
    <div class="justify-content-sm-center mt-5 pt-5 pb-5 bg-secondary">

        <div class="row">
            <div class="col pb-4">
                <page-sub-title text="Supported Wallets" variant="orange"></page-sub-title>
            </div>
        </div>

        <div class="row">
            <div class="col-6 col-sm p-4">
                Trust Wallet
            </div>
            <div class="col-6 col-sm p-4">
                IM TOken
            </div>
            <div class="col-6 col-sm p-4">
               Coinbase
            </div>
            <div class="col-6 col-sm p-4">
                Opera Mobile
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
