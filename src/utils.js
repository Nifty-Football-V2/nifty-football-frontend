const INFURA_KEY = "6e7a3de11d3745fe8763bab4466ec8de";

const API_CONFIG = {
    local: "http://localhost:5000/futbol-cards/us-central1/main/api",
    live: "https://niftyfootball.cards/api"
};

const getApi = () => {
    switch (window.location.hostname) {
        case "localhost":
        case "127.0.0.1":
            return API_CONFIG.local;
        default:
            return API_CONFIG.live;
    }
};

const AXIOS_CONFIG = {headers: {'Access-Control-Allow-Origin': '*'}};

const lookupEtherscanAddress = (id) => {
    switch (id) {
        case 1:
            return 'https://etherscan.io';
        case 3:
            return 'https://ropsten.etherscan.io';
        case 4:
            return 'https://rinkeby.etherscan.io';
        case 42:
            return 'https://kovan.etherscan.io';
        default:
            return 'https://etherscan.io';
    }
};

export {
    getApi,
    lookupEtherscanAddress,
    AXIOS_CONFIG,
    INFURA_KEY
};
