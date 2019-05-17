<template>
    <div class="container-fluid mt-3">
        <page-title :text="$tc('activity.title')"></page-title>

        <div class="row pb-4 text-center" v-if="loading">
            <div class="col mb-5 text-primary">
                <loading></loading>
            </div>
        </div>

        <div v-if="!loading && activity && activity.length > 0">
            <div class="row">
                <div class="col mb-3 text-left">
                    <code>{{ $tc('activity.last_players', 0, { limit }) }}</code>
                </div>
            </div>

            <div class="row">
                <div class="col-6 col-sm-2 mb-5" v-for="rank in activity" v-bind:key="rank.tokenId">
                    <div class="text-center">
                        <card :card="rank"></card>
                    </div>
                    <div>
                        <img src="../assets/yourCard.svg" v-if="isMine(rank.owner)" style="max-height: 25px"/>
                    </div>
                </div>
            </div>

            <ten-min-warning></ten-min-warning>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import {mapState} from 'vuex';
    import Loading from '../components/Loading';
    import Card from '../components/Card';
    import PageTitle from '../components/PageTitle';
    import TenMinWarning from '../components/TenMinWarning';

    export default {
        components: {TenMinWarning, PageTitle, Card, Loading},
        mixins: [Vue2Filters.mixin],
        data() {
            return {
                activity: [],
                limit: 11,
                loading: false
            };
        },
        computed: {
            ...mapState([
                'cardsApiService',
                'ethAccount',
            ]),
        },
        methods: {
            setOrder(field) {
                return this.order ? this.order = field : this.order;
            },
            isMine(owner) {
                if (!this.ethAccount) return false;

                return owner.toUpperCase() === this.ethAccount.toUpperCase();
            },
            countMyCards() {
                if (!this.ethAccount && !this.activity) return 0;

                return this.activity.filter(ranking => ranking.owner.toUpperCase() === this.ethAccount.toUpperCase()).length;
            }
        },
        async created() {
            const loadActivity = async () => {
                this.loading = true;
                this.cardsApiService.loadLatestCards(this.limit)
                    .then((activity) => {
                        this.activity = activity;
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            };

            this.$store.watch(
                () => this.cardsApiService.network,
                () => loadActivity()
            );

            if (this.cardsApiService.network) {
                loadActivity();
            }
        },
    };
</script>

<style lang="scss">
    @import "../colours";

</style>
