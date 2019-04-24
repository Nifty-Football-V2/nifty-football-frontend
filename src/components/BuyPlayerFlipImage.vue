<template>
    <vue-flip :active-click="true" width="100%" height="100%" v-if="tokenId">
        <div slot="front">
            <img src="../assets/back.svg"
                 :id="'place_holder_' + tokenId"
                 :alt="'nifty_card_' + tokenId"
                 style="margin: 6px"/>
        </div>
        <div slot="back">
            <img :src="imageUrl()"
                 :id="'player_img_' + tokenId"
                 alt="Nifty Football Trading Card"
            />
        </div>
    </vue-flip>
</template>

<script>
    import VueFlip from 'vue-flip';
    import { mapState } from 'vuex';
    import { getApi } from '../utils';

    export default {
        name: 'buy-player-flip-image',
        components: {VueFlip},
        props: ['tokenId', 'revealAll'],
        data () {
            return {
                cardShown: false
            };
        },
        computed: {
            ...mapState(['networkId']),
        },
        methods: {
            revealCard () {
                this.cardShown = true;
            },
            imageUrl () {
                return `${getApi()}/network/${this.networkId}/image/${this.tokenId}`;
            }
        },
        watch: {
            revealAll: function (newVal, oldVal) {
                if (newVal) {
                    this.cardShown = true;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../colours";

    .v-lazy-image {
        filter: blur(0px);
        transition: filter 0.5s;
    }

    .v-lazy-image-loaded {
        filter: blur(0);
    }

    .highlight {
        -webkit-filter: drop-shadow(1px 2px 1px $secondary);
        filter: drop-shadow(1px 2px 1px $secondary);
    }
</style>
