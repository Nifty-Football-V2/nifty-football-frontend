<template>
    <div class="container mb-5">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.play') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="loading" v-if="loading">
            <p>{{ $t('common.loading') }}...</p>
        </div>

        <div class="row" v-if="cards">
            <div class="col-3">
                <h4>{{ dotDotDot(`0x0df0cC6576Ed17ba870D6FC271E20601e3eE176e`) }}</h4>
            </div>
            <div class="col-6">
                <h4>Vs</h4>
            </div>
            <div class="col-3">
                <h4>Ell's Angels</h4>
            </div>
        </div>

        <div class="row" v-if="cards">
            <div class="col-3">
                <card :card="cards[0]"></card>
            </div>
            <div class="col-6">
                <h2 class="mt-5">Head to Head</h2>
                <br/>
                <button class="btn btn-primary btn-lg pl-4 pr-4">{{ $t('common.play') }}</button>
            </div>
            <div class="col-3">
                <card :card="cards[1]"></card>
            </div>
        </div>
    </div>
</template>
<script>
    /* global web3 */
    import axios from 'axios';
    import Card from '../components/Card';

    export default {
        components: {Card},
        data () {
            return {
                loading: false,
                cards: null,
                error: null,
                account: null,
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