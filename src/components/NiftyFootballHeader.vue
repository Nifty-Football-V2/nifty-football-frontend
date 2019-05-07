<template>
    <div class="row pb-3 mb-3 mt-0 bg-light-grey">
        <div class="col-6 col-md-3 header-text-sm text-left mt-2">
            <div v-if="route.path !== '/'">
                <router-link to="/squad" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.account') }}</router-link>
                <router-link to="/team" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.team') }}</router-link>
                <router-link to="/rankings" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.rankings') }}</router-link>
            </div>
            <img src="../assets/live_ropsten.svg" class="img-fluid mx-auto" v-else/>
        </div>
        <div class="d-none d-sm-block col-md-6 header-text text-center mt-2">
            <router-link to="/">
                <img src="../assets/gray_logo.svg" style="width: 75px;" class="mx-auto"/>
            </router-link>
        </div>
        <div class="col-6 col-md-3 text-right mt-2">
            <router-link to="/buy" class="mr-1 btn btn-secondary" v-if="route.path !== '/'">
                Buy
            </router-link>
            <router-link to="/buy" class="mr-1 btn btn-secondary btn-lg" v-else>
                Start Collecting
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nifty-football-header',
        props: ['route'],
    };
</script>

<style scoped lang="scss">
    .bg-light-grey {
        background-color: lightgrey;
    }
</style>