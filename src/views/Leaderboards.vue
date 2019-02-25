<template>
    <div class="container mb-5">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.leaderboards') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="loading" v-if="loading">
            <p>{{ $t('common.loading') }}...</p>
        </div>

        <div class="row mb-5" v-else v-for="(card, index) in orderBy(limitBy(cards, 10), order,  -1)" v-bind:key="card.tokenId">
            <div class="col-5 text-right">
               <h1>{{ index + 1 }}</h1>
            </div>
            <div class="col-3">
                <card :card="card"></card>
            </div>
        </div>
    </div>
</template>
<script>
    /* global web3 */
    import axios from 'axios';
    import Vue2Filters from 'vue2-filters';
    import Card from '../components/Card';

    export default {
        components: {Card},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                loading: false,
                cards: null,
                error: null,
                account: null,
                order: 'attributeAvg',
            };
        },
        created () {
            // fetch the data when the view is created and the data is
            this.fetchData();
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData'
        },
        methods: {
            async fetchData () {
                this.error = this.post = null;
                this.loading = true;

                this.account = web3.eth.accounts[0];

                const res = await axios.get(`http://localhost:5000/futbol-cards/us-central1/api/network/5777/token/account/${this.account}`);
                this.loading = false;
                this.cards = res.data.tokenDetails;
                console.log(res.data);
            },
            dotDotDot: function (account) {
                if (account && account.startsWith(`0x`)) {
                    return account.substr(0, 4) + '...' + account.substr(account.length - 4, account.length);
                }
                return account;
            },
        }
    };
</script>