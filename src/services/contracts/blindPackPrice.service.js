import {ethers} from 'ethers';

import {abi, contracts} from 'nifty-football-contract-tools';

export default class BlindPackPriceService {

    constructor(networkId = 1) {
        this.networkId = networkId;
    }

    setNetworkId(networkId) {
        this.networkId = networkId;
    }

    async getRegularPriceModel() {
        if (this.priceModel) {
            return this.priceModel;
        }

        const {address} = contracts.getNiftyFootballBlindPack(this.networkId);
        this.contract = new ethers.Contract(address, abi.NiftyFootballTradingCardBlindPackAbi, ethers.getDefaultProvider());

        this.priceModel = {
            'reg-3': (await this.contract.totalPrice(3)),
            'reg-6': (await this.contract.totalPrice(6)),
            'reg-9': (await this.contract.totalPrice(9)),
        };
        return this.priceModel;
    }

    async getElitePriceModel() {
        if (this.elitePriceModel) {
            return this.elitePriceModel;
        }

        const {address} = contracts.getNiftyFootballEliteBlindPack(this.networkId);
        this.eliteContract = new ethers.Contract(address, abi.NiftyFootballTradingCardEliteBlindPackAbi, ethers.getDefaultProvider());

        this.elitePriceModel = {
            'elite-3': (await this.eliteContract.totalPrice(3)),
            'elite-6': (await this.eliteContract.totalPrice(6)),
            'elite-9': (await this.eliteContract.totalPrice(9)),
        };
        return this.elitePriceModel;
    }

    async getCreditsForAccount(account) {
        return this.contract.credits(account);
    }

}
