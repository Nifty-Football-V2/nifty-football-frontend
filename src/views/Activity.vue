<template>
    <div class="container-fluid mt-3">
        <page-title text="Activity"></page-title>

        <div class="row pb-4 text-center" v-if="loading">
            <div class="col mb-5 text-primary">
                <loading></loading>
            </div>
        </div>

        <div v-if="!loading && activity && activity.length > 0">
            <div class="row">
                <div class="col mb-3 text-left">
                    <code>Last {{limit}} players</code>
                </div>
            </div>

            <div class="row">
                <div class="col-6 col-sm-2 mb-5" v-for="(rank, index) in activity" v-bind:key="rank.tokenId">
                    <div class="text-center">
                        <card :card="rank"></card>
                    </div>
                    <div>
                        <img src="../assets/yourCard.svg" v-if="isMine(rank.owner)" style="max-height: 25px"/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col text-right mr-2">
                    <p class="small text-muted">* Activity updated every 10 mins</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import { mapState } from 'vuex';
    import Loading from '../components/Loading';
    import Card from '../components/Card';
    import PageTitle from '../components/PageTitle';

    export default {
        components: {PageTitle, Card, Loading},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                activity: [],
                limit: 50,
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
            setOrder (field) {
                return this.order ? this.order = field : this.order;
            },
            isMine (owner) {
                if (!this.ethAccount) return false;

                return owner.toUpperCase() === this.ethAccount.toUpperCase();
            },
            countMyCards () {
                if (!this.ethAccount && !this.activity) return 0;

                return this.activity.filter(ranking => ranking.owner.toUpperCase() === this.ethAccount.toUpperCase()).length;
            }
        },
        async created () {
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

    .numberCircle {
        font-size: 1.3rem;
        border-radius: 50%;

        width: 45px;
        height: 45px;
        padding: 10px;

        background: $tertiary;
        border: 2px solid $primary;
        color: $secondary;
        text-align: center;
    }
</style>
