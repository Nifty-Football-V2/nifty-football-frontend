import axios from 'axios';
import BaseApiService from "./baseApi.service";
import {AXIOS_CONFIG} from "../../utils";


export default class CardsApiService extends BaseApiService {

    constructor(network = 1) {
        super(network);
    }

    async loadTokensForAccount(account) {
        console.log(`Load tokens for account [${account}] for network [${this.network}]`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/token/tokens/${account}`, AXIOS_CONFIG);
        return res.data;
    }

    async loadTokenForTokenId(tokenId) {
        console.log(`Load token for token ID [${tokenId}] for network [${this.network}]`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/token/${tokenId}`, AXIOS_CONFIG);
        return res.data;
    }

    async loadTokensForTx(tx) {
        console.log(`Load tokens for tx [${tx}] for network [${this.network}]`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/txs/mints/${tx}/cards`, AXIOS_CONFIG);
        return res.data;
    }

    async loadRankings() {
        console.log(`Load rankings`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/token/rankings`, AXIOS_CONFIG);
        return res.data;
    }
}
