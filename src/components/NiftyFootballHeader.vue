<template>
    <div class="row pb-3 mb-3 mt-0 bg-light-grey">
        <div class="col-6 col-md-3 header-text text-left mt-2" >
            <router-link to="/squad" v-if="$router.currentRoute.name !== 'home'">{{ $t('nav.account') }}</router-link>
            <img src="../assets/live_ropsten.svg" class="img-fluid mx-auto" v-else/>
        </div>
        <div class="d-none d-sm-block col-md-6 header-text text-center mt-2">
            <router-link to="/">
                <img src="../assets/gray_logo.svg" style="width: 75px;" class="mx-auto"/>
            </router-link>
        </div>
        <div class="col-6 col-md-3 header-text text-right mt-2">
            <router-link to="/buy" class="mr-1 btn btn-secondary" v-if="$router.currentRoute.name !== 'home'">
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
    };
</script>

<style scoped lang="scss">
    .bg-light-grey {
        background-color: lightgrey;
    }
</style>