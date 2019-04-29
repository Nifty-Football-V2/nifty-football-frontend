<template>
    <div>
        <strong v-if="!form.editMode">{{ currentSquadName }}</strong>

        <a href="#" @click="editEthAccountName" class="edit" v-if="!form.editMode">{{ $t('common.edit') }}</a>

        <b-form @submit="onSubmit" @reset="onReset" v-if="form.editMode" inline>
            <b-form-input
                    id="squad-name"
                    class="squad-name-input mr-2"
                    v-model="form.squadName"
                    type="text"
                    required
                    maxlength="150"
                    placeholder="Squad Name"
            ></b-form-input>

            <b-button type="submit" variant="primary" class="mr-2">Save</b-button>
            <b-button type="reset" variant="danger">Cancel</b-button>
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
                    editMode: false
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
                console.log("onReset");
                this.form.editMode = false;
                this.loadAccountAndSquad();
            },
            onSubmit() {
                console.log("onSubmit");

                this.threeBoxService.setSquadName(this.form.squadName)
                    .then(() => {
                        this.loadAccountAndSquad();
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
    .squad-name-input {
        width: 200px;
    }
</style>
