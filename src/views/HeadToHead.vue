<template>
    <div class="container mb-5">

        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.head2head') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <button class="btn btn-primary" @click="grantApprovalForAll" v-if="ethAccount && !isApprovedForAll">
                    Grant Approval For All
                </button>
                <a href="#" class="small" @click="removeApprovalForAll" v-if="ethAccount && isApprovedForAll">
                    Remove Approval For All
                </a>
            </div>
            <div class="col-6">
                <form>
                    <select class="form-control form-control" v-model="selectedCard" v-if="squad">
                        <option :value="undefined">--</option>
                        <option v-for="card in squad.tokenDetails"
                                :value="card"
                                :key="card.tokenId"
                                v-if="playerNotInGameAlready(card.tokenId)">
                            {{card.fullName | uppercase}} ({{card.attributeAvg}})
                        </option>
                    </select>
                </form>
            </div>
            <div class="col-2">
                <button class="btn btn-primary" @click="createNewGame"
                        v-if="selectedCard"
                        :disabled="!ethAccount || !isApprovedForAll">
                    Create Game
                </button>
            </div>
        </div>

        <!--<div class="row">-->
        <!--<div class="col-4" v-for="game in ownerTokensInGames">-->
        <!--#{{game.game.gameId}}-->
        <!--<strong>-->
        <!--{{game.cards.homeCard.fullName}} ({{game.cards.homeCard.attributeAvg}})-->
        <!--</strong>-->
        <!--<h4>VS</h4>-->
        <!--<div v-if="game.cards.awayCard.fullName">-->
        <!--<strong>-->
        <!--{{game.cards.awayCard.fullName}}-->
        <!--</strong>-->
        <!--</div>-->
        <!--<div v-else>-->
        <!--<strong>...</strong>-->
        <!--</div>-->

        <!--<p>-->
        <!--<strong>-->
        <!--{{game.game.state | toHumanState}}-->
        <!--</strong>-->
        <!--</p>-->

        <!--&lt;!&ndash; Game DRAW &ndash;&gt;-->
        <!--<div>-->
        <!--<a href="#" class="small" @click="withdrawFromGame(game.game.gameId)">-->
        <!--Withdraw-->
        <!--</a>-->
        <!--</div>-->
        <!--&lt;!&ndash; Game DRAW &ndash;&gt;-->
        <!--<div v-if="game.game.state === 4" @click="reMatch(game.game.gameId)">-->
        <!--<button class="btn btn-primary">-->
        <!--Rematch-->
        <!--</button>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="col mx-auto" v-if="ownerTokensInGames.length < 1">-->
        <!--You've not entered any games yet ⚽-->
        <!--</div>-->
        <!--</div>-->

        <div class="row mt-5">
            <div class="col-12" v-for="game in openGames" v-bind:key="game.id">
                <div class="row mt-5">
                    <div class="col-4">
                        <card :card="game.cards.homeCard" style="width: 300px" v-if="game.cards.homeCard"></card>
                        <div v-if="game.game.state !== 5 && youArePlay(game)" class="text-right mt-2">
                            <a href="#" :disabled="!isApprovedForAll" @click="withdrawFromGame(game.game.gameId)">
                                Withdraw
                            </a>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div>
                            <small>#{{game.game.gameId}}: <i>{{game.game.state | toHumanState}}</i></small>
                        </div>
                        <h2 class="mt-5">VS</h2>
                        <div v-if="selectedCard && game.game.state === 1 && !youArePlay(game) && bothCardsHaveAChanceOfWinning(game)" class="mt-5">
                            <button class="btn btn-primary btn-lg"
                                    :disabled="!isApprovedForAll"
                                    @click="joinGame(game.game.gameId)">
                                Battle
                            </button>
                        </div>
                        <div v-if="game.game.state === 4 && youArePlay(game)"
                             class="mt-5">
                            <button class="btn btn-primary btn-lg"
                                    :disabled="!isApprovedForAll"
                                    @click="reMatch(game.game.gameId)">
                                Re-match
                            </button>
                        </div>
                    </div>
                    <div class="col-4">
                        <card :card="selectedCard" style="width: 300px"
                              v-if="selectedCard && playerNotAlreadyPlaying(game, selectedCard)">
                        </card>
                        <card :card="game.cards.awayCard" style="width: 300px"
                              v-else-if="game.cards.awayCard && game.cards.awayCard.tokenId">
                        </card>
                        <h1 v-else>?</h1>
                    </div>
                </div>

                <!-- Game DRAW -->
                <div v-if="game.game.state === 4 && youArePlay(game)">
                    <button class="btn btn-primary" @click="reMatch(game.game.gameId)">Rematch</button>
                </div>
            </div>
            <div class="col mx-auto" v-if="openGames && openGames.length < 1">
                No open games ⚽
            </div>
        </div>

    </div>
</template>
<script>
    import Card from '../components/Card';
    import { mapState } from 'vuex';
    import _ from 'lodash';
    import NotificationService from '../services/notification.service';

    export default {
        components: {Card},
        data () {
            return {
                openGames: [],
                ownerTokensInGames: [],
                isApprovedForAll: false,
                selectedCard: null,
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
            playerNotInGameAlready (tokenId) {
                return !_.some(this.ownerTokensInGames, ({game}) => {
                    const awayTokenId = game.awayTokenId;
                    const homeTokenId = game.homeTokenId;
                    return tokenId === awayTokenId || tokenId === homeTokenId;
                });
            },
            bothCardsHaveAChanceOfWinning (game) {
                const playingCard = game.game.awayTokenId !== 0 ? game.cards.awayCard : game.cards.homeCard;

                const playingAttributes = [
                    playingCard.speed,
                    playingCard.intelligence,
                    playingCard.strength,
                    playingCard.skill,
                ];
                const selectedAttributes = [
                    this.selectedCard.speed,
                    this.selectedCard.intelligence,
                    this.selectedCard.strength,
                    this.selectedCard.skill,
                ];

                let playerHasAChance = false;
                let selectedHasAChance = false;

                for (let i = 0; i < 4; i++) {
                    if (playingAttributes[i] < selectedAttributes[i]) {
                        selectedHasAChance = true;
                    } else {
                        playerHasAChance = true;
                    }
                }
                // console.log(playingAttributes, selectedAttributes, playerHasAChance && selectedHasAChance);
                return playerHasAChance && selectedHasAChance;
            },
            youArePlay (game) {
                const awayTokenId = game.game.awayTokenId;
                const homeTokenId = game.game.homeTokenId;
                return _.some(this.squad.tokenIds, (tokenId) => {
                    return tokenId === awayTokenId || tokenId === homeTokenId;
                });
            },
            playerNotAlreadyPlaying (game) {
                const awayTokenId = game.game.awayTokenId;
                const homeTokenId = game.game.homeTokenId;
                return this.selectedCard && (this.selectedCard.tokenId !== awayTokenId && this.selectedCard.tokenId !== homeTokenId);
            },
            loadAccountApproval () {
                if (this.footballCardsContractService) {
                    this.footballCardsContractService.isApprovedForAll(this.ethAccount)
                        .then((approved) => {
                            this.isApprovedForAll = approved;
                        });
                }
            },
            grantApprovalForAll () {
                if (this.footballCardsContractService) {
                    this.footballCardsContractService.grantApprovedForAll()
                        .then(() => {
                            this.loadAccountApproval();
                        });
                }
            },
            removeApprovalForAll () {
                if (this.footballCardsContractService) {
                    this.footballCardsContractService.removeApprovedForAll()
                        .then(() => {
                            this.loadAccountApproval();
                        });
                }
            },
            withdrawFromGame (gameId) {
                if (this.headToHeadContractService && gameId) {
                    this.headToHeadContractService.withdrawFromGame(gameId)
                        .then(() => {
                            this.loadOpenGames();
                            this.loadGamesSquadArePlaying();
                        });
                }
            },
            reMatch (gameId) {
                if (this.headToHeadContractService && gameId) {
                    this.headToHeadContractService.reMatch(gameId)
                        .then(() => {
                            this.loadOpenGames();
                            this.loadGamesSquadArePlaying();
                        });
                }
            },
            createNewGame () {
                if (this.headToHeadContractService && this.selectedCard) {
                    this.headToHeadContractService.createGame(this.selectedCard)
                        .then(() => {
                            this.loadOpenGames();
                            this.loadGamesSquadArePlaying();
                        });
                }
            },
            joinGame (gameId) {
                if (this.headToHeadContractService && this.selectedCard && gameId) {
                    this.headToHeadContractService.joinGame(gameId, this.selectedCard.tokenId)
                        .then((receipt) => {
                            const events = this.headToHeadContractService.parseLog(receipt);
                            console.log(`events`, events);
                            if (events) {
                                const notificationService = new NotificationService();
                                //UNSET, OPEN, HOME_WIN, AWAY_WIN, DRAW, CLOSED
                                const result = events[0].values.result.toNumber();
                                console.log(result);
                                if (result === 3) {
                                    notificationService.showSuccessNotification('Yasssss! You won!');
                                }
                                else if (result === 2) {
                                    notificationService.showFailureNotification('Gutted. You lost!');
                                }
                                else {
                                    notificationService.showNeutralNotification('It\'s a draw...');
                                }
                            }
                            this.loadOpenGames();
                            this.loadGamesSquadArePlaying();
                        });
                }
            },
            async loadOpenGames () {
                const {openGames} = await this.headToHeadApiService.getOpenGames();
                this.openGames = openGames;
            },
            async loadGamesSquadArePlaying () {
                this.ownerTokensInGames = await this.headToHeadApiService.getGamesForTokens(this.squad.tokenIds);
            }
        },
        watch: {
            ethAccount: {
                handler () {
                    this.loadAccountApproval();
                }
            },
            squad: {
                handler () {
                    this.loadGamesSquadArePlaying();
                }
            },
        },
        created () {

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

<style lang="scss">
    h4 {
        margin: 0;
    }
</style>

