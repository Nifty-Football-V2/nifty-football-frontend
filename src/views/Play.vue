<template>
    <div class="container mb-5">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('nav.play') }}</h1>
                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <hr/>
                <router-link to="/headtohead" class="btn btn-primary btn-lg pl-4 pr-4 mt-5">{{ $t('common.head_to_head') }}</router-link>
            </div>
            <div class="col text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <hr/>
                <button class="btn btn-primary btn-lg pl-4 pr-4 mt-5" disabled>Prediction Game</button>
            </div>
            <div class="col text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <hr/>
                <button class="btn btn-primary btn-lg pl-4 pr-4 mt-5" disabled>Management Game</button>
            </div>
        </div>
    </div>
</template>
