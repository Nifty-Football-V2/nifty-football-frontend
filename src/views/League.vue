<template>
    <div class="container-fluid mt-3">
        <page-title text="League"></page-title>

        <div class="row pb-4 text-center" v-if="loading">
            <div class="col mb-5 text-primary">
                <loading></loading>
            </div>
        </div>

        <div v-if="!loading && teams && teams.length > 0">
            <div class="row">
                <div class="col mb-3 text-left">
                    <code>
                        <strong>{{totalComplete}}</strong> full squads / <strong>{{totalPartial}}</strong> incomplete
                        squads
                    </code>
                </div>
            </div>

            <table class="table table-borderless table-striped">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Squad Name</th>
                    <th scope="col">Squad Avg.</th>
                    <th scope="col">Squad Total</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(team, $index) in teams">
                    <th>
                        <h4>#{{$index + 1}}</h4>
                    </th>
                    <td>
                        <squad-display-name :account="team.owner"></squad-display-name>
                    </td>
                    <td>{{team.squadAverage}}</td>
                    <td class="text-muted">{{team.squadTotal}}</td>
                </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import Loading from '../components/Loading';
    import PageTitle from '../components/PageTitle';
    import SquadName from "../components/SquadName";
    import SquadDisplayName from "../components/SquadDisplayName";

    export default {
        components: {SquadDisplayName, SquadName, PageTitle, Loading},
        mixins: [],
        data() {
            return {
                teams: [],
                totalComplete: 0,
                totalPartial: 0,
                loading: false
            };
        },
        computed: {
            ...mapState([
                'cardsApiService',
                'ethAccount',
            ]),
        },
        methods: {},
        async created() {
            const loadTeams = async () => {
                this.loading = true;
                this.cardsApiService.loadTopTeams()
                    .then(async (teams) => {
                        this.teams = teams.results;
                        this.totalComplete = teams.totalComplete;
                        this.totalPartial = teams.totalPartial;
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            };

            this.$store.watch(
                () => this.cardsApiService.network,
                () => loadTeams()
            );

            if (this.cardsApiService.network) {
                loadTeams();
            }
        },
    };
</script>

<style lang="scss">
    @import "../colours";

</style>
