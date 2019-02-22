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
                            <router-link to="/account" class="nav-link">{{ $t('nav.account') }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view class="text-center"/>
    </div>
</template>

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
        background-color: #247209;
        font-family: 'Roboto', sans-serif;
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
</style>
<script>
    import LocaleChanger from './components/LocaleChanger';

    export default {
        components: {LocaleChanger}
    };
</script>