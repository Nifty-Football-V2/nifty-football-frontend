<template>
    <div class="container mb-5">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.marketplace') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row" v-if="squad">
            <div class="col text-left">
                <h4>&nbsp;</h4>
            </div>
            <div class="col text-right">
                {{ $t('common.sort_by') }}:
                <a href="#" @click="setOrder('position')" class="edit">High-Low</a>
                <a href="#" @click="setOrder('position')" class="edit">Low-High</a>
                <a href="#" @click="setOrder('position')" class="edit">{{ $t('common.position') }}</a>
                <a href="#" @click="setOrder('attributeAvg')" class="edit">{{ $t('common.rating') }}</a>
            </div>
        </div>

        <div class="row" v-if="squad && squad.tokenDetails">
            <div class="col-3 mb-5" v-for="card in orderBy(squad.tokenDetails, order,  -1)" v-bind:key="card.tokenId">
                <card :card="card"></card>
                <div class="row mt-2">
                    <div class="col">
                        <h5>0.834 ETH</h5>
                    </div>
                    <div class="col">
                        <router-link to="/headtohead" class="btn btn-primary pl-4 pr-4">{{ $t('common.buy') }}</router-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    /* global web3 */
    import Vue2Filters from 'vue2-filters';
    import Card from '../components/Card';
    import { mapState } from 'vuex';
    import buyNowMarketplaceAbi from '../abi/buyNowMarketplace';
    import { ethers } from 'ethers';

    export default {
        components: {Card},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                order: 'position',
            };
        },
        computed: {
            ...mapState(['squad', 'ethAccount']),
        },
        methods: {
            setOrder: function (field) {
                return this.order ? this.order = field : this.order;
            },
        },
        created: async function () {
            const provider = new ethers.providers.Web3Provider(web3.currentProvider);
            const signer = provider.getSigner();

            // 5777
            this.buyNowContract = new ethers.Contract(
                '0xccFdbA3880d42a0De4c7407631a0066EE61996aA',
                buyNowMarketplaceAbi.abi,
                signer
            );

            // use API for this..
            this.listed = await this.buyNowContract.listedTokens();
            console.log(this.listed);
        }
    };
</script>

<style lang="scss">
</style>
