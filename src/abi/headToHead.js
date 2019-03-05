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
            "type": "function",
            "signature": "0x2c4e591b"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x3f4ba83a"
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
            "type": "function",
            "signature": "0x46fbf68e"
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
            "type": "function",
            "signature": "0x47ccca02"
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
            "type": "function",
            "signature": "0x4bfb2028"
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
            "type": "function",
            "signature": "0x5c975abb"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renouncePauser",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x6ef8d66d"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x715018a6"
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
            "type": "function",
            "signature": "0x82dc1ec4"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x8456cb59"
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
            "type": "function",
            "signature": "0x8da5cb5b"
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
            "type": "function",
            "signature": "0x8f32d59b"
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
            "type": "function",
            "signature": "0xf2fde38b"
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
            "type": "function",
            "signature": "0xfd22a6cf"
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
            "type": "constructor",
            "signature": "constructor"
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
            "type": "event",
            "signature": "0x7dfb67e9ff596fca4da65c7eedb128cd1aac553af54b3c0cb733625a2480d8bd"
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
            "type": "event",
            "signature": "0x6517776a77c135b8e36ba8f6999c694cf514d1bb2fe1c99c8eec2349e7dcf8a1"
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
            "type": "event",
            "signature": "0x7638d20944c890f2b27fe51f2f231775e1850b1b28833e05980c41af6f1cc24a"
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
            "type": "event",
            "signature": "0x2ad0a22b93512c1ad0ec7824ed7945bc92e436a68404f6913fbc45d0d53e78d5"
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
            "type": "event",
            "signature": "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"
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
            "type": "event",
            "signature": "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"
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
            "type": "event",
            "signature": "0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"
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
            "type": "event",
            "signature": "0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"
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
            "type": "event",
            "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
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
            "type": "function",
            "signature": "0x48e837b9"
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
            "type": "function",
            "signature": "0x97427ef4"
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
            "type": "function",
            "signature": "0xa1d5df21"
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
            "type": "function",
            "signature": "0x68f4bbd2"
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
            "type": "function",
            "signature": "0xa2f77bcc"
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
            "type": "function",
            "signature": "0x95affb25"
        }
    ]
};
