<template>
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <h1 class="mt-5">{{ $t('common.nifty_football') }}</h1>

                <div>
                    <b-carousel
                            id="players"
                            :interval="2000"
                            fade>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/1.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/2.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/3.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/4.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/5.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/6.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/7.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/8.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/9.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class=""
                                    height="300"
                                    src="../assets/examples/10.svg"
                                    alt="Nifty Football"
                            />
                        </b-carousel-slide>
                    </b-carousel>
                </div>

                <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
            </div>
        </div>

        <div class="row justify-content-sm-center">
            <div class="col col-md-6">
                <form action="https://niftyfootball.us20.list-manage.com/subscribe/post?u=71540c8d07bdbeb5dcf53c9ba&amp;id=3f4c4bba1e" method="post" id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input type="text" name="b_f7fcffd059cde2df667ed71e0_b59497a580" tabindex="-1" value="">
                    </div>

                    <div class="mc-field-group">
                        <div class="form-group">
                            <p class="small">For updates, alpha access, and to receive one free card</p>
                            <label for="mce-EMAIL" class="sr-only">Email Address</label>
                            <div class="input-group">
                                <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL" placeholder="Your email">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="submit">Subscribe</button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div id="mce-responses">
                        <div class="response text-warning" id="mce-error-response" style="display:none"></div>
                        <div class="response text-success" id="mce-success-response" style="display:none"></div>
                    </div>
                </form>

            </div>
        </div>

        <countdown-timer></countdown-timer>
    </div>
</template>

<script>
    /* global web3 */
    import CountdownTimer from '../components/Countdown';

    export default {
        name: 'home',
        data() {
            return {};
        },
        computed: {},
        components: {CountdownTimer},
        methods: {
        },
    };
</script>