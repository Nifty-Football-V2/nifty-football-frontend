import {ethers} from 'ethers';

import {abi, contracts} from 'nifty-football-contract-tools';

import {decorateContract} from '../assist.service';

export default class BlindPackContractService {

    constructor(networkId, web3, ethAccount) {
        this.networkId = networkId;
        this.ethAccount = ethAccount;
        const {address} = contracts.getNiftyFootballBlindPack(networkId);
        const {address: eliteAddress} = contracts.getNiftyFootballEliteBlindPack(networkId);
        this.contract = decorateContract(new web3.eth.Contract(abi.NiftyFootballTradingCardBlindPackAbi, address));
        this.eliteContract = decorateContract(new web3.eth.Contract(abi.NiftyFootballTradingCardEliteBlindPackAbi, eliteAddress));
    }

    async buyBlindPack(number, useCredits = false) {
        console.log(`buying regular ${number} using credit ${useCredits}`);

        const gasPrice = await ethers.getDefaultProvider(this.getNetworkString(this.networkId)).getGasPrice();

        const totalPrice = await this.contract.methods.totalPrice(number).call();

        // Supply zero value if using credits up
        const price = useCredits
            ? 0
            : totalPrice;

        // broadcast transaction
        const {txPromise} = await this.contract.methods.buyBatch(number).send({
            from: this.ethAccount,
            // The price (in wei) per unit of gas
            gasPrice: gasPrice.toString(),
            value: price.toString(),
        });

        // return promise that resolves once tx is mined
        return new Promise((resolve, reject) => {
            txPromise.once('confirmation', (undefined, receipt) => resolve(receipt));
            txPromise.on('error', (e) => reject(e));
        });
    }

    async buyEliteBlindPack(number) {
        const gasPrice = await ethers.getDefaultProvider(this.getNetworkString(this.networkId)).getGasPrice();

        const totalPrice = await this.eliteContract.methods.totalPrice(number).call();

        // broadcast transaction
        const {txPromise} = await this.eliteContract.methods.buyBatch(number).send({
            from: window.web3.eth.defaultAccount,
            // The price (in wei) per unit of gas
            gasPrice: gasPrice,
            value: totalPrice,
        });

        // return promise that resolves once tx is mined
        return new Promise((resolve, reject) => {
            txPromise.on('confirmation', (undefined, receipt) => resolve(receipt))
            txPromise.on('error', (e) => reject(e));
        });
    }


    getNetworkString = (network) => {
        return contracts.networkSplitter(network, {
            mainnet: 'homestead', // our default is mainnet so override
            ropsten: 'ropsten',
            rinkeby: 'rinkeby',
            local: 'homestead'
        });
    };
}
