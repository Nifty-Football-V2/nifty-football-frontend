import Vue from 'vue';
import Vuex from 'vuex';
import {ethers} from 'ethers';
// import createLogger from 'vuex/dist/logger';

import CardsApiService from './services/api/cardsApi.service';
import {lookupEtherscanAddress} from './utils';

import BlindPackContractService from './services/contracts/blindPackContract.service';
import FootballCardsContractService from './services/contracts/footballCardsContract.service';
import NotificationService from './services/notification.service';

import ThreeBoxService from './services/api/threeBox.service';

Vue.use(Vuex);


/* global web3 */

export default new Vuex.Store({
    // plugins: debug ? [createLogger()] : [],
    state: {
        networkId: 1,
        etherscanUrl: 'https://etherscan.io',
        web3Enabled: false,

        ethAccount: null,
        imageData: null,
        squad: null,
        cards: null,
        web3Provider: null,

        // API Services
        cardsApiService: new CardsApiService(),
        threeBoxService: new ThreeBoxService(),
        notificationService: new NotificationService(),

        // Contract Service
        blindPackService: null,
        footballCardsContractService: null,
    },
    mutations: {
        ethAccount(state, ethAccount) {
            console.log("Setting ethAccount", ethAccount);
            state.ethAccount = ethAccount;
            state.threeBoxService.setAccount(ethAccount);
        },
        squad(state, squad) {
            state.squad = squad;
        },
        cards(state, cards) {
            state.cards = cards;
        },
        imageData(state, imageData) {
            state.imageData = imageData;
        },
        etherscanUrl(state, etherscanUrl) {
            state.etherscanUrl = etherscanUrl;
        },
        provider(state, provider) {
            console.log(`Setting provider for network [${state.networkId}]`, provider);
            state.provider = provider;
            state.providerSigner = provider.getSigner();
            state.blindPackService = new BlindPackContractService(state.networkId, state.providerSigner);
            state.footballCardsContractService = new FootballCardsContractService(state.networkId, state.providerSigner);

            state.web3Enabled = true;

            // This needs to not be a etherjs provider...?
            state.threeBoxService.setProvider(window.ethereum);
        },
        networkId(state, networkId) {
            state.networkId = networkId;
            // Override the default network of mainnet if we are switching
            console.log(`Setting network ID [${state.networkId}] on services`);
            state.cardsApiService.setNetworkId(networkId);
            state.notificationService.setNetworkId(networkId);
        },
    },
    actions: {
        async bootstrapApp({commit, dispatch}) {
            try {

                console.log("Bootstrapping application", window.ethereum);

                const provider = new ethers.providers.Web3Provider(window.ethereum);

                const {chainId, name} = await provider.getNetwork();
                console.log(`Working on network [${chainId}] [${name}]`);

                commit('networkId', chainId);
                commit('etherscanUrl', lookupEtherscanAddress(chainId));

                commit('provider', provider);
                dispatch('loadImageData');
                dispatch('loadSquad');
            } catch (e) {
                console.error(`Something went big bang`, e);
            }
        },
        async loadSquad({commit, state}) {
            console.log("Loading squad for account", state.ethAccount);
            if (state.ethAccount) {
                const squad = await state.cardsApiService.loadTokensForAccount(state.ethAccount);
                commit('squad', squad);

                // FIXME move to API
                if (squad) {

                    const promises = squad.map((id) => state.cardsApiService.loadTokenForTokenId(id));

                    const cards = await Promise.all(promises);

                    const cardsMap = cards.reduce((map, obj) => {
                        map[obj.tokenId] = obj;
                        return map;
                    }, {});

                    commit('cards', cardsMap);
                }
            }
        },
        async loadImageData({commit, state}) {
            console.log("Loading image data");
            const imageData = await state.cardsApiService.loadImageData();
            commit('imageData', imageData);
        },
    }
});
