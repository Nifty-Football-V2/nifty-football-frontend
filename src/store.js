import Vue from 'vue';
import Vuex from 'vuex';
import {ethers} from 'ethers';
import Web3 from 'web3';
// import createLogger from 'vuex/dist/logger';

import CardsApiService from './services/api/cardsApi.service';

import BlindPackContractService from './services/contracts/blindPackContract.service';
import NotificationService from './services/notification.service';

import ThreeBoxService from './services/api/threeBox.service';
import BlindPackPriceService from './services/contracts/blindPackPrice.service';

import { initializeOnboard } from "./services/blocknative.service"

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
        balance: null,
        flags: null,
        web3: null,
        provider: null,
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
            state.web3 = new Web3(state.provider);
            state.blindPackService = new BlindPackContractService(state.networkId, state.web3, state.ethAccount);
            state.threeBoxService.setProvider(state.web3.givenProvider);
        },
        balance(state, balance) {
          state.balance = balance
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
        provider(state, provider) {
          state.provider = provider
        }
    },
    actions: {
        async bootstrapApp({commit, dispatch}) {
            dispatch('loadFlags');
            commit('etherscanUrl', lookupEtherscanAddress(1));
        },
        async bootstrapWeb3({commit}) {
            console.log('Bootstrapping application');
            try {
              const onboard = initializeOnboard({
                address: address => commit('ethAccount', address),
                network: networkId => {
                  commit('networkId', networkId),
                    commit('etherscanUrl', lookupEtherscanAddress(networkId))
                },
                wallet: wallet => commit('provider', wallet.provider),
                balance: balance => commit('balance', balance)
              })
      
              const walletSelected = await onboard.walletSelect()
              const walletReady = walletSelected && (await onboard.walletReady())
              if (!walletReady) {
                commit("showInstallMMBanner", true)
              }
            } catch (e) {
                console.error(`Something went big bang`, e);
            }
        },
        async loadFlags({commit, state}) {
            console.log('Loading flags');
            const data = await state.cardsApiService.loadFlags();
            commit('flags', data.flags);
        },
    }
});
