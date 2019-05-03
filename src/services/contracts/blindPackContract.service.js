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
            'reg-3': (await this.contract.totalPrice(3)),
            'reg-6': (await this.contract.totalPrice(6)),
            'reg-9': (await this.contract.totalPrice(9)),
        };
        return this.priceModel;
    }

    async getElitePriceModel () {
        if (this.elitePriceModel) {
            return this.elitePriceModel;
        }

        this.elitePriceModel = {
            'elite-3': (await this.eliteContract.totalPrice(3)),
            'elite-6': (await this.eliteContract.totalPrice(6)),
            'elite-9': (await this.eliteContract.totalPrice(9)),
        };
        return this.elitePriceModel;
    }

    async getCreditsForAccount (account) {
        return this.contract.credits(account);
    }

    async buyBlindPack (number, useCredits = false) {

        console.log(`buying regular ${number} using credit ${useCredits}`);

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

    async buyEliteBlindPack (number) {

        const gasPrice = await ethers.getDefaultProvider().getGasPrice();

        const totalPrice = await this.eliteContract.totalPrice(number);

        const gasLimit = await this.eliteContract.estimate.buyBatch(number, {
            value: totalPrice
        });

        // wait for tx to be mined
        return this.eliteContract.buyBatch(number, {
            // The maximum units of gas for the transaction to use
            gasLimit: gasLimit,
            // The price (in wei) per unit of gas
            gasPrice: gasPrice,
            value: totalPrice,
        });

    }

}
