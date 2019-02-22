<template>
    <div class="container mb-5">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.account') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="loading" v-if="loading">
            <p>{{ $t('common.loading') }}</p>
        </div>

        <div class="row pb-4" v-if="cards">
            <div class="col-3 mt-5" v-for="card in cards">
                <div class="card" style="min-height: 250px">
                    <img :src="`http://localhost:5000/futbol-cards/us-central1/api/network/5777/image/${card.tokenId}`" style="max-width: 100px;" class="mx-auto m-3"/>
                    <div class="card-body">
                        <span class="float-right badge badge-primary">{{ card.attributeAvg }}</span>
                        <h5 class="card-title">{{ card.fullName }}</h5>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">{{ card.positionText }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data () {
            return {
                loading: false,
                cards: null,
                error: null
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

                const res = await axios.get('http://localhost:5000/futbol-cards/us-central1/api/network/5777/token/account/0x0df0cc6576ed17ba870d6fc271e20601e3ee176e');
                this.loading = false;
                this.cards = res.data.tokenDetails;
            }
        }
    };
</script>

<style lang="scss">
</style>