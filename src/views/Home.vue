<template>
    <div class="container-fluid text-center">
        <div class="row pb-3 mb-3 mt-2">
            <div class="col-6 col-md-3 header-text text-left">
                <img src="../assets/live_ropsten.svg" class="img-fluid mx-auto"/>
            </div>
            <div class="d-none d-md-block col header-text text-left">
                &nbsp;
                <!--<a href="https://medium.com/niftyfootball" target="_blank">BLOG</a>-->
            </div>
            <div class="d-none d-md-block col header-text text-center">
                <img src="../assets/gray_logo.svg" style="width: 75px;" class="mx-auto"/>
            </div>
            <div class="d-none d-md-block col header-text">
                &nbsp;
            </div>
            <div class="col-6 col-md-3 header-text text-right">
                <router-link to="/buy" class="">
                    <img src="../assets/start_collecting.svg" style="cursor: pointer;" class="img-fluid"/>
                </router-link>
            </div>
        </div>

        <router-link to="/buy" class="pb-3 pt-3">
            <img src="../assets/logo.svg" style="max-height: 300px" class=""/>
        </router-link>

        <div class="row pb-3 pt-5">
            <div class="col">
                <div class="header-text mb-5">KICKING OFF MAY 8TH 2019</div>
            </div>
        </div>

        <div class="row pb-5 pt-5 bg-secondary">
            <div class="col">&nbsp;</div>
            <div class="col">
                <div>
                    <div class="header-text mb-5">BUILD A TEAM</div>
                    <router-link to="/buy" class="">
                        <img src="../assets/build.png" style="cursor: pointer;" class="img-fluid"/>
                    </router-link>
                </div>
            </div>
            <div class="col">&nbsp;</div>
        </div>

        <div class="row justify-content-sm-center pb-3 pt-5">
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

        <router-link to="/buy" class="pb-3 pt-1">
            <img src="../assets/start_collecting.svg" style="cursor: pointer;" class="img-fluid"/>
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