<template>
    <div>
        <div v-show="showFront" v-on:click="flipCard">
            <lazy-img-loader :src="card.tokenId" :id="card.tokenId" :lazy="lazy"></lazy-img-loader>
        </div>

        <div v-show="!showFront" v-on:click="flipCard">
            <div v-if="card">
                <card-back :card="card"></card-back>
            </div>
            <div v-else>
                <img src="../assets/holding.svg" alt="loading"/>
            </div>
        </div>
    </div>
</template>

<script>
    import LazyImgLoader from './LazyImgLoader';
    import CardBack from './CardBack';

    export default {
        name: 'card',
        components: {CardBack, LazyImgLoader},
        data() {
            return {
                showFront: true,
            };
        },
        props: {
            card: {
                type: Object,
            },
            lazy: {
                type: Boolean,
                default: true
            },
        },
        methods: {
            flipCard() {
                this.showFront = !this.showFront;
            },
        },
    };
</script>

<style lang="scss">
    @import "../colours";

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
