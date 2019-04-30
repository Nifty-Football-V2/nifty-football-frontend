<template>
    <vue-flip :active-click="true" width="100%" height="100%" style="min-height: 250px;">
        <div slot="front">
            <lazy-img-loader :src="card.tokenId" :id="card.tokenId" :lazy="lazy"></lazy-img-loader>
        </div>
        <div slot="back">
            <div v-if="card">
                <card-back :card="card"></card-back>
            </div>
            <div v-else>
                <img src="../assets/holding.svg" alt="loading"/>
            </div>
        </div>
    </vue-flip>
</template>

<script>
    import VueFlip from 'vue-flip';
    import LazyImgLoader from "./LazyImgLoader";
    import CardBack from "./CardBack";

    export default {
        name: 'card',
        components: {CardBack, LazyImgLoader, VueFlip},
        props: {
            card: {
                type: Object,
            },
            lazy: {
                type: Boolean,
                default: true
            },
        },
        computed: {},
        methods: {},
    };
</script>

<style lang="scss">
    @import "../colours";

</style>
