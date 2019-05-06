<template>
    <div class="row m-0 pb-2 text-center">
        <div class="col">
            <span class="h2-box" :class="{'border-orange': variant === 'orange', 'border-blue': variant === 'blue', 'border-purple': variant === 'purple', 'border-lime': variant === 'lime'}">
                {{text}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'team-title',
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

        &.border-orange {
            border: 2px solid $orange;
            box-shadow: 0 4px 0 0 $orange;
        }

        &.border-blue {
            border: 2px solid $blue;
            box-shadow: 0 4px 0 0 $blue;
        }

        &.border-purple {
            border: 2px solid $purple;
            box-shadow: 0 4px 0 0 $purple;
        }

        &.border-lime {
            border: 2px solid $lime;
            box-shadow: 0 4px 0 0 $lime;
        }

    }




</style>