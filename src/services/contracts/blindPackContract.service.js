import { ethers } from 'ethers';

import { abi, contracts } from 'nifty-football-contract-tools';

export default class BlindPackContractService {

    constructor (networkId, providerSigner) {
        this.networkId = networkId;
        this.providerSigner = providerSigner;
        const {address} = contracts.getNiftyFootballBlindPack(networkId);
        const {address: eliteAddress} = contracts.getNiftyFootballEliteBlindPack(networkId);
        this.contract = new ethers.Contract(address, abi.NiftyFootballTradingCardBlindPackAbi, this.providerSigner);
        this.eliteContract = new ethers.Contract(eliteAddress, abi.NiftyFootballTradingCardEliteBlindPackAbi, this.providerSigner);
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
