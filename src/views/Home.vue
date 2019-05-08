<template>
    <div class="container-fluid text-center">

        <div class="row pb-0 pt-5 bg-light mt-0">
            <div class="col-4 text-left ml-0" style="position: relative; left: -15px;">
                <img src="../assets/header_image.png" class="img-height"/>
            </div>
            <div class="col-8 text-left">
                <div class="header-text-xxl mb-2 mb-sm-4">
                    FOOTBALL<br/>TRADING CARDS
                </div>
                <div class="header-text-lg mb-2 mb-sm-4">
                    COLLECT. TRADE. PLAY.
                </div>
                <div>
                    <router-link to="/buy" class="mr-sm-3 mr-2 btn btn-secondary btn-lg">
                        Start Collecting
                    </router-link>
                </div>
            </div>
        </div>

        <div class="row pb-5 pt-5 bg-dark">
            <div class="col-md-4">&nbsp;</div>
            <div class="col">
                <div>
                    <div class="header-text mb-5 text-secondary">BUILD A TEAM</div>
                    <router-link to="/buy" class="">
                        <img src="../assets/build.png" style="cursor: pointer;" class="img-fluid"/>
                    </router-link>
                </div>
            </div>
            <div class="col-md-4">&nbsp;</div>
        </div>

        <div class="row justify-content-sm-center pb-3 pt-5 pb-5 bg-light">
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
                        <!--<img src="../assets/join_list.svg" style="max-height: 50px; cursor: pointer;" class="mx-auto mt-3" onclick="document.getElementById('mc-embedded-subscribe-form').submit();"/>-->
                        <b-button variant="secondary" size="lg" class="mt-3" type="submit">Join List</b-button>
                    </div>

                    <div id="mce-responses">
                        <div class="response text-warning" id="mce-error-response" style="display:none"></div>
                        <div class="response text-success" id="mce-success-response" style="display:none"></div>
                    </div>
                </form>

            </div>
        </div>

        <div class="row pb-3 pt-1">
            <div class="col">
                <!--<router-link to="/buy" class="">-->
                <!--<img src="../assets/start_collecting.svg" style="max-height: 50px; cursor: pointer;" class="mx-auto"/>-->
                <!--</router-link>-->

                <p class="mt-5">
                    Join the community on <a href="https://t.me/niftyfootball" target="_blank">telegram</a>
                </p>
            </div>
        </div>

        <router-link to="/buy" class="btn btn-secondary btn-lg">
            Start Collecting
        </router-link>
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

<style lang="scss" scoped>
    @import "../colours";

    .header-text-xxl {
        font-family: 'CrackerJack', sans-serif;
        font-size: 6rem;
        color: $black;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
    }

    .header-text-lg {
        font-family: 'CrackerJack', sans-serif;
        font-size: 3rem;
        color: $blue;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
    }

    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575px) {
        .header-text-xxl {
            font-family: 'CrackerJack', sans-serif;
            font-size: 2rem;
        }

        .header-text-lg {
            font-size: 1rem;
            color: $blue;
        }

        .img-height {
            max-height: 200px;
        }

        .btn-lg {
            font-size: 1rem;
        }
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767px) {
        .header-text-xxl {
            font-family: 'CrackerJack', sans-serif;
            font-size: 2rem;
        }

        .header-text-lg {
            font-size: 1rem;
            color: $blue;
        }

        .img-height {
            max-height: 200px;
        }

        .btn-lg {
            font-size: 1rem;
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991px) {
        .header-text-xxl {
            font-family: 'CrackerJack', sans-serif;
            font-size: 4rem;
        }

        .header-text-lg {
            font-size: 2rem;
            color: $blue;
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) and (max-width: 1199px) {
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }
</style>
