import {getApi} from "../../utils";

export default class BaseApiService {

    constructor(network = 1) {
        this.network = network;
        this.BASE_API = getApi();
    }

    setNetworkId(network = 1) {
        this.network = network;
    }
}
