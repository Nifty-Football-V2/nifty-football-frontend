import { ethers } from 'ethers';

import { abi, contracts } from 'nifty-football-contract-tools';

export default class BlindPackContractService {

    constructor (network, providerSigner) {
        this.network = network;
        this.providerSigner = providerSigner;
        const {address} = contracts.getNiftyFootballBlindPack(network);
        const {address: eliteAddress} = contracts.getNiftyFootballEliteBlindPack(network);
        console.log(eliteAddress);
        this.contract = new ethers.Contract(address, abi.NiftyFootballTradingCardBlindPackAbi, this.providerSigner);
        this.eliteContract = new ethers.Contract(eliteAddress, abi.NiftyFootballTradingCardEliteBlindPackAbi, this.providerSigner);

        console.log(this.eliteContract);
    }

    async getRegularPriceModel () {
        if (this.priceModel) {
            return this.priceModel;
        }

        this.priceModel = {
            'reg-1': (await this.contract.totalPrice(1)),
            'reg-2': (await this.contract.totalPrice(3)),
            'reg-3': (await this.contract.totalPrice(6))
        };
        return this.priceModel;
    }

    // FIXME switch over to Elite blind contract
    async getElitePriceModel () {
        if (this.elitePriceModel) {
            return this.elitePriceModel;
        }

        this.elitePriceModel = {
            'elite-1': (await this.eliteContract.totalPrice(1)),
            'elite-2': (await this.eliteContract.totalPrice(3)),
            'elite-3': (await this.eliteContract.totalPrice(6))
        };
        return this.elitePriceModel;
    }

    async getCreditsForAccount (account) {
        return this.contract.credits(account);
    }

    async buyBlindPack (number, useCredits = false) {

        const gasPrice = await ethers.getDefaultProvider().getGasPrice();

        const totalPrice = await this.contract.totalPrice(number);

        const gasLimit = await this.contract.estimate.buyBatch(number, {
            value: totalPrice
        });

        // Supply zero value if using credits up
        const price = useCredits
            ? 0
            : totalPrice;

        // wait for tx to be mined
        return this.contract.buyBatch(number, {
            // The maximum units of gas for the transaction to use
            gasLimit: gasLimit,
            // The price (in wei) per unit of gas
            gasPrice: gasPrice,
            value: price,
        });

    }

}
