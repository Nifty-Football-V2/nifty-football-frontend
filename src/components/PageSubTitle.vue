<template>
    <div class="row mb-4 pb-2 text-center">
        <div class="col">
            <span class="h2-box" :class="{'border-orange': variant === 'orange', 'border-blue': variant === 'blue'}">{{text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-sub-title',
        props: ['text', 'variant'],
    };
</script>

<style scoped lang="scss">
    @import "../colours";

    .h2-box {
        background-color: $black;
        color: $white;
        font-family: 'CrackerJack', sans-serif;
        font-size: 1.2rem;
        text-transform: uppercase;

        margin-bottom: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 50px;
        padding-right: 50px;
        letter-spacing: 1px;
    }

    .border-orange {
        border: 3px solid $orange;
        box-shadow: 0 6px 0 0 $orange;
    }

    .border-blue {
        border: 3px solid $blue;
        box-shadow: 0 6px 0 0 $blue;
    }
</style>