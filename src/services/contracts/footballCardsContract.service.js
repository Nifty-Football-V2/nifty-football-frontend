import {ethers} from "ethers";
import {abi, contracts} from "nifty-football-contract-tools";

export default class FootballCardsContractService {

    constructor(network, providerSigner) {
        this.network = network;
        this.providerSigner = providerSigner;
        const {address} = contracts.getNiftyFootballNft(network);
        this.contract = new ethers.Contract(address, abi.NiftyFootballTradingCardAbi, this.providerSigner);
    }
}
