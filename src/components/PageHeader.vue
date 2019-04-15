<template>
    <div class="row pb-4">
        <div class="col">
        </div>
        <div class="col">
            <img src="../assets/logo.svg" style="max-height: 75px" class="mt-3 mb-3"/>
        </div>
        <div class="col">
            <h2 class="mt-3 text-right">{{ name }}</h2>
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