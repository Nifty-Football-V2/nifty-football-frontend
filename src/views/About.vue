<template>
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <page-title :text="$t('nav.about')"></page-title>
            </div>
        </div>
        <div class="row mb-4 pb-4">
            <div class="col text-left">
                Welcome to Nifty Football, an Ethereum powered football collectibles game, with provably scarce digital trading cards available to purchase.
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-12 col-sm-6 text-left">
                <page-sub-title text="Regular" variant="orange"></page-sub-title>

                <p>Regular packs will contain the all core attributes and traits.</p>

                <table class="table table-striped mt-2">
                    <tbody>
                    <tr>
                        <th>Positions</th>
                        <th>%</th>
                    </tr>
                    <tr>
                        <td>Goalkeeper</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Defender</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>Midfielder</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>Striker</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <th>Nationalities</th>
                        <th>%</th>
                    </tr>
                    <tr>
                        <td>England</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>USA</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>Italy</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Argentina</td>
                        <td>20</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12 col-sm-6 text-left">
                <page-sub-title text="Elite" variant="blue"></page-sub-title>

                <p>Elite packs will contain different and extra possibilities than regular packs.</p>

                <table class="table table-striped mt-2">
                    <tbody>
                    <tr>
                        <th>Positions</th>
                        <th>%</th>
                    </tr>
                    <tr>
                        <td>Goalkeeper</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Defender</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>Midfielder</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>Striker</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <th>Nationalities (+2)</th>
                        <th>%</th>
                    </tr>
                    <tr>
                        <td>England</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>USA</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Italy</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Argentina</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Brazil</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Russia</td>
                        <td>20</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col text-center">
                <router-link to="/buy" class="btn btn-secondary btn-lg">
                    Start Collecting
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import PageTitle from '../components/PageTitle';
    import PageSubTitle from '../components/PageSubTitle';

    export default {
        components: {PageSubTitle, PageTitle}
    };
</script>