export default {
    address: (network) => {
        switch (network) {
            // FIXME
            case 5777:
                return "0x194bAfbf8eb2096e63C5d9296363d6DAcdb32527";
        }
    },
    abi: [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x01ffc9a7"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x06fdde03"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x081812fc"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x095ea7b3"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "addWhitelisted",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x10154bad"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x18160ddd"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "from",
                    "type": "address"
                },
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x23b872dd"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "staticIpfsImageLink",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x261eb4e5"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "removeWhitelisted",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x291d9549"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "tokenOfOwnerByIndex",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x2f745c59"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "isWhitelisted",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x3af32abf"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "tokenIdPointer",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x3b3a1a7a"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "tokenBaseIpfsURI",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x3e10169f"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "from",
                    "type": "address"
                },
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x42842e0e"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceWhitelistAdmin",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x4c5a628c"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "tokenBaseURI",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x4e99b800"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "tokenByIndex",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x4f6ccce7"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x6352211e"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x70a08231"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "addWhitelistAdmin",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x7362d9c8"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x95d89b41"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xa22cb465"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "from",
                    "type": "address"
                },
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xb88d4fde"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "isWhitelistAdmin",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xbb5f747b"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceWhitelisted",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xd6cd9473"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xe985e9c5"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalCards",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xe994c15d"
        },
        {
            "inputs": [
                {
                    "name": "_tokenBaseURI",
                    "type": "string"
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
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "CardMinted",
            "type": "event",
            "signature": "0xdc9b1db686f25ff45fe132c07de2357339444f86d5d8bc46d57b0abd6a12aeed"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "string"
                }
            ],
            "name": "TokenBaseURIChanged",
            "type": "event",
            "signature": "0xeb44d3cd28695bf80f91b729a9b18c4658ae3f971329ebfaf805f1006ed9308a"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_new",
                    "type": "string"
                }
            ],
            "name": "TokenBaseIPFSURIChanged",
            "type": "event",
            "signature": "0x93bc8252380c645fd4b845fab020073aba271b77652e908c3450d2346be94ee9"
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
                    "indexed": false,
                    "name": "_ipfsHash",
                    "type": "string"
                }
            ],
            "name": "StaticIpfsTokenURISet",
            "type": "event",
            "signature": "0xcc21c9e97f4c1b48853cc4c5675c52597c939ba6762fbf5d1bb439b147a4552e"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "StaticIpfsTokenURICleared",
            "type": "event",
            "signature": "0xeefcdf933acebe3408b59e310709eeb11c01f4b3f75b0934f506d2d58ca2754e"
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
                    "indexed": false,
                    "name": "_strength",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_speed",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_intelligence",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_skill",
                    "type": "uint256"
                }
            ],
            "name": "CardAttributesSet",
            "type": "event",
            "signature": "0xc08b1d6f32112246977fbaea4f6dbf652f40927e2c50ba996ff86a3058e1318f"
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
                    "indexed": false,
                    "name": "_firstName",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "_lastName",
                    "type": "uint256"
                }
            ],
            "name": "NameSet",
            "type": "event",
            "signature": "0xb510a739be5ccf96111ba362fb80ca648c934dd748733b2563c4f0fee7eeabd3"
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
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "SpecialSet",
            "type": "event",
            "signature": "0x2a32126946c3137a9afa70442339e37a0a82ed9e4d2281a447b8ecb40c9e5019"
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
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "BadgeSet",
            "type": "event",
            "signature": "0x850866ad49a69c1541ccee0e2f2f02ef30ab1335cf98c5b062aa7d1c12191e34"
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
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "SponsorSet",
            "type": "event",
            "signature": "0xb090761efd169ad07cc9478dce823ced9f143c64870c1a212a59bf59f269f06a"
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
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "NumberSet",
            "type": "event",
            "signature": "0x9b99fe1e164b2f59c23e957801d298251d28b6c108a9e5348c4128956db0483b"
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
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "BootsSet",
            "type": "event",
            "signature": "0xa964212e3161d61e75a66f706534700581768662c0c97c384cae5ae8bd78596d"
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
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "StarAdded",
            "type": "event",
            "signature": "0x15d07b9caa4ef0ff84bff233c4b3be3396d65dc4cdde0cd418a747e5c61c52aa"
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
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "XpAdded",
            "type": "event",
            "signature": "0xe2e0abad15d85a43318b503a336369b2309f9c5dc640310c7079f2ae23122bca"
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
            "name": "WhitelistedAdded",
            "type": "event",
            "signature": "0xee1504a83b6d4a361f4c1dc78ab59bfa30d6a3b6612c403e86bb01ef2984295f"
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
            "name": "WhitelistedRemoved",
            "type": "event",
            "signature": "0x270d9b30cf5b0793bbfd54c9d5b94aeb49462b8148399000265144a8722da6b6"
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
            "name": "WhitelistAdminAdded",
            "type": "event",
            "signature": "0x22380c05984257a1cb900161c713dd71d39e74820f1aea43bd3f1bdd20961299"
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
            "name": "WhitelistAdminRemoved",
            "type": "event",
            "signature": "0x0a8eb35e5ca14b3d6f28e4abf2f128dbab231a58b56e89beb5d636115001e165"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event",
            "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event",
            "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event",
            "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_cardType",
                    "type": "uint256"
                },
                {
                    "name": "_nationality",
                    "type": "uint256"
                },
                {
                    "name": "_position",
                    "type": "uint256"
                },
                {
                    "name": "_ethnicity",
                    "type": "uint256"
                },
                {
                    "name": "_kit",
                    "type": "uint256"
                },
                {
                    "name": "_colour",
                    "type": "uint256"
                },
                {
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "mintCard",
            "outputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x9b34918e"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_strength",
                    "type": "uint256"
                },
                {
                    "name": "_speed",
                    "type": "uint256"
                },
                {
                    "name": "_intelligence",
                    "type": "uint256"
                },
                {
                    "name": "_skill",
                    "type": "uint256"
                }
            ],
            "name": "setAttributes",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xde8c9000"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_firstName",
                    "type": "uint256"
                },
                {
                    "name": "_lastName",
                    "type": "uint256"
                }
            ],
            "name": "setName",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x92f5fb1b"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "card",
            "outputs": [
                {
                    "name": "_cardType",
                    "type": "uint256"
                },
                {
                    "name": "_nationality",
                    "type": "uint256"
                },
                {
                    "name": "_position",
                    "type": "uint256"
                },
                {
                    "name": "_ethnicity",
                    "type": "uint256"
                },
                {
                    "name": "_kit",
                    "type": "uint256"
                },
                {
                    "name": "_colour",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xbfcfd9b9"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "attributesAndName",
            "outputs": [
                {
                    "name": "_strength",
                    "type": "uint256"
                },
                {
                    "name": "_speed",
                    "type": "uint256"
                },
                {
                    "name": "_intelligence",
                    "type": "uint256"
                },
                {
                    "name": "_skill",
                    "type": "uint256"
                },
                {
                    "name": "_special",
                    "type": "uint256"
                },
                {
                    "name": "_firstName",
                    "type": "uint256"
                },
                {
                    "name": "_lastName",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xc375fb6e"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "extras",
            "outputs": [
                {
                    "name": "_badge",
                    "type": "uint256"
                },
                {
                    "name": "_sponsor",
                    "type": "uint256"
                },
                {
                    "name": "_number",
                    "type": "uint256"
                },
                {
                    "name": "_boots",
                    "type": "uint256"
                },
                {
                    "name": "_stars",
                    "type": "uint256"
                },
                {
                    "name": "_xp",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x5468bc2f"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "attributesFlat",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[5]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xabbcbc49"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "tokensOfOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x8462151c"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x42966c68"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_newSpecial",
                    "type": "uint256"
                }
            ],
            "name": "setSpecial",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x0bde9046"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "setBadge",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x21c3e69d"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "setSponsor",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x86be19ae"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "setNumber",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x6b19e8c7"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_new",
                    "type": "uint256"
                }
            ],
            "name": "setBoots",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xb987f993"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "addStar",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x01750e74"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_increment",
                    "type": "uint256"
                }
            ],
            "name": "addXp",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xdc0ab925"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xc87b56dd"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newBaseURI",
                    "type": "string"
                }
            ],
            "name": "updateTokenBaseURI",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x2295ee5b"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenBaseIpfsURI",
                    "type": "string"
                }
            ],
            "name": "updateTokenBaseIpfsURI",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x893bc904"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_ipfsHash",
                    "type": "string"
                }
            ],
            "name": "overrideDynamicImageWithIpfsLink",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x427849d6"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "clearIpfsImageUri",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xbf405274"
        }
    ]
}
