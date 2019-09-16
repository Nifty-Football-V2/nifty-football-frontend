<template>
    <div id="app">
        <nifty-football-header :route="$router.currentRoute" :meta="$router.currentRoute.meta"></nifty-football-header>

        <router-view class="pb-3"/>

        <vue-snotify></vue-snotify>

        <footer class="text-center">
            <a href="https://twitter.com/NiftyFootball" target="_blank">
                <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="ml-3 mr-3 text-secondary"/>
            </a>
            <a href="https://www.instagram.com/niftyfootball/" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="ml-3 mr-3 text-secondary"/>
            </a>
            <a href="https://discord.gg/zANdfd" target="_blank">
                <font-awesome-icon :icon="['fab', 'discord']" size="2x" class="ml-3 mr-3 text-secondary"/>
            </a>
            <a href="https://t.me/niftyfootball" target="_blank">
                <font-awesome-icon :icon="['fab', 'telegram']" size="2x" class="ml-3 mr-3 text-secondary"/>
            </a>
            <a href="https://medium.com/niftyfootball" target="_blank">
                <font-awesome-icon :icon="['fab', 'medium']" size="2x" class="ml-3 mr-3 text-secondary"/>
            </a>

            <div class="mt-4 text-muted small">
                <router-link to="/activity" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.activity') }}</router-link>
                <router-link to="/rankings" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.rankings') }}</router-link>
                <router-link to="/rankings" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.league') }}</router-link>
                <router-link to="/about" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.about') }}</router-link>
                <router-link to="/terms" class="ml-sm-3 ml-2 d-block d-sm-inline">{{ $t('nav.terms') }}</router-link>
            </div>

            <div class="mt-4 small text-muted">
                Card Design by <a href="http://www.stanleychow.co.uk/" target="_blank">Stanley Chow</a>
            </div>

            <div class="mt-4 small text-muted">
                Built by <a href="http://blockrocket.tech" target="_blank">BlockRocket</a>
            </div>

            <div class="mt-4 smallest text-muted text-right mr-3" v-if="ethAccountDotDotDot && networkName">
                {{ ethAccountDotDotDot }} on {{ networkName.toUpperCase() }}
            </div>
        </footer>

        <!--        <locale-changer></locale-changer>-->
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import NiftyFootballHeader from './components/NiftyFootballHeader';

    export default {
        components: {
            NiftyFootballHeader,
        },
        data() {
            return {};
        },
        computed: {
            ...mapState([
                'networkName',
                'ethAccountDotDotDot',
            ]),
        },
        created: async function () {
            if (window.location.href.indexOf('__debug') > -1) {
                // eslint-disable-next-line new-cap,no-new
                const vConsole = require('vconsole');
                new vConsole();
            }

            this.$store.dispatch('loadFlags');
        }
    };
</script>

<style lang="scss">
    @font-face {
        font-family: CrackerJack;
        src: url("./assets/CrackerJack.otf") format("opentype");
    }

    @import url('https://fonts.googleapis.com/css?family=Anton');
    @import "colours";
    @import '../node_modules/bootstrap/scss/bootstrap';
    @import '../node_modules/bootstrap-vue/src/index.scss';

    [v-cloak] {
        display: none
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    p {
        color: $black;
    }

    body {
        color: $black;
    }

    h1 {
        font-family: 'Anton', sans-serif;
        font-size: 3.25rem;
        color: $black;
        letter-spacing: 0.1rem;
    }

    h2 {
        font-family: 'Anton', sans-serif;
        font-size: 2.5rem;
        color: $black;
        letter-spacing: 0.1rem;
    }

    h3 {
        font-family: 'Anton', sans-serif;
        color: $black;
        letter-spacing: 0.1rem;
    }

    h4 {
        font-family: 'Anton', sans-serif;
        color: $black;
    }

    h5 {
        color: $black;
    }

    footer {
        margin-bottom: 120px;
        margin-top: 50px;
    }

    code {
        color: $primary;
    }

    .smallest {
        font-size: 0.6rem;
    }

    .crackerjack {
        font-family: 'CrackerJack', sans-serif;
        text-transform: uppercase;
    }

    .nf-link {
        font-family: 'CrackerJack', sans-serif;
        text-transform: uppercase;
        color: $black;
        font-size: 1.2rem;
        cursor: pointer;

        &.nf-link-active {
            color: $secondary;
        }
    }

    .badge {
        font-size: 1rem;
        font-family: 'CrackerJack', sans-serif;
        text-transform: uppercase;
        letter-spacing: 3px;
        background-color: $black;
        padding-right: 10px;
        padding-left: 10px;
        color: $secondary;
    }

    .btn-secondary {
        font-family: 'CrackerJack', sans-serif;
        text-transform: uppercase;
        border: 2px solid $black;
        box-shadow: 0 6px 0 0 $black;
        margin-bottom: 6px;
        padding-left: 50px;
        padding-right: 50px;
    }

    .btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active, .btn-secondary.active, .open > .dropdown-toggle.btn-secondary {
        border: 2px solid $black;
        box-shadow: 0 6px 0 0 $black;
    }

    .header-text {
        font-family: 'CrackerJack', sans-serif;
        font-size: 2rem;
        color: $black;
        letter-spacing: 0.1rem;
        text-transform: uppercase;

        a {
            color: $black;
        }
    }

    .text-purple-lg {
        font-family: 'CrackerJack', sans-serif;
        font-size: 1.5rem;
        color: $purple;
        text-transform: uppercase;
    }

    .text-blue-lg {
        font-family: 'CrackerJack', sans-serif;
        font-size: 1.5rem;
        color: $blue;
        text-transform: uppercase;
    }

    .text-orange-lg {
        font-family: 'CrackerJack', sans-serif;
        font-size: 1.5rem;
        color: $orange;
        text-transform: uppercase;
    }

    .text-lime-lg {
        font-family: 'CrackerJack', sans-serif;
        font-size: 1.5rem;
        color: $lime;
        text-transform: uppercase;
    }

    .header-text-sm {
        font-family: 'CrackerJack', sans-serif;
        font-size: 1.3rem;
        color: $white;
        letter-spacing: 1px;
        text-transform: uppercase;

        a {
            color: $black;
        }
    }

    .form-control {
        /*font-family: 'CrackerJack', sans-serif;*/
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

    .no-metamask {
        background-color: $secondary;

        a {
            color: $black;
        }
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .2s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .75s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
