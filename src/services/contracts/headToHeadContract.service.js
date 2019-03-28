import _ from 'lodash';
import {ethers} from "ethers";
import {abi, contracts} from "nifty-football-contract-tools";

export default class HeadToHeadContractService {

    constructor(network, providerSigner) {
        this.network = network;
        this.providerSigner = providerSigner;
        const {address} = contracts.getHeadToHeadGame(network);
        this.contract = new ethers.Contract(address, abi.HeadToHeadAbi, this.providerSigner);
    }

    async createGame(card) {
        console.log(`Create game for token ID [${card.tokenId}] on network [${this.network}]`);
        return this.contract.createGame(card.tokenId);
    }

    async joinGame(gameId, tokenId) {
        console.log(`Join game [${gameId}] with token ID [${tokenId}] on network [${this.network}]`);
        let tx = await this.contract.resultGame(gameId, tokenId);
        let receipt = await tx.wait(1);
        return receipt;
    }

    async withdrawFromGame(gameId) {
        console.log(`Withdraw game [${gameId}] on network [${this.network}]`);
        return this.contract.withdrawFromGame(gameId);
    }

    async reMatch(gameId) {
        console.log(`Rematch game [${gameId}] on network [${this.network}]`);
        return this.contract.reMatch(gameId);
    }

    parseLog(receipt) {
        return _.compact(_.map(receipt.events, (e) => this.contract.interface.parseLog(e)));
    }
}
