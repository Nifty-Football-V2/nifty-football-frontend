<template>
    <div>
        <network-web3-banner></network-web3-banner>
        <div class="container">
            <page-header :name="$t('nav.account')"></page-header>

            <div class="row" v-if="squad && ethAccount">
                <div class="col text-left">
                    <strong>{{ nickname || dotDotDot(ethAccount) }}</strong>
                    <!--<a href="#" @click="editEthAccountName" class="edit">{{ $t('common.edit') }}</a>-->
                </div>

                <!--<div class="col">-->
                <!--<router-link to="/team" class="edit">{{ $t('nav.team') }}</router-link>-->
                <!--</div>-->

                <!--<div class="col text-right">-->
                <!--{{ $t('common.sort_by') }}:-->
                <!--<a href="#" @click="setOrder('position')" class="edit">{{ $t('common.position') }}</a>-->
                <!--<a href="#" @click="setOrder('attributeAvg')" class="edit">{{ $t('common.rating') }}</a>-->
                <!--<a href="#" @click="setOrder('nationality')" class="edit">{{ $t('common.nationality') }}</a>-->
                <!--<a href="#" @click="setOrder('fullName')" class="edit">{{ $t('common.name') }}</a>-->
                <!--</div>-->
            </div>

            <div class="row pb-4 text-center" v-if="squad && squad.length === 0">
                <div class="col mb-5 text-primary mx-auto">
                    <loading></loading>
                </div>
            </div>

            <div class="row" v-if="squad">
                <!--<div class="col-3 mb-5" v-for="card in orderBy(squad.tokenDetails, order,  -1)" v-bind:key="card.tokenId">-->
                <div class="col-3 mb-5" v-for="tokenId in squad" v-bind:key="tokenId">
                    <router-link :to="`/card/` + tokenId">
                        <lazy-img-loader :src="tokenId" :id="tokenId"></lazy-img-loader>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue2Filters from 'vue2-filters';
    import { mapState } from 'vuex';
    import LazyImgLoader from '../components/LazyImgLoader';
    import Loading from '../components/Loading';
    import NetworkWeb3Banner from '../components/NetworkWeb3Banner';
    import PageHeader from '../components/PageHeader';

    export default {
        components: {PageHeader, NetworkWeb3Banner, Loading, LazyImgLoader},
        mixins: [Vue2Filters.mixin],
        data () {
            return {
                order: 'position',
                nickname: null,
            };
        },
        computed: {
            ...mapState([
                'squad',
                'ethAccount',
                // 'threeBoxService'
            ]),
        },
        methods: {
            editEthAccountName () {
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
        },
        created () {
            // TODO refresh squad

            const loadAccountAndSquad = async () => {
                this.$store.dispatch('loadSquad');

                // const squadName = await this.threeBoxService.getSquadName();
                // console.log(squadName);
                // this.nickname = squadName;
            };

            this.$store.watch(
                () => this.ethAccount,
                () => loadAccountAndSquad()
            );

            if (this.ethAccount) {
                loadAccountAndSquad();
            }
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
