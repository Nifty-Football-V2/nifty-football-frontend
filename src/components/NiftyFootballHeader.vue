<template>
    <div class="row pb-3 mb-3 mt-2">
        <div class="col-6 col-md-3 header-text text-left" >
            <router-link to="/squad" v-if="$router.currentRoute.name !== 'home'">{{ $t('nav.account') }}</router-link>
            <img src="../assets/live_ropsten.svg" class="img-fluid mx-auto" v-else/>
        </div>
        <div class="d-none d-sm-block col-md-6 header-text text-center">
            <router-link to="/">
                <img src="../assets/gray_logo.svg" style="width: 75px;" class="mx-auto"/>
            </router-link>
        </div>
        <div class="col-6 col-md-3 header-text text-right">
            <router-link active-class="" to="/buy" class="mr-1 btn btn-secondary" v-if="$router.currentRoute.name !== 'home'">
                Buy Packs
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

</style>