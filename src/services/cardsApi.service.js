import axios from 'axios';
import BaseApiService from "./baseApi.service";
import {AXIOS_CONFIG} from "../utils";


export default class CardsApiService extends BaseApiService {

    constructor(network = 1) {
        super(network);
    }

    async loadTokensForAccount(account) {
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/token/account/${account}`, AXIOS_CONFIG);
        return res.data;
    }
}
