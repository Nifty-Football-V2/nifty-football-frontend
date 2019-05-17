<template>
    <div class="row mt-5 mb-5 pt-5 pb-5 bg-dark justify-content-center">

        <div class="row">
            <div class="col pb-4">
                <page-sub-title text="Partners" variant="orange"></page-sub-title>
            </div>
        </div>

        <div class="row">
            <div class="col-6 col-sm p-4">
                <a href="https://www.brewdog.com/" target="_blank">
                    <img src="../assets/partners/BD_Logo_Full_Smooth_Black-1492x2093-3dee766.svg" class="img-fluid"
                         style="max-height: 100px"/>
                </a>
            </div>
            <div class="col-6 col-sm p-4">
                <a href="http://opensea.io" target="_blank">
                    <img src="../assets/partners/opensea-logo-flat-colored-blue-vertical.svg" class="img-fluid"
                         style="max-height: 100px"/>
                </a>
            </div>
            <div class="col-6 col-sm p-4">
                <a href="https://3box.io" target="_blank">
                    <img src="../assets/partners/3box-logo.png" class="img-fluid primary" style="max-height: 100px"/>
                </a>
            </div>
            <div class="col-6 col-sm p-4">
                <a href="https://www.blocknative.com" target="_blank">
                    <img src="../assets/partners/home-blocknative-logo-icon@2x.webp" class="img-fluid"
                         style="max-height: 100px"/>
                </a>
            </div>
            <div class="col-6 col-sm p-4">
                <a href="http://blockrocket.tech" target="_blank">
                    <img src="../assets/partners/BlockR_WhiteLogo.svg" class="img-fluid" style="max-height: 100px"/>
                </a>
            </div>
            <div class="col-6 col-sm p-4">
                <a href="https://knownorigin.io" target="_blank">
                    <img src="../assets/partners/KO_Logo_path.png" class="img-fluid" style="max-height: 100px"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import PageSubTitle from "./PageSubTitle";

    export default {
        name: 'partners',
        components: {PageSubTitle},
    };
</script>

<style scoped lang="scss">
    @import "../colours";

    .partner {

    }
</style>
