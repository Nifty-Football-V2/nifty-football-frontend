<template>
    <div v-if="card">
       <span v-on:click="revealCard" v-show="!cardShown">
            <img src="../assets/back.svg"
                 :id="'place_holder_' + card.tokenId"
                 :alt="'nifty_card_' + card.tokenId"/>
        </span>
        <transition name="bounce">
            <card :card="card" v-show="cardShown" :lazy="false"></card>
        </transition>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {getApi} from '../utils';
    import Card from "./Card";

    export default {
        name: 'buy-player-reveal',
        components: {Card},
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
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
