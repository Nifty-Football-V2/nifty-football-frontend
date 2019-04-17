<template>
    <div class="row pb-4">
        <div class="col">
            <router-link to="/" class="">
                <img src="../assets/logo.svg" class="img-fluid mt-3 mb-3" style="max-height: 100px;"/>
            </router-link>
        </div>
        <div class="col">

        </div>
        <div class="col">
            <div class="header-text mt-3 text-right">{{ name }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-header',
        props: ['name'],
    };
</script>

<style scoped lang="scss">
</style>