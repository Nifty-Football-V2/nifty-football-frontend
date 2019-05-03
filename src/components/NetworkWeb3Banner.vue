<template>
    <div class="container-fluid mt-0" v-if="!web3Enabled" v-cloak>
        <div class="row no-metamask text-left">
            <div class="col-2 mt-2 mb-2">
                <img src="../assets/metamask.png" style="max-height: 35px" class="mr-3"/>
            </div>
            <div class="col-10 mt-2 mb-2 text-left">
                Please install the <code><a href="https://metamask.io/" target="_blank">METAMASK</a></code> or similar Web3 provider and
                switch to a test network!
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'network-web3-banner',
        data () {
            return {};
        },
        computed: {
            ...mapState([
                'networkId',
                'web3Enabled',
            ])
        },
        components: {},
        methods: {},
    };
</script>

<style lang="scss"></style>