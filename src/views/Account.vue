<template>
    <div class="container mb-5">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.account') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="loading" v-if="loading">
            <p>{{ $t('common.loading') }}...</p>
        </div>

        <div class="row" v-if="cards">
            <div class="col text-left">
                <h4>{{ dotDotDot(account) }} <a href="#" @click="editAccountName" class="edit">{{ $t('common.edit') }}</a></h4>
            </div>

            <div class="col text-right">
                {{ $t('common.sort_by') }}:
                <a href="#" @click="setOrder('position')" class="edit">{{ $t('common.position') }}</a>
                <a href="#" @click="setOrder('attributeAvg')" class="edit">{{ $t('common.rating') }}</a>
                <a href="#" @click="setOrder('nationality')" class="edit">{{ $t('common.nationality') }}</a>
                <a href="#" @click="setOrder('fullName')" class="edit">{{ $t('common.name') }}</a>
            </div>
        </div>

        <div class="row" v-if="cards">
            <div class="col-3 mb-5" v-for="card in orderBy(cards, order,  -1)" v-bind:key="card.tokenId">
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
                order: 'position',
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
            editAccountName () {
                this.account = `Real Madras`;
                console.log(`edit`, this.account);
            },
            dotDotDot: function (account) {
                if (account && account.startsWith(`0x`)) {
                    return account.substr(0, 4) + '...' + account.substr(account.length - 4, account.length);
                }
                return account;
            },
            setOrder: function (field) {
                return this.order ? this.order = field : this.order;
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