<template>
    <div class="container mb-5">

        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.play') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row">
            <div class="col">
                Is Approved For All: {{isApprovedForAll}}
            </div>
            <div class="col">
                <button class="btn btn-primary" @click="grantApprovalForAll" v-if="ethAccount && !isApprovedForAll">
                    Grant Approval For All
                </button>
                <button class="btn btn-info" @click="removeApprovalForAll" v-if="ethAccount && isApprovedForAll">
                    Remove Approval For All
                </button>
            </div>
        </div>


        <div class="row">
            <div class="col">
                Games you have been part of: {{ownerTokensInGames}}
            </div>
        </div>


        <div class="row" v-if="squad">
            <div class="col">
                <div class="form-group">
                    <label for="exampleFormControlSelect1">
                        Select Squad member to play
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1" v-model="selectedCard">
                        <option>--</option>
                        <option v-for="card in squad.tokenDetails"
                                :value="card"
                                :key="card.tokenId"
                                v-if="playerNotInGameAlready(card)">
                            {{card.fullName | uppercase}} |
                            {{card.nationalityText | uppercase}} |
                            {{card.positionText}} |
                            {{card.attributeAvg}}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    Selected Player: {{selectedCard}}
                </div>
                <div class="form-group" v-if="selectedCard">
                    <button class="btn btn-info" @click="createNewGame">
                        Create Game
                    </button>
                </div>
            </div>
        </div>

        <div class="row">

            {{openGames}}

        </div>

    </div>
</template>
<script>
    import Card from '../components/Card';
    import {mapState} from 'vuex';

    export default {
        components: {Card},
        data() {
            return {
                openGames: [],
                ownerTokensInGames: [],
                isApprovedForAll: false,
                selectedCard: null
            };
        },
        computed: {
            ...mapState([
                'squad',
                'ethAccount',
                'headToHeadApiService',
                'headToHeadContractService',
                'footballCardsContractService',
            ]),
        },
        methods: {
            playerNotInGameAlready(card) {
                // TODO check card not in ownerTokensInGames
                return true;
            },
            loadAccountApproval() {
                if (this.footballCardsContractService) {
                    this.footballCardsContractService.isApprovedForAll(this.ethAccount)
                        .then((approved) => {
                            console.log(this.ethAccount, approved);
                            this.isApprovedForAll = approved;
                        });
                }
            },
            grantApprovalForAll() {
                if (this.footballCardsContractService) {
                    this.footballCardsContractService.grantApprovedForAll()
                        .then(() => {
                            this.loadAccountApproval();
                        });
                }
            },
            removeApprovalForAll() {
                if (this.footballCardsContractService) {
                    this.footballCardsContractService.removeApprovedForAll()
                        .then(() => {
                            this.loadAccountApproval();
                        });
                }
            },
            createNewGame() {
                if (this.headToHeadContractService && this.selectedCard) {
                    this.headToHeadContractService.createGame(this.selectedCard)
                        .then(() => {
                            this.loadOpenGames();
                            this.loadGamesSquadArePlaying();
                        });
                }
            },
            async loadOpenGames() {
                this.openGames = await this.headToHeadApiService.getOpenGames();
            },
            async loadGamesSquadArePlaying() {
                this.ownerTokensInGames = await this.headToHeadApiService.getGamesForTokens(this.squad.tokenIds);
            }
        },
        watch: {
            ethAccount: {
                handler() {
                    this.loadAccountApproval();
                }
            },
            squad: {
                handler() {
                    this.loadGamesSquadArePlaying();
                }
            },
        },
        created() {

            this.$store.watch(
                () => this.$store.state.networkId,
                () => this.loadOpenGames()
            );

            if (this.$store.state.networkId) {
                this.loadOpenGames();
            }

            this.$store.watch(
                () => this.$store.state.footballCardsContractService,
                () => this.loadAccountApproval()
            );

            if (this.$store.state.footballCardsContractService) {
                this.loadAccountApproval();
            }

            this.$store.dispatch('loadSquad');
        }
    };
</script>
