export default {
    address: (network) => {
        switch (network) {
            // FIXME
            case 5777:
                return "";
        }
    },
    abi: [
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
            "name": "commission",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xe1489191"
        },
        {
            "inputs": [
                {
                    "name": "_wallet",
                    "type": "address"
                },
                {
                    "name": "_nftAddress",
                    "type": "address"
                },
                {
                    "name": "_commission",
                    "type": "uint256"
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
                    "name": "_buyer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_priceInWei",
                    "type": "uint256"
                }
            ],
            "name": "BoughtNow",
            "type": "event",
            "signature": "0x3e7d8d5d2af97ab18b58a06fce8f44dd2fec803ce294cab4e9a56541d7655e24"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_seller",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_priceInWei",
                    "type": "uint256"
                }
            ],
            "name": "ListedToken",
            "type": "event",
            "signature": "0x92079d7dcc7f0714beb44e2f4b0380ecd6987db2fd0a5739ae4cbbf2f83e2585"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_seller",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "DelistedToken",
            "type": "event",
            "signature": "0x529b1f3a39651d36d7cbfbb9f7cdf1082bc54cb7ab96c57b5a7f4c3010fa2932"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_seller",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_priceInWei",
                    "type": "uint256"
                }
            ],
            "name": "ListedTokenPriceUpdate",
            "type": "event",
            "signature": "0xad6fd56474c27f1a76a4c43fafac5a69612dbf463ba34c6092c57b79d4489d74"
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
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_priceInWei",
                    "type": "uint256"
                }
            ],
            "name": "listToken",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x75c1631d"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_priceInWei",
                    "type": "uint256"
                }
            ],
            "name": "updateListedTokenPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x85ff2b8a"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "delistToken",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xbed659bc"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "listedTokens",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x4a3d6bda"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "listedTokenPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xff644df8"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "buyNow",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function",
            "signature": "0x08a0f32f"
        }
    ]
};
