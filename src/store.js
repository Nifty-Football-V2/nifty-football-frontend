import Vue from 'vue';
import Vuex from 'vuex';
import {ethers} from 'ethers';

import CardsApiService from "./services/cardsApi.service";
import {lookupEtherscanAddress} from "./utils";
import futballCardsBlindPackAbi from './abi/futballCardsBlindPack';
import BlindPackContractService from "./services/blindPackContract.service";

Vue.use(Vuex);

/* global web3 */

export default new Vuex.Store({
    state: {
        networkId: 1,
        etherscanUrl: 'https://etherscan.io',

        ethAccount: null,
        account: null,
        web3Provider: null,

        // API Services
        cardsApiService: new CardsApiService(),

        // Contract Service
        blindPackService: null
    },
    mutations: {
        ethAccount(state, ethAccount) {
            state.ethAccount = ethAccount;
        },
        account(state, account) {
            state.account = account;
        },
        etherscanUrl(state, etherscanUrl) {
            state.etherscanUrl = etherscanUrl;
        },
        provider(state, provider) {
            state.provider = provider;
            state.providerSigner = provider.getSigner();
            state.blindPackService = new BlindPackContractService(state.networkId, state.providerSigner);
        },
        networkId(state, networkId) {
            state.networkId = networkId;
            // Override the default network of mainnet if we are switching
            if (state.networkId !== 1) {
                state.cardsApiService.setNetworkId(networkId);
            }
        },
    },
    actions: {
        async loadAccount({commit, state}) {

            const provider = new ethers.providers.Web3Provider(web3.currentProvider);

            const {chainId, name} = await provider.getNetwork();
            console.log(`Working on network [${chainId}] [${name}]`);

            commit('networkId', chainId);
            commit('etherscanUrl', lookupEtherscanAddress(chainId));

            commit('provider', provider);

            const results = await state.cardsApiService.loadTokensForAccount(state.ethAccount);
            commit('account', results);
        }
    }
});
