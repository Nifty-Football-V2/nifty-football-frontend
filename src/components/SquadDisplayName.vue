<template>
    <span>
        <span :id="'tooltip-' + account">{{ calcSquadName || calcAccountName(account) }}</span>
        <b-tooltip :target="'tooltip-' + account" placement="right" v-if="account !== currentSquadName">
            <strong>{{account}}</strong>
        </b-tooltip>
    </span>
</template>

<script>
    import {mapState} from 'vuex';
    import {dotDotDotAccount} from "../utils";

    export default {
        name: 'squad-display-name',
        props: ['account'],
        data() {
            return {
                currentSquadName: null
            };
        },
        computed: {
            ...mapState([
                'threeBoxService',
            ]),
            calcSquadName() {
                if (this.currentSquadName) {
                    return dotDotDotAccount(this.currentSquadName);
                }
                return "";
            },
        },
        methods: {
            calcAccountName(acc) {
                return dotDotDotAccount(acc);
            },
        },
        watch: {
            account: function (newVal, oldVal) {
                if (newVal && newVal !== oldVal) {
                    this.threeBoxService.getBox3SquadDisplayName(newVal)
                        .then((name) => {
                            this.currentSquadName = name;
                        });
                }
            }
        },
        created() {
            if (this.account) {
                this.threeBoxService.getBox3SquadDisplayName(this.account)
                    .then((name) => {
                        this.currentSquadName = name;
                    });
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../colours";

</style>
