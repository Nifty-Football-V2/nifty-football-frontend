<template>
    <div>
        <div class="container-fluid mt-3">
            <div class="row mb-5" v-if="ethAccount">
                <div class="d-none d-sm-block col text-left">
                </div>
                <div class="col-8 text-center">
                    <squad-name></squad-name>
                </div>
                <div class="d-none d-sm-block col text-right">
                </div>
            </div>

            <div class="row mb-5" v-else>
                <div class="d-none d-sm-block col text-left">
                </div>
                <div class="col text-center">
                    <page-title text="Squad"></page-title>
                </div>
                <div class="d-none d-sm-block col text-right">
                </div>
            </div>

            <div class="row pb-4 text-center" v-if="loading">
                <div class="col mb-5 text-primary mx-auto">
                    <loading></loading>
                </div>
            </div>

            <div class="row mt-3" v-if="!loading  && squad.length > 0">
                <div class="col-6 col-lg-2 col-md-3 col-sm-3 mb-2" v-for="card in squad">
                    <card :card="card"></card>
                </div>
            </div>

            <div v-if="!loading && squad.length === 0">
                <no-squad></no-squad>
            </div>

        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import {mapState} from 'vuex';
    import Loading from '../components/Loading';
    import SquadName from '../components/SquadName';
    import Card from '../components/Card';
    import NoSquad from '../components/NoSquad';
    import PageTitle from '../components/PageTitle';

    export default {
        components: {PageTitle, NoSquad, Card, SquadName, Loading},
        mixins: [Vue2Filters.mixin],
        data() {
            return {
                order: 'position',
                squad: [],
                loading: false
            };
        },
        computed: {
            ...mapState([
                'ethAccount',
                'cardsApiService'
            ]),
        },
        methods: {
            setOrder: function (field) {
                return this.order ? this.order = field : this.order;
            },
        },
        created() {
            const loadSquad = () => {
                this.loading = true;
                this.cardsApiService.loadSquad(this.ethAccount)
                    .then((squad) => {
                        this.squad = squad;
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            };

            this.$store.watch(
                () => this.ethAccount,
                () => loadSquad()
            );

            this.$store.watch(
                () => this.cardsApiService.network,
                () => loadSquad()
            );

            if (this.ethAccount) {
                loadSquad();
            }

            this.$store.dispatch('bootstrapWeb3');
        }
    };
</script>

<style lang="scss">
    @import "../colours";

    .edit {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        padding-left: 15px;
    }

    .sub-nav {
        color: $black;
        text-transform: uppercase;
    }
</style>
