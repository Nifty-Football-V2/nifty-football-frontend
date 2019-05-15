import assist from 'bnc-assist';
import {ethers} from 'ethers';

import {abi, contracts} from 'nifty-football-contract-tools';

export default class BlindPackContractService {

    constructor(networkId, web3) {
        this.networkId = networkId;
        this.assistInstance = assist.init({ web3, dappId: '8bf348fd-d9df-4b54-b8b1-1ad14d15e4c3', networkId });
        const {address} = contracts.getNiftyFootballBlindPack(networkId);
        const {address: eliteAddress} = contracts.getNiftyFootballEliteBlindPack(networkId);
        const undecContract = new web3.eth.Contract(abi.NiftyFootballTradingCardBlindPackAbi, address);
        const undecEliteContract = new web3.eth.Contract(abi.NiftyFootballTradingCardEliteBlindPackAbi, eliteAddress);
        this.contract = this.assistInstance.Contract(undecContract);
        this.eliteContract = this.assistInstance.Contract(undecEliteContract);
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
            from: window.web3.eth.defaultAccount,
            // The price (in wei) per unit of gas
            gasPrice: gasPrice,
            value: price,
        });

        // return promise that resolves once tx is mined
        return new Promise((resolve, reject) => {
            txPromise.on('confirmation', (undefined, receipt) => resolve(receipt));
            txPromise.on('error', (e) => reject(e));
        });
    }

    async buyEliteBlindPack(number) {
        const gasPrice = await ethers.getDefaultProvider(this.getNetworkString(this.networkId)).getGasPrice();

        const totalPrice = await this.eliteContract.methods.totalPrice(number).call();

        console.log('hello');
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
