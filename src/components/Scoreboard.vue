<template>
    <div class="row mb-5 pb-4 text-center">
        <div class="col">
            <span class="h1-box">{{score}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scoreboard',
        props: ['score'],
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
        border: 3px solid $lime;
        box-shadow: 0 6px 0 0 $lime;
        margin-bottom: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
        letter-spacing: 2px;
    }
</style>