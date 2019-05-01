<template>
    <span>
        <img v-show="src && lazy"
             v-lazy="imageUrl"
             :key="'img_lazy_' + id"
             :id="'img_lazy_' + id"
             alt="Nifty Football Trading Card"
             :class="{'highlight': highlight}"
        />

        <img v-show="src && !lazy"
             :key="'img_' + id"
             :id="'img_' + id"
             :src="imageUrl"
             alt="Nifty Football Trading Card"
             :class="{'highlight': highlight}"
        />
    </span>
</template>

<script>
    import {getApi} from "../utils";
    import {mapState} from 'vuex';

    export default {
        name: 'lazy-img-loader',
        props: {
            src: {
                type: [String, Number], // FIXME why both types?
            },
            id: {
                type: [String, Number], // FIXME why both types?
            },
            highlight: {
                type: Boolean,
            },
            lazy: {
                type: Boolean,
                default: true
            },
        },
        computed: {
            ...mapState(['networkId']),
            imageUrl() {
                return `${getApi()}/network/${this.networkId}/image/${this.id}`;
            },
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
