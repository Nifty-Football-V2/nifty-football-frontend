<template>
    <div>
        <div class="container-fluid">
            <div class="row pb-4 text-center" v-if="!squad">
                <div class="col mb-5 text-primary mx-auto">
                    <loading></loading>
                </div>
            </div>
            <div class="row pb-4 text-center" v-else-if="squad && squad.length === 0">
                <div class="col mb-5 text-primary mx-auto">
                    <router-link to="/buy" class="nf-link">{{ $t('common.missing_squad_message') }}</router-link>
                </div>
            </div>

            <div class="row mb-5" v-if="ethAccount && (squad && squad.length > 0)">
                <div class="d-none d-sm-block col text-left">
                    <router-link to="/rankings" class="sub-nav mr-2">{{ $t('nav.rankings') }}</router-link> |
                    <router-link to="/team" class="sub-nav ml-2">{{ $t('nav.team') }}</router-link>
                </div>
                <div class="col text-center">
                    <squad-name></squad-name>
                </div>
                <div class="d-none d-sm-block col text-right">
                </div>
            </div>

            <div class="row mt-3" v-if="squad && cards">
                <div class="col-6 col-md-2"
                     v-for="tokenId in squad" v-bind:key="tokenId">
                    <card :card="cards[tokenId]"></card>
                </div>
            </div>

            <div class="row pb-4 mt-5 text-center" v-else-if="squad && squad.length > 0">
                <div class="col">
                    <router-link to="/buy" class="nf-link">Add to your squad?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import {mapState} from 'vuex';
    import Loading from '../components/Loading';
    import SquadName from "../components/SquadName";
    import Card from "../components/Card";

    export default {
        components: {Card, SquadName, Loading},
        mixins: [Vue2Filters.mixin],
        data() {
            return {
                order: 'position',
            };
        },
        computed: {
            ...mapState([
                'squad',
                'cards',
                'ethAccount'
            ]),
        },
        methods: {
            setOrder: function (field) {
                return this.order ? this.order = field : this.order;
            },
        },
        created() {
            const loadSquad = () => {
                this.$store.dispatch('loadSquad');
            };

            this.$store.watch(
                () => this.ethAccount,
                () => loadSquad()
            );

            if (this.ethAccount) {
                loadSquad();
            }
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
