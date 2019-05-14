<template>
    <span v-b-tooltip.hover :title="account"> {{ currentSquadName }}</span>
</template>

<script>
    import {mapState} from 'vuex';

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
