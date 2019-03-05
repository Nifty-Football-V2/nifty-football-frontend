export default {
    address: (network) => {
        switch (network) {
            // FIXME
            case 5777:
                return "0x790c7E699107A39b08E195AdAa09eA20D5E867B9";
        }
    },
    abi: [
        {
            "constant": true,
            "inputs": [],
            "name": "futballCardsGenerator",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x0dba10bd"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "pricePerCard",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x17a5e03f"
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
            "name": "futballCardsNFT",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x542820e7"
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
            "constant": true,
            "inputs": [],
            "name": "totalPurchasesInWei",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x5f1e98c7"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "attributesBase",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x69451b5b"
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
            "constant": true,
            "inputs": [],
            "name": "cardTypeDefault",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x96e7089d"
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
                    "type": "address"
                }
            ],
            "name": "credits",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xfe5ff468"
        },
        {
            "inputs": [
                {
                    "name": "_wallet",
                    "type": "address"
                },
                {
                    "name": "_futballCardsGenerator",
                    "type": "address"
                },
                {
                    "name": "_fuballCardsNFT",
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
                    "indexed": false,
                    "name": "_old",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "PriceInWeiChanged",
            "type": "event",
            "signature": "0x10fff142f5fb0d7fb4619c26bd9eb8ee328ced29b159d2d36d0227399f869f35"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "BlindPackPulled",
            "type": "event",
            "signature": "0x407998b30cea11382fe35115dbbb804b06d69eaf527c8f91a84041e25f42091c"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "CreditAdded",
            "type": "event",
            "signature": "0x8466168d4947c73f9fa41c3bc9a6e5efc442f28ec139dbfdbdc1ead3ab885389"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "DefaultCardTypeChanged",
            "type": "event",
            "signature": "0x75c6e6de0e60e7234e491208cf9d69acf42dfeecaa9e5ab98ddeabba591dd756"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "AttributesBaseChanged",
            "type": "event",
            "signature": "0x89bfb412bd3e31cdc80daa077c41c4b350394ce6b1df71df0757acb58709c25b"
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
            "inputs": [],
            "name": "blindPack",
            "outputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function",
            "signature": "0xf1db44e8"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "blindPackTo",
            "outputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x1184fc57"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_numberOfCards",
                    "type": "uint256"
                }
            ],
            "name": "buyBatch",
            "outputs": [
                {
                    "name": "_tokenIds",
                    "type": "uint256[]"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x746d1e57"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_numberOfCards",
                    "type": "uint256"
                }
            ],
            "name": "buyBatchTo",
            "outputs": [
                {
                    "name": "_tokenIds",
                    "type": "uint256[]"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x830b5089"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newDefaultCardType",
                    "type": "uint256"
                }
            ],
            "name": "setCardTypeDefault",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xd91b68ce"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newAttributesBase",
                    "type": "uint256"
                }
            ],
            "name": "setAttributesBase",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x35d16743"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "name": "_priceInWei",
                    "type": "uint256"
                }
            ],
            "name": "updatePricePerCardAtIndex",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xff2b09bc"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "addCredit",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x7c334d0b"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_creditsToAdd",
                    "type": "uint256"
                }
            ],
            "name": "addCredits",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x871ff405"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "withdraw",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x3ccfd60b"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_numberOfCards",
                    "type": "uint256"
                }
            ],
            "name": "totalPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x221f2285"
        }
    ]
};
