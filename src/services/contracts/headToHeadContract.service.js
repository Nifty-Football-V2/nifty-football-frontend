import {ethers} from "ethers";
import headToHeadAbi from "../../abi/headToHead";


export default class HeadToHeadContractService {

    constructor(network, providerSigner) {
        this.network = network;
        this.providerSigner = providerSigner;
        this.contract = new ethers.Contract(this.getContractAddress(network), headToHeadAbi, this.providerSigner);
    }

    getContractAddress(network) {
        switch (network) {
            // FIXME
            case 5777:
                return "0xe39f3f7361512de3aBd7cB264efd42D22A4B11C7";
        }
    }
}
