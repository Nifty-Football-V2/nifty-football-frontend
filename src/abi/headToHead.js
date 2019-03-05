export default {
    address(network) {
        switch (network) {
            // FIXME
            case 5777:
                return "0xe39f3f7361512de3aBd7cB264efd42D22A4B11C7";
        }
    },
    abi: [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "games",
            "outputs": [
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "homeTokenId",
                    "type": "uint256"
                },
                {
                    "name": "homeOwner",
                    "type": "address"
                },
                {
                    "name": "awayTokenId",
                    "type": "uint256"
                },
                {
                    "name": "awayOwner",
                    "type": "address"
                },
                {
                    "name": "state",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalGames",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "isPauser",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "nft",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "resulter",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "paused",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "gamesIndex",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renouncePauser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "addPauser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "tokenToGameMapping",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "openGames",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_resulter",
                    "type": "address"
                },
                {
                    "name": "_nft",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "gameId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "home",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "homeTokenId",
                    "type": "uint256"
                }
            ],
            "name": "GameCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "home",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "away",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "gameId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "homeValue",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "awayValue",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "result",
                    "type": "uint256"
                }
            ],
            "name": "GameResulted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "home",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "away",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "gameId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "homeValue",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "awayValue",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "result",
                    "type": "uint256"
                }
            ],
            "name": "GameDraw",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "gameId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "closer",
                    "type": "address"
                }
            ],
            "name": "GameClosed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "PauserAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "PauserRemoved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "createGame",
            "outputs": [
                {
                    "name": "_gameId",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_gameId",
                    "type": "uint256"
                },
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "resultGame",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_gameId",
                    "type": "uint256"
                }
            ],
            "name": "reMatch",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_gameId",
                    "type": "uint256"
                }
            ],
            "name": "withdrawFromGame",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_gameId",
                    "type": "uint256"
                }
            ],
            "name": "getGame",
            "outputs": [
                {
                    "name": "homeTokenId",
                    "type": "uint256"
                },
                {
                    "name": "homeOwner",
                    "type": "address"
                },
                {
                    "name": "awayTokenId",
                    "type": "uint256"
                },
                {
                    "name": "awayOwner",
                    "type": "address"
                },
                {
                    "name": "state",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "openGamesSize",
            "outputs": [
                {
                    "name": "_size",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getGameForToken",
            "outputs": [
                {
                    "name": "gameId",
                    "type": "uint256"
                },
                {
                    "name": "homeTokenId",
                    "type": "uint256"
                },
                {
                    "name": "homeOwner",
                    "type": "address"
                },
                {
                    "name": "awayTokenId",
                    "type": "uint256"
                },
                {
                    "name": "awayOwner",
                    "type": "address"
                },
                {
                    "name": "state",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
};
