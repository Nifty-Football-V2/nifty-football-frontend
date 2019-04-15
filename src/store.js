import Vue from 'vue';
import Vuex from 'vuex';
import { ethers } from 'ethers';

import CardsApiService from './services/api/cardsApi.service';
import { lookupEtherscanAddress } from './utils';

import BlindPackContractService from './services/contracts/blindPackContract.service';
import FootballCardsContractService from './services/contracts/footballCardsContract.service';
import HeadToHeadContractService from './services/contracts/headToHeadContract.service';

import HeadToHeadGameApiService from './services/api/headToHeadGameApi.service';
import ThreeBoxService from './services/api/threeBox.service';

Vue.use(Vuex);

/* global web3 */

export default new Vuex.Store({
    state: {
        networkId: 1,
        etherscanUrl: 'https://etherscan.io',
        web3Enabled: false,

        ethAccount: null,
        squad: null,
        web3Provider: null,

        // API Services
        cardsApiService: new CardsApiService(),
        headToHeadApiService: new HeadToHeadGameApiService(),
        threeBoxService: new ThreeBoxService(),

        // Contract Service
        blindPackService: null,
        footballCardsContractService: null,
        headToHeadContractService: null,
    },
    mutations: {
        ethAccount (state, ethAccount) {
            state.ethAccount = ethAccount;
            state.threeBoxService.setAccount(ethAccount);
        },
        squad (state, squad) {
            state.squad = squad;
        },
        etherscanUrl (state, etherscanUrl) {
            state.etherscanUrl = etherscanUrl;
        },
        provider (state, provider) {
            console.log(`Setting provider for network [${state.networkId}]`, provider);
            state.provider = provider;
            state.providerSigner = provider.getSigner();
            state.blindPackService = new BlindPackContractService(state.networkId, state.providerSigner);
            state.footballCardsContractService = new FootballCardsContractService(state.networkId, state.providerSigner);
            state.headToHeadContractService = new HeadToHeadContractService(state.networkId, state.providerSigner);

            state.web3Enabled = true;
            // This needs to not be a etherjs provider...?
            // state.threeBoxService.setProvider(web3.currentProvider);
        },
        networkId (state, networkId) {
            state.networkId = networkId;
            // Override the default network of mainnet if we are switching
            console.log(`Setting network ID [${state.networkId}] on services`);
            state.cardsApiService.setNetworkId(networkId);
            state.headToHeadApiService.setNetworkId(networkId);
        },
    },
    actions: {
        async bootstrapApp ({commit, dispatch}) {
            const provider = new ethers.providers.Web3Provider(web3.currentProvider);

            const {chainId, name} = await provider.getNetwork();
            console.log(`Working on network [${chainId}] [${name}]`);

            commit('networkId', chainId);
            commit('etherscanUrl', lookupEtherscanAddress(chainId));

            commit('provider', provider);
            dispatch('loadSquad');
        },
        async loadSquad ({commit, state}) {
            if (state.ethAccount) {
                const squad = await state.cardsApiService.loadTokensForAccount(state.ethAccount);
                commit('squad', squad);
            }
        },
    }
});
