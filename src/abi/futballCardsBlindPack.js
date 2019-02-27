export default [
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
        "inputs": [],
        "name": "priceInWei",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x3c8da588"
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
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x715018a6"
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
                "name": "_newPriceInWei",
                "type": "uint256"
            }
        ],
        "name": "setPriceInWei",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x8774e5d0"
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
    }
];