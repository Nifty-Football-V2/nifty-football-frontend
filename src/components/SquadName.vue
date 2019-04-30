<template>
    <div class="text-center">
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
                    :disabled="form.saving"
            ></b-form-input>

            <b-button @click="onSaveSquad" variant="primary" class="mr-2" :disabled="form.saving">Save</b-button>
            <b-button type="reset" variant="default" :disabled="form.saving">Cancel</b-button>
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
                        console.log(name);
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
</style>
