import axios from 'axios';
import BaseApiService from './baseApi.service';
import {AXIOS_CONFIG} from '../../utils';


export default class CardsApiService extends BaseApiService {

    constructor(network = 1) {
        super(network);
    }

    async loadTokensForTx(tx) {
        console.log(`Load tokens for tx [${tx}] for network [${this.network}]`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/txs/mints/${tx}/cards`, AXIOS_CONFIG);
        return res.data;
    }

    async loadTokenForTokenId(tokenId) {
        console.log(`Load token for token ID [${tokenId}] for network [${this.network}]`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/token/${tokenId}/details`, AXIOS_CONFIG);
        return res.data;
    }

    async loadRankings() {
        console.log(`Load rankings`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/token/rankings`, AXIOS_CONFIG);
        return res.data;
    }

    async loadLatestCards(limit = 11) {
        console.log(`Load latest cards`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/activity/latest/cards?limit=${limit}`, AXIOS_CONFIG);
        return res.data;
    }

    async loadFlags() {
        console.log(`Load flags`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/image/flags`, AXIOS_CONFIG);
        return res.data;
    }

    async loadRarities() {
        console.log(`Load rarities data`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/rarities/packs`, AXIOS_CONFIG);
        return res.data;
    }

    async loadTopTeam(ethAccount) {
        console.log(`Load top team`, ethAccount);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/squad/${ethAccount}/top`, AXIOS_CONFIG);
        return res.data;
    }

    async loadLeagueTable(limit = 50) {
        console.log(`Load top teams`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/squad/league?limit=${limit}`, AXIOS_CONFIG);
        return res.data;
    }

    async loadSquad(account) {
        console.log(`Load squad for account [${account}] for network [${this.network}]`);
        const res = await axios.get(`${this.BASE_API}/network/${this.network}/squad/${account}/all`, AXIOS_CONFIG);
        return res.data;
    }

}
