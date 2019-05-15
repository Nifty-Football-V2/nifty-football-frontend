<template>
    <div class="container-fluid mt-3">
        <page-title text="League"></page-title>

        <div class="row pb-4 text-center" v-if="loading">
            <div class="col mb-5 text-primary">
                <loading></loading>
            </div>
        </div>

        <div v-if="!loading && topTeams && topTeams.length > 0">


            <div class="row">
                <div class="col mb-3 text-left">
                    <code>
                        <strong>{{totalComplete}}</strong> full teams / <strong>{{totalPartial}}</strong> incomplete
                        teams
                    </code>
                </div>

                <div class="col mb-3 text-right">
                    <a href="#" class="nf-link mr-3" :class="{'nf-link-active': rankingsFilter === 'top'}"
                       @click="setFilter('top')">Top</a>
                    <a href="#" class="nf-link mr-3" :class="{'nf-link-active': rankingsFilter === 'worst'}"
                       @click="setFilter('worst')">Worst</a>
                </div>
            </div>

            <table class="table table-borderless">
                <tbody>
                <tr v-for="(team, $index) in selectedTeam" :class="{
                        'leader': $index === 0,
                        'top-three': $index > 0 && $index < 3,
                        'top-ten': $index >= 3 && $index <= 9,
                        'others': $index > 9,
                        'mine': ethAccount === team.owner,
                        }"
                        :key="$index">
                    <th>
                        <span>#{{$index + 1}}</span>
                    </th>
                    <td>
                        <squad-display-name :account="team.owner"></squad-display-name>
                    </td>
                    <td>

                        <span v-b-tooltip.hover
                              :title="`Avg. ${team.topTeam.teamAverage} Total ${team.topTeam.teamTotal}`"
                              placement="right"
                              v-if="rankingsFilter === 'top'">
                        {{team.topTeamAverageFloored}}
                       </span>

                        <span v-b-tooltip.hover
                              :title="`Avg. ${team.worstTeam.teamAverage} Total ${team.worstTeam.teamTotal}`"
                              placement="right"
                              v-if="rankingsFilter === 'worst'">
                        {{team.worstTeamAverageFloored}}
                       </span>


                    </td>
                    <!--<td class="text-muted">{{team.teamTotal}}</td>-->
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
    import SquadDisplayName from "../components/SquadDisplayName";

    export default {
        components: {SquadDisplayName, PageTitle, Loading},
        mixins: [],
        data() {
            return {
                rankingsFilter: 'top',
                topTeams: [],
                worstTeams: [],
                selectedTeam: [],
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
        methods: {
            loadTopTeams() {
                this.loading = true;
                this.cardsApiService.loadLeagueTable()
                    .then(async (teams) => {
                        this.topTeams = teams.results.topTeams;
                        this.worstTeams = teams.results.worstTeams;
                        this.totalComplete = teams.totalComplete;
                        this.totalPartial = teams.totalPartial;

                        // Set default to top teams
                        this.selectedTeam = this.topTeams;
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            },
            setFilter: function (type) {
                this.rankingsFilter = type;
                if (type === 'top') {
                    this.selectedTeam = this.topTeams;
                }
                if (type === 'worst') {
                    this.selectedTeam = this.worstTeams;
                }
            },
        },
        async created() {
            this.$store.watch(
                () => this.cardsApiService.network,
                () => this.loadTopTeams()
            );

            if (this.cardsApiService.network) {
                this.loadTopTeams();
            }
        },
    };
</script>

<style lang="scss">
    @import "../colours";

    .leader {
        font-size: 2.5rem;
        color: $orange;
        font-family: 'CrackerJack', sans-serif;
        letter-spacing: 1px;
        border-bottom: 3px solid $orange;
    }

    .top-three {
        font-size: 1.5rem;
        color: $blue;
        font-family: 'CrackerJack', sans-serif;
        letter-spacing: 1px;
        border-bottom: 2px solid $blue;
    }

    .top-ten {
        font-size: 1rem;
        border-bottom: 1px solid $black;
    }

    .others {
        font-size: 1rem;
        color: $gray;
        border-bottom: 1px solid $gray;
    }

    .mine {
        background-color: $lime;
    }
</style>
