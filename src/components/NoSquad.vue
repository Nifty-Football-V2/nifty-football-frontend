<template>
    <div>
        <div class="row mb-4">
            <div class="col text-center">
                <router-link to="/buy" class="nf-link">
                    <img src="../assets/head.png" style="width: 200px"/>
                </router-link>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col text-center">
                <router-link to="/buy" class="nf-link">No Squad</router-link>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col text-center">
                <router-link to="/buy" class="btn btn-secondary btn-lg">
                    Start Collecting
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'no-squad',
    };
</script>

<style scoped lang="scss">
</style>