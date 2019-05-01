<template>
    <div class="row pb-4 text-center">
        <div class="col">
            <span class="h1-box">{{text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-title',
        props: ['text'],
    };
</script>

<style scoped lang="scss">

</style>