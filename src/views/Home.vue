<template>
    <div class="container text-center">
        <div class="row pb-5 mb-3 mt-3">
            <div class="d-none d-md-block col header-text text-left">
                <a href="https://medium.com/niftyfootball" target="_blank">BLOG</a>
            </div>
            <div class="col-3 header-text text-left">
                <img src="../assets/live_ropsten.svg" style="width: 300px;" class="img-fluid"/>
            </div>
            <div class="d-none d-md-block col header-text text-center">
                <img src="../assets/gray_logo.svg"  style="width: 75px;" class="mx-auto"/>
            </div>
            <div class="d-none d-md-block col header-text">
                &nbsp;
            </div>
            <div class="col header-text text-right">
                <router-link to="/buy" class="">
                    <img src="../assets/start_collecting.svg" style="width: 200px; cursor: pointer;" class="mx-auto"/>
                </router-link>
            </div>
        </div>

        <router-link to="/buy" class="">
            <img src="../assets/logo.svg" style="max-height: 350px" class="pb-5"/>
        </router-link>

        <div class="row">
            <div class="col">
                <div class="header-text mb-5">KICKING OFF MAY 8TH 2019.</div>
            </div>
        </div>

        <div class="row pb-5">
            <div class="col">
                <div>
                    <router-link to="/buy" class="">
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
                    </router-link>
                </div>
            </div>
        </div>

        <div class="row justify-content-sm-center pb-5">
            <div class="col col-md-4">
                <form action="https://niftyfootball.us20.list-manage.com/subscribe/post?u=71540c8d07bdbeb5dcf53c9ba&amp;id=3f4c4bba1e" method="post" id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input type="text" name="b_f7fcffd059cde2df667ed71e0_b59497a580" tabindex="-1" value="">
                    </div>

                    <div class="mc-field-group">
                        <div class="header-text-sm mb-2">GET UPDATES</div>
                        <label for="mce-EMAIL" class="sr-only">Email Address</label>
                        <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL" placeholder="you@email.com">
                        <img src="../assets/join_list.svg" style="max-height: 50px; cursor: pointer;" class="mx-auto mt-3" onclick="document.getElementById('mc-embedded-subscribe-form').submit();"/>
                    </div>

                    <div id="mce-responses">
                        <div class="response text-warning" id="mce-error-response" style="display:none"></div>
                        <div class="response text-success" id="mce-success-response" style="display:none"></div>
                    </div>
                </form>

            </div>
        </div>

        <div class="row">
            <div class="col">
                <!--<router-link to="/buy" class="">-->
                <!--<img src="../assets/start_collecting.svg" style="max-height: 50px; cursor: pointer;" class="mx-auto"/>-->
                <!--</router-link>-->

                <p class="mt-5">
                    Join the community on our <a href="https://t.me/niftyfootball" target="_blank">telegram channel</a>
                    or <router-link to="/buy" class="">test on ROPSTEN</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'home',
        data () {
            return {};
        },
        computed: {},
        components: {},
        methods: {},
    };
</script>