<template>
    <header class="mb-0">
        <div class="row pb-3 mt-0 bg-light-grey">
            <div class="col-6 col-sm-4 header-text-sm text-left mt-2">
                <div v-if="route.path !== '/'">
                    <router-link to="/squad" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.account') }}</router-link>
                    <router-link to="/team" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.team') }}</router-link>
                    <router-link to="/activity" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.activity') }}</router-link>
                    <router-link to="/rankings" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.rankings') }}</router-link>
                </div>
                <div v-else>
                    <router-link to="/activity" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.activity') }}</router-link>
                </div>
            </div>
            <div class="d-none d-sm-block col-sm-4 header-text text-center mt-2">
                <router-link to="/">
                    <img src="../assets/gray_logo.svg" style="width: 50px;" class="mx-auto"/>
                </router-link>
            </div>
            <div class="col-6 col-sm-4 text-right mt-2">
                <router-link to="/buy" class="mr-sm-3 mr-2 btn btn-secondary">
                    Buy
                </router-link>
            </div>
        </div>
        <network-web3-banner v-if="meta && meta.web3Required"></network-web3-banner>
    </header>
</template>

<script>
    import NetworkWeb3Banner from "./NetworkWeb3Banner";

    export default {
        name: 'nifty-football-header',
        components: {NetworkWeb3Banner},
        props: ['route', 'meta'],
    };
</script>

<style scoped lang="scss">
    .bg-light-grey {
        background-color: lightgrey;
    }
</style>
