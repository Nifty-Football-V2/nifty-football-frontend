import {ethers} from "ethers";
import futballCardsBlindPackAbi from "../abi/futballCardsBlindPack";

const getContractAddress = (network) => {
    switch (network) {
        // FIXME
        case 5777:
            return "0x790c7E699107A39b08E195AdAa09eA20D5E867B9";
    }
};

export default class BlindPackContractService {

    constructor(network, providerSigner) {
        this.providerSigner = providerSigner;
        this.contract = new ethers.Contract(getContractAddress(network), futballCardsBlindPackAbi, this.providerSigner);
    }

    async getPriceModel() {
        if (this.priceModel) {
            return this.priceModel;
        }

        this.priceModel = {
            1: (await this.contract.totalPrice(1)).toNumber(),
            3: (await this.contract.totalPrice(3)).toNumber(),
            6: (await this.contract.totalPrice(6)).toNumber()
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

            value: (await this.contract.totalPrice(6)).toNumber(),
        });

    }

}
