<template>
    <img v-if="src"
         v-lazy="`http://localhost:5000/futbol-cards/us-central1/api/network/5777/image/${id}`"
         :key="'img_' + id"
         :id="'img_' + id"
         alt="Nifty Football Trading Card"/>
</template>

<script>
    export default {
        name: 'lazy-img-loader',
        props: ['src', 'id'],
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
