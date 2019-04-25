import {ethers} from "ethers";
import {abi, contracts} from "nifty-football-contract-tools";

export default class FootballCardsContractService {

    constructor(network, providerSigner) {
        this.network = network;
        this.providerSigner = providerSigner;
        const {address} = contracts.getNiftyFootballNft(network);
        this.contract = new ethers.Contract(address, abi.NiftyFootballTradingCardAbi, this.providerSigner);
        // FIXME
        // const {address: headToHeadAddress} = contracts.getHeadToHeadGame(network);
        // this.headToHeadAddress = headToHeadAddress;
    }

    async isApprovedForAll(owner) {
        // FIXME
        // console.log(`isApprovedForAll() with account [${owner}] for address [${this.headToHeadAddress}] on network [${this.network}]`);
        // return this.contract.isApprovedForAll(owner, this.headToHeadAddress);
    }

    async grantApprovedForAll() {
        // FIXME
        // function setApprovalForAll(address to, bool approved) public
        // return this.contract.setApprovalForAll(this.headToHeadAddress, true);
    }

    async removeApprovedForAll() {
        // FIXME
        // function setApprovalForAll(address to, bool approved) public
        // return this.contract.setApprovalForAll(this.headToHeadAddress, false);
    }

}
