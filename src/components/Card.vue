<template>
    <div>
        <div class="front" v-if="front">
            <div class="card" @click="toggle">
                <div class="card-footer bg-dark m-2">
                    <div class="row">
                        <div class="col-5 text-primary text-left small">#{{ ('00000' + card.tokenId).slice(-6) | uppercase }}</div>
                        <div class="col-7 text-center brand">
                            {{ $t('common.nifty_football') }}
                        </div>
                    </div>
                </div>
                <div class="card-body bg-primary m-2 svg-holder">
                    <div class="attribute-holder">
                        <span class="numberCircle">{{ card.attributeAvg }}</span>
                    </div>
                    <img :src="`http://localhost:5000/futbol-cards/us-central1/api/network/5777/image/${card.tokenId}`" style="max-width: 100px;" class="mx-auto m-3"/>
                    <div class="flag-holder">
                        <img :src="require(`../assets/flags/${card.nationality}.png`)" style="height: 50px">
                    </div>
                </div>
                <div class="card-body bg-dark m-2">
                    <h5 class="card-title text-light">{{ card.fullName | uppercase }}</h5>
                </div>
                <div class="card-footer">
                    <small class="text-muted">{{ card.positionText }}</small>
                </div>
            </div>
        </div>
        <div class="back" v-else>
            <div class="card" @click="toggle">
                <div class="card-footer bg-dark m-2">
                    <div class="row">
                        <div class="col-5 text-primary text-left small">#{{ ('00000' + card.tokenId).slice(-6) | uppercase }}</div>
                        <div class="col-7 text-center brand">
                            {{ $t('common.nifty_football') }}
                        </div>
                    </div>
                </div>
                <div class="card-body bg-light m-2 text-dark">
                    <div class="row mt-5">
                        <div class="col text-right">Speed</div>
                        <div class="col text-left"><span class="numberCircle">{{ card.speed }}</span></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col text-right">Skill</div>
                        <div class="col text-left"><span class="numberCircle">{{ card.skill }}</span></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col text-right">Intelligence</div>
                        <div class="col text-left"><span class="numberCircle">{{ card.intelligence }}</span></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col text-right">Strength</div>
                        <div class="col text-left"><span class="numberCircle">{{ card.strength }}</span></div>
                    </div>
                    <div class="row mt-5">
                        <div class="col">
                            <small class="text-muted">Owner:</small>
                            <code>{{ dotDotDot(card.owner) }}</code>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <small class="text-muted">{{ card.nationalityText }}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: ['card'],
        data () {
            return {
                front: true,
            };
        },
        methods: {
            toggle () {
                this.front = !this.front;
            },
            dotDotDot: function (ethAccount) {
                if (ethAccount && ethAccount.startsWith(`0x`)) {
                    return ethAccount.substr(0, 4) + '...' + ethAccount.substr(ethAccount.length - 4, ethAccount.length);
                }
                return ethAccount;
            },
        },
    };
</script>

<style lang="scss">
    @import "../colours";

    .attribute-holder {
        position: absolute;
        right: 10px;
        top: 70px
    }

    .flag-holder {
        position: absolute;
        top: 340px;
        left: 10px;
    }

    .numberCircle {
        font-size: 1.3rem;
        border-radius: 50%;

        width: 45px;
        height: 45px;
        padding: 10px;

        background: $body-bg;
        border: 2px solid $primary;
        color: $secondary;
        text-align: center;
    }

    .brand {
        font-size: 0.65rem;
        letter-spacing: 0.15rem;
    }

    .card {
        height: 32rem;

        .svg-holder {
            height: 20rem;
        }

        .card-title {
            margin-bottom: 0;
        }
    }
</style>