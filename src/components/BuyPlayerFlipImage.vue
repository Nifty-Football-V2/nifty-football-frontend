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
        props: ['tokenId'],
        data () {
            return {};
        },
        computed: {
            ...mapState(['networkId']),
        },
        methods: {
            imageUrl () {
                return `${getApi()}/network/${this.networkId}/image/${this.tokenId}`;
            }
        },
    };
</script>

<style scoped lang="scss">
</style>
