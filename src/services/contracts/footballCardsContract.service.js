import {ethers} from "ethers";
import futballCardsContract from "../../abi/futballCards";
import headToHeadContract from "../../abi/headToHead";

export default class FootballCardsContractService {

    constructor(network, providerSigner) {
        this.network = network;
        this.providerSigner = providerSigner;
        this.contract = new ethers.Contract(futballCardsContract.address(network), futballCardsContract.abi, this.providerSigner);
    }

    async isApprovedForTokenId(tokenId) {
        //function getApproved(uint256 tokenId) public view returns (address)

        const approvedAddress = await this.contract.getApproved(tokenId);
        console.log(`Token if approved [${approvedAddress}]`);

        return approvedAddress === headToHeadContract.address(this.network);
    }

    async approveToken(tokenId) {
        //function approve(address to, uint256 tokenId) public
        return this.contract.approve(headToHeadContract.address(this.network), tokenId);
    }

    async isApprovedForAll(owner) {
        const operator = headToHeadContract.address(this.network);
        console.log(`isApprovedForAll() with account [${owner}] for address [${operator}] on network [${this.network}]`);
        return this.contract.isApprovedForAll(owner, operator);
    }

    async grantApprovedForAll() {
        //function setApprovalForAll(address to, bool approved) public
        const operator = headToHeadContract.address(this.network);
        return this.contract.setApprovalForAll(operator, true);
    }

    async removeApprovedForAll() {
        //function setApprovalForAll(address to, bool approved) public
        const operator = headToHeadContract.address(this.network);
        return this.contract.setApprovalForAll(operator, false);
    }

}
