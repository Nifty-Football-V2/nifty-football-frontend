<template>
    <img v-if="src"
         v-lazy="imageUrl"
         :key="'img_' + id"
         :id="'img_' + id"
         alt="Nifty Football Trading Card"/>
</template>

<script>
    import {getApi} from "../utils";
    import {mapState} from 'vuex';

    export default {
        name: 'lazy-img-loader',
        props: ['src', 'id'],
        computed: {
            ...mapState(['networkId']),
            imageUrl() {
                return `${getApi()}/network/${this.networkId}/image/${this.id}`;
            },
        }
    };
</script>

<style scoped lang="scss">
    .v-lazy-image {
        filter: blur(0px);
        transition: filter 0.5s;
    }

    .v-lazy-image-loaded {
        filter: blur(0);
    }
</style>
