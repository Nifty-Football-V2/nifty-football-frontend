<template>
    <div>
        <a href="#" @click="editEthAccountName" class="small" v-if="!form.editMode">
            <span class="h1-box" v-if="!form.editMode">{{ currentSquadName }}</span>
        </a>

        <b-form @reset="onReset" v-if="form.editMode" inline>
            <b-form-input
                    id="squad-name"
                    class="squad-name-input mr-2"
                    type="text"
                    required
                    maxlength="150"
                    placeholder="Squad Name"
                    v-model="form.squadName"
                    :disabled="form.saving"></b-form-input>
            <b-button @click="onSaveSquad" variant="secondary" class="mr-2" :disabled="form.saving">{{$tc('common.add_team_name')}}</b-button>
            <b-button type="reset" variant="default" :disabled="form.saving">{{$tc('common.cancel')}}</b-button>
        </b-form>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'squad-name',
        props: [],
        data() {
            return {
                currentSquadName: null,
                form: {
                    squadName: null,
                    editMode: false,
                    saving: false
                }
            };
        },
        computed: {
            ...mapState([
                'networkId',
                'threeBoxService',
                'ethAccount'
            ]),
        },
        methods: {
            editEthAccountName() {
                this.form.editMode = true;
            },
            onReset() {
                this.form.editMode = false;
                this.loadAccountAndSquad();
            },
            onSaveSquad() {
                this.form.saving = true;
                this.threeBoxService.setSquadName(this.form.squadName)
                    .finally(() => {
                        this.loadAccountAndSquad();
                        this.form.editMode = false;
                        this.form.saving = false;
                    });
            },
            loadAccountAndSquad() {
                this.threeBoxService.getSquadName()
                    .then(({found, name}) => {
                        this.currentSquadName = name;
                        if (found) {
                            this.form.squadName = name;
                        }
                    });
            }
        },
        watch: {},
        created() {
            this.$store.watch(
                () => this.ethAccount,
                () => this.loadAccountAndSquad()
            );

            if (this.ethAccount) {
                this.loadAccountAndSquad();
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../colours";

    .h1-box {
        background-color: $black;
        color: $white;
        font-family: 'CrackerJack', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        border: 3px solid $purple;
        box-shadow: 0 6px 0 0 $purple;
        margin-bottom: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 50px;
        padding-right: 50px;
        letter-spacing: 2px;
    }
</style>
