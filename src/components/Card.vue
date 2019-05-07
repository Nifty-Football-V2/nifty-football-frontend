<template>
    <vue-flip :active-click="true" width="100%" class="card-height">
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

    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575px) {
        .card-height {
            height: 280px;
        }
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767px) {
        .card-height {
            height: 450px;
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991px) {
        .card-height {
            height: 180px;
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) and (max-width: 1199px) {
        .card-height {
            height: 240px;
        }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        .card-height {
            height: 310px;
        }
    }

</style>
