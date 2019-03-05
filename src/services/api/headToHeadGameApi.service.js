import axios from 'axios';
import BaseApiService from "./baseApi.service";
import {AXIOS_CONFIG} from "../../utils";

export default class HeadToHeadGameApiService extends BaseApiService {

    constructor(network = 1) {
        super(network);
    }

    async getOpenGames() {
        console.log(`Get open games for network [${this.network}]`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/games/headtohead/list/open`, AXIOS_CONFIG);
        return res.data;
    }

    async getGameDetails(gameId) {
        console.log(`Get games details for ID [${gameId}] on network [${this.network}]`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/games/headtohead/game/${gameId}`, AXIOS_CONFIG);
        return res.data;
    }
}
