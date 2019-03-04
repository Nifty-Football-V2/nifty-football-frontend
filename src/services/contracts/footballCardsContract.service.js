import {ethers} from "ethers";
import futballCardsAbi from "../../abi/futballCards";

import headToHeadGameApi from "../api/headToHeadGameApi.service";

export default class FootballCardsContractService {

    constructor(network, providerSigner) {
        this.network = network;
        this.providerSigner = providerSigner;
        this.contract = new ethers.Contract(this.getContractAddress(network), futballCardsAbi, this.providerSigner);
    }

    async isApprovedForTokenId(tokenId) {
        //function getApproved(uint256 tokenId) public view returns (address)

        const approvedAddress = await this.contract.getApproved(tokenId);
        console.log(`Token if approved [${approvedAddress}]`);

        return approvedAddress === headToHeadGameApi.getContractAddress(this.network);
    }

    async approveToken(tokenId) {
        //function approve(address to, uint256 tokenId) public
        return this.contract.approve(headToHeadGameApi.getContractAddress(this.network), tokenId);
    }

    async isApprovedForAll(account) {
        //function isApprovedForAll(address owner, address operator) public view returns (bool)
        return this.contract.isApprovedForAll(account, headToHeadGameApi.getContractAddress(this.network));
    }

    async setApprovedForAll(account) {
        //function setApprovalForAll(address to, bool approved) public
        return this.contract.setApprovalForAll(account, true);
    }

    async removeApprovedForAll(account) {
        //function setApprovalForAll(address to, bool approved) public
        return this.contract.setApprovalForAll(account, false);
    }

    getContractAddress(network) {
        switch (network) {
            // FIXME
            case 5777:
                return "0x194bAfbf8eb2096e63C5d9296363d6DAcdb32527";
        }
    }
}
