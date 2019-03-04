<template>
    <div class="container mb-5">

        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.play') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row">
            <div class="col">

            </div>
        </div>


        <div class="row">

            {{openGames}}

        </div>

    </div>
</template>
<script>
    import Card from '../components/Card';
    import {mapState} from 'vuex';

    export default {
        components: {Card},
        data() {
            return {
                openGames: []
            };
        },
        computed: {
            ...mapState([
                'account',
                'ethAccount',
                'headToHeadApiService',
                'headToHeadContractService',
            ]),
        },
        methods: {
            
        },
        created() {

            const loadData = async () => {
                this.openGames = await this.headToHeadApiService.getOpenGames();
            };

            this.$store.watch(
                () => this.$store.state.networkId,
                () => loadData()
            );

        }
    };
</script>
