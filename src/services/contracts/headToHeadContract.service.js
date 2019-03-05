import {ethers} from "ethers";
import headToHeadContract from "../../abi/headToHead";

export default class HeadToHeadContractService {

    constructor(network, providerSigner) {
        this.network = network;
        this.providerSigner = providerSigner;
        this.contract = new ethers.Contract(headToHeadContract.address(network), headToHeadContract.abi, this.providerSigner);
    }

    async createGame(card) {
        console.log(`Create game for token ID [${card.tokenId}] on network [${this.network}]`);
        return this.contract.createGame(card.tokenId);
    }
}
