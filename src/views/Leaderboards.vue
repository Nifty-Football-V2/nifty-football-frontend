<template>
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.leaderboards') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row" v-if="squad && ethAccount">
            <div class="col text-left">
                <h4>&nbsp;</h4>
            </div>

            <div class="col text-right">
                <a href="#" @click="setOrder('attributeAvg')" class="edit">{{ $t('common.rating') }}</a>
                <a href="#" @click="setOrder('team')" class="edit">{{ $t('nav.team') }}</a>
            </div>
        </div>

        <div v-if="squad && order === 'attributeAvg'">
            <div class="row mb-5" v-for="(card, index) in orderBy(limitBy(squad.tokenDetails, 10), order,  -1)" v-bind:key="card.tokenId">
                <div class="col-5 text-right">
                    <h1>{{ index + 1 }}</h1>
                </div>
                <div class="col-3">
                    <card :card="card"></card>
                </div>
            </div>
        </div>
        <div v-if="squad && order === 'team'">
            <div class="row mb-5" v-for="(team, index) in teamArray" v-bind:key="team[0]">
                <div class="col-4 text-right">
                    <h1>{{ index + 1 }}</h1>
                </div>
                <div class="col-4 text-right">
                    <h4>{{ team[0] }}</h4>
                </div>
                <div class="col-4 text-left">
                    <span class="numberCircle">{{ team[1] }}</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import Card from '../components/Card';
    import { mapState } from 'vuex';

    export default {
        components: {Card},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                order: 'attributeAvg',
                teamArray: [['Ell\'s Angels', 93], ['Real Madras', 91], ['Athletico Berlin', 86], ['Super Reds', 86], ['Yellow Submarine', 84]],
            };
        },
        computed: {
            ...mapState(['squad', 'ethAccount']),
        },
        methods: {
            setOrder: function (field) {
                return this.order ? this.order = field : this.order;
            },
        }
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
