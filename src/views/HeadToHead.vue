<template>
    <div class="container mb-2">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.play') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row" v-if="account">
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

        <div class="row" v-if="account">
            <div class="col-3">
                <card :card="account.tokenDetails[0]"></card>
            </div>
            <div class="col-6">
                <h2 class="mt-5">Head to Head</h2>
                <br/>
                <button class="btn btn-primary btn-lg pl-4 pr-4">{{ $t('common.play') }}</button>
            </div>
            <div class="col-3">
                <card :card="account.tokenDetails[1]"></card>
            </div>
        </div>
    </div>
</template>
<script>
    import Card from '../components/Card';
    import { mapState } from 'vuex';

    export default {
        components: {Card},
        data () {
            return {};
        },
        computed: {
            ...mapState(['account', 'ethAccount']),
        },
        methods: {
            dotDotDot: function (account) {
                if (account && account.startsWith(`0x`)) {
                    return account.substr(0, 4) + '...' + account.substr(account.length - 4, account.length);
                }
                return account;
            },
        }
    };
</script>