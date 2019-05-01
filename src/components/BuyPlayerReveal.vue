<template>
    <div v-if="card">
       <span v-on:click="revealCard" v-show="!cardShown">
            <img src="../assets/back.svg"
                 :id="'place_holder_' + card.tokenId"
                 :alt="'nifty_card_' + card.tokenId"/>
        </span>
        <card :card="card" v-show="cardShown" :lazy="false"></card>
    </div>
</template>

<script>
    import VueFlip from 'vue-flip';
    import {mapState} from 'vuex';
    import {getApi} from '../utils';
    import Card from "./Card";

    export default {
        name: 'buy-player-reveal',
        components: {Card, VueFlip},
        props: ['card'],
        data() {
            return {
                cardShown: false
            };
        },
        computed: {
            ...mapState(['networkId']),
        },
        methods: {
            revealCard() {
                this.cardShown = true;
            },
            imageUrl() {
                return `${getApi()}/network/${this.networkId}/image/${this.tokenId}`;
            }
        },
    };
</script>

<style scoped lang="scss">
</style>
