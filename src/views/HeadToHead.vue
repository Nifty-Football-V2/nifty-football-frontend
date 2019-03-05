<template>
    <div class="container mb-5">

        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.play') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <button class="btn btn-primary" @click="grantApprovalForAll" v-if="ethAccount && !isApprovedForAll">
                    Grant Approval For All
                </button>
                <button class="btn btn-info" @click="removeApprovalForAll" v-if="ethAccount && isApprovedForAll">
                    Remove Approval For All
                </button>
            </div>
            <div class="col-6">
                <form>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label col-form-label-sm">Your Squad</label>
                        <div class="col-sm-10">
                            <select class="form-control form-control" v-model="selectedCard" v-if="squad">
                                <option>--</option>
                                <option v-for="card in squad.tokenDetails"
                                        :value="card"
                                        :key="card.tokenId"
                                        v-if="playerNotInGameAlready(card.tokenId)">
                                    {{card.fullName | uppercase}} |
                                    {{card.nationalityText | uppercase}} |
                                    {{card.positionText}} |
                                    {{card.attributeAvg}}
                                </option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-2">
                <button class="btn btn-info" @click="createNewGame"
                        v-if="selectedCard"
                        :disabled="!ethAccount || !isApprovedForAll">
                    Create Game
                </button>
            </div>
        </div>

        <hr/>

        <div class="row">
            <div class="col">
                <h4>Your Games</h4>
            </div>
        </div>

        <div class="row">
            <div class="col-4" v-for="game in ownerTokensInGames">
                <strong>
                    {{game.cards.homeCard.fullName}} of {{game.cards.homeCard.nationalityText}}
                </strong>
                <h4>VS</h4>
                <div v-if="game.cards.awayCard.fullName">
                    <strong>
                        {{game.cards.awayCard.fullName}} of {{game.cards.awayCard.nationalityText}}
                    </strong>
                </div>
                <div v-else>
                    <strong>...</strong>
                </div>
                
                <p>
                    <strong>
                        {{game.game.state | toHumanState}}
                    </strong>
                </p>

                <!-- Game DRAW -->
                <div>
                    <button class="btn btn-primary" @click="withdrawFromGame(game.game.gameId)">
                        Withdraw
                    </button>
                </div>
                <!-- Game DRAW -->
                <div v-if="game.game.state === 4" @click="reMatch(game.game.gameId)">
                    <button class="btn btn-primary">
                        Rematch
                    </button>
                </div>
                <hr/>
            </div>
            <div class="col mx-auto" v-if="ownerTokensInGames.length < 1">
                You've not entered any games yet ⚽
            </div>
        </div>

        <hr/>

        <div class="row">
            <div class="col">
                <h4>All games</h4>
            </div>
        </div>

        <div class="row">
            <div class="col-4" v-for="game in openGames">
                <div v-if="game.cards.homeCard.fullName">
                    <strong>
                        {{game.cards.homeCard.fullName}} of {{game.cards.homeCard.nationalityText}}
                    </strong>
                    <div>
                        <small>{{game.cards.homeCard.positionText}} avg. {{game.cards.homeCard.attributeAvg}}</small>
                    </div>
                </div>
                <div v-else>
                    <strong>...</strong>
                </div>
                <h4>VS</h4>
                <div v-if="game.cards.awayCard.fullName">
                    <strong>
                        {{game.cards.awayCard.fullName}} of {{game.cards.awayCard.nationalityText}}
                    </strong>
                    <div>
                        <small>{{game.cards.awayCard.positionText}} avg. {{game.cards.awayCard.attributeAvg}}</small>
                    </div>
                </div>
                <div v-else>
                    <strong>...</strong>
                </div>

                <p>
                    <strong>
                        {{game.game.state | toHumanState}}
                    </strong>
                </p>

                <!-- Game OPEN -->
                <div v-if="game.game.state === 1">
                    <button class="btn btn-primary"
                            :disabled="!selectedCard || !isApprovedForAll"
                            @click="joinGame(game.game.gameId)">
                        Challenge
                    </button>
                </div>
                <!-- Game DRAW -->
                <div v-if="game.game.state === 4 && youArePlay(game)">
                    <button class="btn btn-primary" @click="reMatch(game.game.gameId)">Rematch</button>
                </div>
                <hr/>
            </div>
            <div class="col mx-auto" v-if="openGames.length < 1">
                No open games ⚽
            </div>
        </div>

    </div>
</template>
<script>
    import Card from '../components/Card';
    import {mapState} from 'vuex';
    import _ from 'lodash';

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
            playerNotInGameAlready(tokenId) {
                return !_.some(this.ownerTokensInGames, ({game}) => {
                    const awayTokenId = game.awayTokenId;
                    const homeTokenId = game.homeTokenId;
                    return tokenId === awayTokenId || tokenId === homeTokenId;
                });
            },
            youArePlay(game) {
                const awayTokenId = game.awayTokenId;
                const homeTokenId = game.homeTokenId;
                return _.some(this.squad.tokenIds, (tokenId) => {
                    return tokenId === awayTokenId || tokenId === homeTokenId;
                });
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
            withdrawFromGame(gameId) {
                if (this.headToHeadContractService && gameId) {
                    this.headToHeadContractService.withdrawFromGame(gameId)
                        .then(() => {
                            this.loadOpenGames();
                            this.loadGamesSquadArePlaying();
                        });
                }
            },
            reMatch(gameId) {
                if (this.headToHeadContractService && gameId) {
                    this.headToHeadContractService.reMatch(gameId)
                        .then(() => {
                            this.loadOpenGames();
                            this.loadGamesSquadArePlaying();
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
            joinGame(gameId) {
                if (this.headToHeadContractService && this.selectedCard && gameId) {
                    this.headToHeadContractService.joinGame(gameId, this.selectedCard.tokenId)
                        .then(() => {
                            this.loadOpenGames();
                            this.loadGamesSquadArePlaying();
                        });
                }
            },
            async loadOpenGames() {
                const {openGames} = await this.headToHeadApiService.getOpenGames();
                this.openGames = openGames;
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
