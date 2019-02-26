import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

/* global web3 */

export default new Vuex.Store({
    state: {
        ethAccount: null,
        account: null,
        restUri: 'http://localhost:5000/futbol-cards/us-central1/api',
    },
    mutations: {
        ethAccount (state, ethAccount) {
            state.ethAccount = ethAccount;
        },
        account (state, account) {
            state.account = account;
        },
    },
    actions: {
        async loadAccount ({commit, state}) {

            const ethAccount = web3.eth.accounts[0];
            commit('ethAccount', ethAccount);

            const res = await axios.get(`${state.restUri}/network/5777/token/account/${state.ethAccount}`);
            const account = res.data;

            commit('account', account);
        }
    }
});
