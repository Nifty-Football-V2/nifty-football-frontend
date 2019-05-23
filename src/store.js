import Vue from 'vue';
import Vuex from 'vuex';
import { ethers } from 'ethers';
import Web3 from 'web3';
// import createLogger from 'vuex/dist/logger';

import CardsApiService from './services/api/cardsApi.service';

import BlindPackContractService from './services/contracts/blindPackContract.service';
import NotificationService from './services/notification.service';

import ThreeBoxService from './services/api/threeBox.service';
import BlindPackPriceService from './services/contracts/blindPackPrice.service';

import { initializeAssist, onboardUser } from './services/assist.service';

import { contracts } from 'nifty-football-contract-tools';
import { dotDotDotAccount, lookupEtherscanAddress } from './utils';

Vue.use(Vuex);

export default new Vuex.Store({
    // plugins: debug ? [createLogger()] : [],
    state: {
        networkId: 1,
        networkName: null,
        etherscanUrl: 'https://etherscan.io',
        showInstallMMBanner: false,

        ethAccount: null,
        ethAccountDotDotDot: null,
        flags: null,
        squad: null,
        cards: null,

        web3: null,
        mobileDevice: false,

        // API Services
        cardsApiService: new CardsApiService(),
        threeBoxService: new ThreeBoxService(),
        notificationService: new NotificationService(),

        // Contract Service
        blindPackService: null,
        blindPackPriceService: new BlindPackPriceService(),
    },
    mutations: {
        showInstallMMBanner(state, showInstallMMBanner) {
            state.showInstallMMBanner = showInstallMMBanner;
        },
        ethAccount(state, ethAccount) {
            console.log('Setting ethAccount', ethAccount);

            state.ethAccount = ethers.utils.getAddress(ethAccount);
            state.ethAccountDotDotDot = dotDotDotAccount(state.ethAccount);
            state.threeBoxService.setAccount(state.ethAccount);
        },
        squad(state, squad) {
            state.squad = squad;
        },
        cards(state, cards) {
            state.cards = cards;
        },
        flags(state, flags) {
            state.flags = flags;
        },
        mobileDevice(state, mobileDevice) {
            state.mobileDevice = mobileDevice;
        },
        etherscanUrl(state, etherscanUrl) {
            state.etherscanUrl = etherscanUrl;
        },
        web3(state, web3) {
            console.log(`Setting web3 for network [${state.networkId}]`, web3);
            state.web3 = web3;

            state.blindPackService = new BlindPackContractService(state.networkId, web3, state.ethAccount);
            state.threeBoxService.setProvider(state.web3.givenProvider);
        },
        networkId(state, networkId) {
            state.networkId = networkId;
            // Override the default network of mainnet if we are switching
            console.log(`Setting network ID [${state.networkId}] on services`);

            state.cardsApiService.setNetworkId(networkId);
            state.notificationService.setNetworkId(networkId);
            state.blindPackPriceService.setNetworkId(networkId);

            state.networkName = contracts.getNetwork(networkId);
        },
    },
    actions: {
        async bootstrapApp({commit, dispatch}) {
            dispatch('loadFlags');
            commit('etherscanUrl', lookupEtherscanAddress(1));
        },
        async bootstrapWeb3({commit, dispatch}) {
            console.log('Bootstrapping application');
            try {
                const web3 = new Web3(window.ethereum || (window.web3 && window.web3.currentProvider));

                // Reload the account logic if we see a change
                // coinbase on android doesn't have 'on' method defined on provider
                window.ethereum && window.ethereum.on && window.ethereum.on('accountsChanged', (accounts) => {
                    console.log('accountsChanged', accounts);
                    const account = accounts[0];
                    commit('ethAccount', account);
                    dispatch('bootstrapWeb3');
                });

                initializeAssist(web3);

                // full state object returned by assist: https://github.com/blocknative/assist#state
                let userEnvironment;
                try {
                    userEnvironment = await onboardUser();
                } catch (rejectedState) {
                    // user exited onboarding
                    userEnvironment = rejectedState;
                }

                // Available state parameters that come back from call to onboard
                const {
                    mobileDevice,
                    accountAddress,
                    userCurrentNetworkId
                } = userEnvironment;

                // user exited onboarding without logged in MM account
                if (!accountAddress) {
                    commit('showInstallMMBanner', true);
                    return;
                }

                // user onboarded sucessfully
                commit('showInstallMMBanner', false);
                console.log(`Account`, accountAddress);
                commit('ethAccount', accountAddress);

                console.log(`Working on network [${userCurrentNetworkId}]`);

                commit('networkId', userCurrentNetworkId);
                commit('etherscanUrl', lookupEtherscanAddress(userCurrentNetworkId));
                commit('web3', web3);
                commit('mobileDevice', mobileDevice);

                dispatch('loadSquad');
            } catch (e) {
                console.error(`Something went big bang`, e);
            }
        },
        async loadSquad({commit, state}) {
            console.log('Loading squad for account', state.ethAccount);
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
        async loadFlags({commit, state}) {
            console.log('Loading flags');
            const data = await state.cardsApiService.loadFlags();
            commit('flags', data.flags);
        },
    }
});
