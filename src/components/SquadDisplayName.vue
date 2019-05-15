<template>
    <span>
        <span :id="'tooltip-' + account">{{ calcSquadName(currentSquadName) }}</span>
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
        },
        methods: {
            calcSquadName() {
                if (this.currentSquadName) {
                    return dotDotDotAccount(this.currentSquadName);
                }
            },
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
