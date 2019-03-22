<template>
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.account') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row" v-if="squad && ethAccount">
            <div class="col text-left">
                <h4>{{ nickname || dotDotDot(ethAccount) }}
                    <a href="#" @click="editEthAccountName" class="edit">{{ $t('common.edit') }}</a>
                </h4>
            </div>

            <div class="col">
                <router-link to="/team" class="edit">{{ $t('nav.team') }}</router-link>
            </div>

            <div class="col text-right">
                {{ $t('common.sort_by') }}:
                <a href="#" @click="setOrder('position')" class="edit">{{ $t('common.position') }}</a>
                <a href="#" @click="setOrder('attributeAvg')" class="edit">{{ $t('common.rating') }}</a>
                <a href="#" @click="setOrder('nationality')" class="edit">{{ $t('common.nationality') }}</a>
                <a href="#" @click="setOrder('fullName')" class="edit">{{ $t('common.name') }}</a>
            </div>
        </div>

        <div class="row" v-if="squad">
            <div class="col-3 mb-5" v-for="card in orderBy(squad.tokenDetails, order,  -1)" v-bind:key="card.tokenId">
                <img :src="`http://localhost:5000/futbol-cards/us-central1/api/network/5777/image/${card.tokenId}`" class="mx-auto"/>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import Card from '../components/Card';
    import {mapState} from 'vuex';

    export default {
        components: {Card},
        mixins: [Vue2Filters.mixin],
        data() {
            return {
                order: 'position',
                nickname: null,
            };
        },
        computed: {
            ...mapState([
                'squad',
                'ethAccount'
            ]),
        },
        methods: {
            editEthAccountName() {
                this.nickname = `Real Madras`;
            },
            dotDotDot: function (ethAccount) {
                if (ethAccount && ethAccount.startsWith(`0x`)) {
                    return ethAccount.substr(0, 4) + '...' + ethAccount.substr(ethAccount.length - 4, ethAccount.length);
                }
                return ethAccount;
            },
            setOrder: function (field) {
                return this.order ? this.order = field : this.order;
            },
        }
    };
</script>

<style lang="scss">
    .edit {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        padding-left: 15px;
    }
</style>
