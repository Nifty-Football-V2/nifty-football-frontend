<template>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom" v-if="isDev">
            <locale-changer></locale-changer>
            <div class="container">
                <a class="navbar-brand" href="#">&nbsp;</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/buy" class="nav-link">{{ $t('nav.buy') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">{{ $t('nav.about') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/play" class="nav-link">{{ $t('nav.play') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/marketplace" class="nav-link">{{ $t('nav.marketplace') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/leaderboards" class="nav-link">{{ $t('nav.leaderboards') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/account" class="nav-link">{{ $t('nav.account') }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <router-view class="text-center pb-5"/>

        <vue-snotify></vue-snotify>

        <footer class="text-center">
            <a href="https://twitter.com/NiftyFootball" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="ml-3 mr-3 text-primary"/>
            </a>
            <a href="https://www.instagram.com/niftyfootball/" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="ml-3 mr-3 text-primary"/>
            </a>
            <!--<a href="https://discord.gg/gcbWFf" target="_blank">-->
            <!--<font-awesome-icon :icon="['fab', 'discord']" size="2x" class="ml-3 mr-3 text-primary"/>-->
            <!--</a>-->
            <a href="https://t.me/niftyfootball" target="_blank">
                <font-awesome-icon :icon="['fab', 'telegram']" size="2x" class="ml-3 mr-3 text-primary"/>
            </a>
            <a href="https://medium.com/niftyfootball" target="_blank">
                <font-awesome-icon :icon="['fab', 'medium']" size="2x" class="ml-3 mr-3 text-primary"/>
            </a>

            <div class="mt-3">
                Design by <a href="http://www.stanleychow.co.uk/" target="_blank">Stan Chow</a>
            </div>
        </footer>
    </div>
</template>

<script>
    import LocaleChanger from './components/LocaleChanger';
    import {mapState} from 'vuex';

    export default {
        components: {
            LocaleChanger
        },
        data() {
            return {
                isDev: process.env.NODE_ENV !== 'development',
            };
        },
        computed: {
            ...mapState([
                'ethAccount',
                'networkId'
            ])
        },
        created: async function () {


            if (typeof window.ethereum === 'undefined') {

                // FIXME handle this

                alert('Looks like you need a Dapp browser to get started.');
                alert('Consider installing MetaMask!');

            } else {

                // In the case the user has MetaMask installed, you can easily
                // ask them to sign in and reveal their accounts:
                ethereum.enable()
                    .catch((reason) => {
                        // FIXME handle this
                        if (reason === 'User rejected provider access') {
                            // The user didn't want to sign in!
                        } else {
                            // This shouldn't happen, so you might want to log this...
                            alert('There was an issue signing you in.');
                        }
                    })
                    // In the case they approve the log-in request, you'll receive their accounts:
                    .then((accounts) => {

                        const account = accounts[0];
                        this.$store.commit('ethAccount', account);
                        this.$store.dispatch('bootstrapApp');

                        // Reload the account logic if we see a change
                        ethereum.on('accountsChanged', (accounts) => {
                            console.log('accountsChanged', accounts);

                            const account = accounts[0];
                            this.$store.commit('ethAccount', account);
                            this.$store.dispatch('bootstrapApp');
                        });
                    });
            }
        }
    };
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Bungee+Inline');
    @import url('https://fonts.googleapis.com/css?family=Bungee+Inline');
    @import "colours";
    @import '../node_modules/bootstrap/scss/bootstrap';
    @import '../node_modules/bootstrap-vue/src/index.scss';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    p {
        color: $primary;
    }

    body {
        color: $primary;
    }

    h1 {
        font-family: 'Bungee Inline', cursive;
        font-size: 3.25rem;
        color: $primary;
        letter-spacing: 0.5rem;
    }

    h2 {
        font-family: 'Bungee Inline', cursive;
        font-size: 2.5rem;
        color: $primary;
        letter-spacing: 0.5rem;
    }

    h3 {
        color: $primary;
        letter-spacing: 0.15rem;
    }

    h4 {
        font-family: 'Bungee Inline', cursive;
        color: $primary;
    }

    h5 {
        color: $primary;
    }

    .btn-primary {
        color: $body-bg;
    }

    .card {
        .card-title {
            color: $black;
            font-size: 1rem;
        }
    }

    footer {
        margin-bottom: 80px;
        margin-top: 50px;
    }

    /**************************************/
    /* vue-snotify notification overrides */
    /**************************************/

    .snotify {
        max-width: 370px !important;
    }

    $snotify-success: $body-bg;
    $snotify-success-bg: $primary;
    $snotify-success-color: $body-bg;

    $snotify-warning: #F0F0F0;
    $snotify-warning-bg: #F5A623;
    $snotify-warning-color: #F0F0F0;

    $snotify-info: #F0F0F0;
    $snotify-info-bg: #2D2935;
    $snotify-info-color: #F0F0F0;

    $snotify-simple: $black;
    $snotify-simple-bg: $secondary;
    $snotify-simple-color: $black;

    @import "~vue-snotify/styles/material";

    .snotifyToast__body {
        width: 240px !important;
    }

    .notification-icon {
        width: 40px;
        float: left;
        font-size: 24px;
    }

    .notification-msg {
        padding-left: 30px;

        a {
            color: #F0F0F0;
            text-decoration: underline;
        }
    }
</style>
