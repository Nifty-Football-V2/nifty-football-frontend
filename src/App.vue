<template>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom">
            <locale-changer></locale-changer>
            <div class="container">
                <a class="navbar-brand" href="#">&nbsp;</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
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
        <router-view class="text-center"/>
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
    import LocaleChanger from './components/LocaleChanger';

    export default {
        components: {LocaleChanger},
        created: async function () {
            // presume we can pick up a eth account from DEMO!
            this.$store.dispatch('loadAccount');
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

    body {
        color: $white;
    }

    h1 {
        font-family: 'Bungee Inline', cursive;
        font-size: 3.25rem;
        color: $white;
        letter-spacing: 0.5rem;
    }

    h2 {
        font-family: 'Bungee Inline', cursive;
        font-size: 2.5rem;
        color: $white;
        letter-spacing: 0.5rem;
    }

    h3 {
        color: $white;
        letter-spacing: 0.15rem;
    }

    h4 {
        font-family: 'Bungee Inline', cursive;
        color: $white;
    }

    h5 {
        color: $white;
    }

    p {
        color: $white;
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