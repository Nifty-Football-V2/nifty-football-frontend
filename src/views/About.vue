<template>
    <div class="container-fluid mt-3">
        <div class="row pb-4">
            <div class="col">
                <page-title :text="$t('nav.about')"></page-title>
            </div>
        </div>
        <div class="row mb-4 pb-4">
            <div class="col text-left">
                Welcome to Nifty Football, an Ethereum powered football collectibles game, with provably scarce digital
                trading cards available to purchase.
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-12 col-sm-6 text-left">
                <page-sub-title text="Regular" variant="orange"></page-sub-title>

                <p>Regular packs will contain the all core attributes and traits.</p>

                <loading v-if="loading"></loading>

                <table class="table table-striped mt-2" v-if="regular">
                    <tbody>
                    <!-- Positions -->
                    <tr>
                        <th>Positions</th>
                        <th>%</th>
                    </tr>
                    <tr v-for="(value, key) in regular.positions" :key="key">
                        <td>{{key}}</td>
                        <td>{{value}}</td>
                    </tr>

                    <!-- Nationalities -->
                    <tr>
                        <th>Nationalities</th>
                        <th>%</th>
                    </tr>
                    <tr v-for="(value, key) in regular.nationalities" :key="key">
                        <td>{{key}}</td>
                        <td>{{value}}</td>
                    </tr>

                    <!-- COLOURS -->
                    <tr>
                        <th>Colours</th>
                        <th>%</th>
                    </tr>
                    <tr v-for="(value, key) in regular.colours" :key="key">
                        <td>{{key}}</td>
                        <td>{{value.percentage}}</td>
                    </tr>

                    <!-- Kits -->
                    <tr>
                        <th>Kits</th>
                        <th>%</th>
                    </tr>
                    <tr v-for="(value, key) in regular.kits" :key="key">
                        <td>{{key}}</td>
                        <td>{{value}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12 col-sm-6 text-left">
                <page-sub-title text="Elite" variant="blue"></page-sub-title>

                <p>Elite packs will contain different and extra possibilities than regular packs.</p>

                <loading v-if="loading"></loading>

                <table class="table table-striped mt-2" v-if="elite">
                    <tbody>
                    <!-- Positions -->
                    <tr>
                        <th>Positions</th>
                        <th>%</th>
                    </tr>
                    <tr v-for="(value, key) in elite.positions" :key="key">
                        <td>{{key}}</td>
                        <td>{{value}}</td>
                    </tr>

                    <!-- Nationalities -->
                    <tr>
                        <th>Nationalities</th>
                        <th>%</th>
                    </tr>
                    <tr v-for="(value, key) in elite.nationalities" :key="key">
                        <td>{{key}}</td>
                        <td>{{value}}</td>
                    </tr>

                    <!-- COLOURS -->
                    <tr>
                        <th>Colours</th>
                        <th>%</th>
                    </tr>
                    <tr v-for="(value, key) in elite.colours" :key="key">
                        <td>{{key}}</td>
                        <td>{{value.percentage}}</td>
                    </tr>

                    <!-- Kits -->
                    <tr>
                        <th>Kits</th>
                        <th>%</th>
                    </tr>
                    <tr v-for="(value, key) in elite.kits" :key="key">
                        <td>{{key}}</td>
                        <td>{{value}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col text-center">
                <router-link to="/buy" class="btn btn-secondary btn-lg">
                    Start Collecting
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import PageTitle from '../components/PageTitle';
    import PageSubTitle from '../components/PageSubTitle';
    import {mapState} from 'vuex';
    import Loading from "../components/Loading";

    export default {
        components: {Loading, PageSubTitle, PageTitle},
        data() {
            return {
                regular: null,
                elite: null,
                loading: false
            };
        },
        computed: {
            ...mapState([
                'cardsApiService',
            ]),
        },
        methods: {
            async loadRarities() {
                this.loading = true;
                const {regular, elite} = await this.cardsApiService.loadRarities();
                this.loading = false;
                this.regular = regular;
                this.elite = elite;
            }
        },
        async created() {
            if (this.cardsApiService.network) {
                await this.loadRarities();
            }

            this.$store.watch(
                () => this.cardsApiService.network,
                () => this.loadRarities()
            );

        }
    };
</script>
