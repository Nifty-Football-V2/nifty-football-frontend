<template>
    <div class="row mb-4 pb-4 text-center">
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
    @import "../colours";

    .h1-box {
        background-color: $black;
        color: $white;
        font-family: 'CrackerJack', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        border: 3px solid $purple;
        box-shadow: 0 6px 0 0 $purple;
        margin-bottom: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 50px;
        padding-right: 50px;
        letter-spacing: 2px;
    }
</style>