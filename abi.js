/**
 * Created by sangalli on 12/11/18.
 */

let abi = [
    {
        "constant": false,
        "inputs": [],
        "name": "endContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "tickets",
                "type": "uint256[]"
            }
        ],
        "name": "loadNewTickets",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "expiry",
                "type": "uint256"
            },
            {
                "name": "ticketIndices",
                "type": "uint256[]"
            },
            {
                "name": "v",
                "type": "uint8"
            },
            {
                "name": "r",
                "type": "bytes32"
            },
            {
                "name": "s",
                "type": "bytes32"
            },
            {
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "passTo",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "tokenIds",
                "type": "uint256[]"
            },
            {
                "name": "isExpired",
                "type": "bool"
            }
        ],
        "name": "setExpired",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "expiry",
                "type": "uint256"
            },
            {
                "name": "tickets",
                "type": "uint256[]"
            },
            {
                "name": "v",
                "type": "uint8"
            },
            {
                "name": "r",
                "type": "bytes32"
            },
            {
                "name": "s",
                "type": "bytes32"
            },
            {
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "spawnPassTo",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "expiry",
                "type": "uint256"
            },
            {
                "name": "ticketIndices",
                "type": "uint256[]"
            },
            {
                "name": "v",
                "type": "uint8"
            },
            {
                "name": "r",
                "type": "bytes32"
            },
            {
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "trade",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "ticketIndices",
                "type": "uint256[]"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "ticketIndices",
                "type": "uint256[]"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "tickets",
                "type": "uint256[]"
            },
            {
                "name": "organiserAddr",
                "type": "address"
            },
            {
                "name": "paymasterAddr",
                "type": "address"
            },
            {
                "name": "recipientAddr",
                "type": "address"
            },
            {
                "name": "buildingName",
                "type": "string"
            },
            {
                "name": "streetName",
                "type": "string"
            },
            {
                "name": "localityName",
                "type": "string"
            },
            {
                "name": "stateName",
                "type": "string"
            },
            {
                "name": "symbolName",
                "type": "string"
            },
            {
                "name": "contractName",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "count",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "count",
                "type": "uint256"
            }
        ],
        "name": "TransferFrom",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ticketIndices",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "name": "v",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "r",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "Trade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "ticketIndices",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "name": "v",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "r",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "s",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "PassTo",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "building",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
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
        "name": "getAmountTransferred",
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
        "constant": true,
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getBuildingName",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getDecimals",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getLocality",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getState",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getStreet",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getSymbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getThisContractAddress",
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
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "isExpired",
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
        "name": "isStormBirdContract",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "locality",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "myBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
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
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "organiser",
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
        "name": "paymaster",
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
        "inputs": [
            {
                "name": "tokenIds",
                "type": "uint256[]"
            },
            {
                "name": "newBuildingName",
                "type": "string"
            }
        ],
        "name": "setBuilding",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "tokenIds",
                "type": "uint256[]"
            },
            {
                "name": "newLocality",
                "type": "string"
            }
        ],
        "name": "setLocality",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "tokenIds",
                "type": "uint256[]"
            },
            {
                "name": "newState",
                "type": "string"
            }
        ],
        "name": "setState",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "tokenIds",
                "type": "uint256[]"
            },
            {
                "name": "newStreet",
                "type": "string"
            }
        ],
        "name": "setStreet",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "ticket",
                "type": "uint256"
            }
        ],
        "name": "spawned",
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
        "name": "spawnedTickets",
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
        "constant": true,
        "inputs": [],
        "name": "state",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "street",
        "outputs": [
            {
                "name": "",
                "type": "string"
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
                "name": "interfaceID",
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
        "type": "function"
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
        "type": "function"
    }
];
module.exports = abi;