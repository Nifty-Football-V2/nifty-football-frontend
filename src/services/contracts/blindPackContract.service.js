import {abi, contracts} from 'nifty-football-contract-tools';

export default class BlindPackContractService {

    constructor(networkId, web3, ethAccount) {
        this.networkId = networkId;
        this.ethAccount = ethAccount;
        const {address} = contracts.getNiftyFootballBlindPack(networkId);
        const {address: eliteAddress} = contracts.getNiftyFootballEliteBlindPack(networkId);

        // decorate the contracts to gain transaction notifications
        this.contract = new web3.eth.Contract(abi.NiftyFootballTradingCardBlindPackAbi, address);
        this.eliteContract = new web3.eth.Contract(abi.NiftyFootballTradingCardEliteBlindPackAbi, eliteAddress);
    }

    async buyBlindPack(number, useCredits = false) {
        console.log(`buying regular ${number} using credit ${useCredits}`);

        const totalPrice = await this.contract.methods.totalPrice(number).call();

        // Supply zero value if using credits up
        const price = useCredits
            ? 0
            : totalPrice;

        // broadcast transaction
        const promiEvent = this.contract.methods.buyBatch(number).send({
            from: this.ethAccount,
            value: price.toString()
        })
    
        return new Promise((resolve, reject) => {
            promiEvent.on("transactionHash", resolve)
            promiEvent.catch(reject)
        })
    }

    async buyEliteBlindPack(number) {
        const totalPrice = await this.eliteContract.methods.totalPrice(number).call();

        // broadcast transaction
        const promiEvent = this.eliteContract.methods.buyBatch(number).send({
            from: this.ethAccount,
            value: totalPrice
        })
    
        return new Promise((resolve, reject) => {
            promiEvent.on("transactionHash", resolve)
            promiEvent.catch(reject)
        })
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
