import {ethers} from "ethers";
import futballCardsBlindPackContract from "../../abi/futballCardsBlindPack";

export default class BlindPackContractService {

    constructor(network, providerSigner) {
        this.network = network;
        this.providerSigner = providerSigner;
        this.contract = new ethers.Contract(futballCardsBlindPackContract.address(network), futballCardsBlindPackContract.abi, this.providerSigner);
    }

    async getPriceModel() {
        if (this.priceModel) {
            return this.priceModel;
        }

        this.priceModel = {
            1: (await this.contract.totalPrice(1)),
            3: (await this.contract.totalPrice(3)),
            6: (await this.contract.totalPrice(6))
        };
        return this.priceModel;
    }

    async buyBlindPack(number) {

        // FIXME how to estimate gas costs?
        // const gasPrice = await this.providerSigner.getGasPrice();
        // const result = await this.contract.estimate.buyBatch(num, {
        //     value: (await this.contract.totalPrice(6)).toNumber()
        // });

        // wait for tx to be mined
        return this.contract.buyBatch(number, {

            // The maximum units of gas for the transaction to use
            gasLimit: 6721975, // FIXME

            // The price (in wei) per unit of gas
            gasPrice: 1000000000,  // FIXME

            value: await this.contract.totalPrice(6),
        });

    }


}
