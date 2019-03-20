<template>
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.team') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row" v-if="account && ethAccount">
            <div class="col text-left">
                <h4>Real Madras</h4>
            </div>
        </div>

        <h3 class="mb-4">Strikers</h3>
        <div class="row" v-if="account">
            <div class="offset-3">&nbsp;</div>
            <div class="col-3  mb-5" v-for="card in limitBy(getBestStrikers(), 2)" v-bind:key="card.tokenId">
                <card :card="card"></card>
            </div>
        </div>

        <h3 class="mb-4">Midfield</h3>
        <div class="row" v-if="account">
            <div class="col-3 mb-5" v-for="card in limitBy(getBestMidfielders(), 4)" v-bind:key="card.tokenId">
                <card :card="card"></card>
            </div>
        </div>

        <h3 class="mb-4">Defence</h3>
        <div class="row" v-if="account">
            <div class="col-3 mb-5" v-for="card in limitBy(getBestDefenders(), 4)" v-bind:key="card.tokenId">
                <card :card="card"></card>
            </div>
        </div>

        <h3 class="mb-4">Goalkeeper</h3>
        <div class="row" v-if="account">
            <div class="offset-5">&nbsp;</div>
            <div class="col-3 mb-5" v-for="card in limitBy(getBestGoalkeeper(), 1)" v-bind:key="card.tokenId">
                <card :card="card"></card>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import Card from '../components/Card';
    import { mapState } from 'vuex';
    import _ from 'lodash';

    export default {
        components: {Card},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                order: 'position',
                nickname: null,
            };
        },
        computed: {
            ...mapState(['account', 'ethAccount']),
        },
        methods: {
            editEthAccountName () {
                this.nickname = `Real Madras`;
            },
            dotDotDot: function (ethAccount) {
                if (ethAccount && ethAccount.startsWith(`0x`)) {
                    return ethAccount.substr(0, 4) + '...' + ethAccount.substr(ethAccount.length - 4, ethAccount.length);
                }
                return ethAccount;
            },
            getBestGoalkeeper: function () {
                if (this.account) {
                    const res = this.account.tokenDetails.filter(c => c.position === 0);
                    return _.orderBy(res, ['attributeAvg'], ['desc']);
                }

                return [];
            },
            getBestDefenders: function () {
                if (this.account) {
                    const res = this.account.tokenDetails.filter(c => c.position === 1);
                    return _.orderBy(res, ['attributeAvg'], ['desc']);
                }

                return [];
            },
            getBestMidfielders: function () {
                if (this.account) {
                    const res = this.account.tokenDetails.filter(c => c.position === 2);
                    return _.orderBy(res, ['attributeAvg'], ['desc']);
                }

                return [];
            },
            getBestStrikers: function () {
                if (this.account) {
                    const res = this.account.tokenDetails.filter(c => c.position === 3);
                    return _.orderBy(res, ['attributeAvg'], ['desc']);
                }

                return [];
            },
        }
    };
</script>

<style lang="scss">
    .edit {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        padding-left: 15px;
    }
</style>