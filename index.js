$(() =>
{
    let Web3 = require("web3");
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

    let numberOfTickets;/* let of type uint256 here */
    let evName; /* let of type string here */
    let expiryTimeStamp; /* let of type uint256 here */
    let transferFee; /* let of type uint256 here */
    let evDate; /* let of type string here */
    let evVenue; /* let of type string here */
    let eventSymbol; /* let of type string here */

    function initWeb3()
    {
        //check if plugin node is available if not use localhost
        if (typeof window.web3 !== 'undefined')
        {
            injectedProvider = window.web3.currentProvider;
            web3 = new Web3(injectedProvider);
            console.log("injected provider used: " + injectedProvider);
        }
        else
        {
            alert("no injected provider found, using localhost:8545, please ensure your local node is running " +
                "and rpc and rpccorsdomain is enabled");
        }

        //let's assume that coinbase is our account
        web3.eth.defaultAccount = web3.eth.coinbase;
        //once initialized, deploy
        deploy();
    }


    $("#deploy").click(() =>
    {
        let eventDate = $("#eventDate").val();
        let dateTimeEvent = new Date(eventDate);
        //set all vars
        numberOfTickets = $("#numberOfTickets").val();
        evName = $("#eventName").val();
        eventSymbol = $("#ticketSymbol").val();
        expiryTimeStamp = (dateTimeEvent.getTime() / 1000) + 604800; //one week leeway
        evDate = eventDate; //stored as a string date DD/MM/YYYY so users find it easy to read
        evVenue = $("#eventVenue").val();
        //initialize web3 then deploy
        initWeb3();
    });

    function deploy()
    {
        $("#notice").show(); //let the user know that the contract is being deployed
        let abi = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eventDate","outputs":[{"name":"eventDate","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfTransferedTickets","outputs":[{"name":"numberOfTickets","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getAmountTransferred","outputs":[{"name":"transferred","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eventName","outputs":[{"name":"eventName","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eventVenue","outputs":[{"name":"eventVenue","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"isContractExpired","outputs":[{"name":"expired","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"numberOfTickets","type":"uint256"},{"name":"evName","type":"string"},{"name":"expiryTimeStamp","type":"uint256"},{"name":"transferFee","type":"uint256"},{"name":"evDate","type":"string"},{"name":"evVenue","type":"string"},{"name":"eventSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"TransferFrom","type":"event"}]';
        let ticketContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eventDate","outputs":[{"name":"eventDate","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumberOfTransferedTickets","outputs":[{"name":"numberOfTickets","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getAmountTransferred","outputs":[{"name":"transferred","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eventName","outputs":[{"name":"eventName","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eventVenue","outputs":[{"name":"eventVenue","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"isContractExpired","outputs":[{"name":"expired","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"numberOfTickets","type":"uint256"},{"name":"evName","type":"string"},{"name":"expiryTimeStamp","type":"uint256"},{"name":"transferFee","type":"uint256"},{"name":"evDate","type":"string"},{"name":"evVenue","type":"string"},{"name":"eventSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"TransferFrom","type":"event"}]);
        let ticketContractDeploy = ticketContract.new(
            numberOfTickets,
            evName,
            expiryTimeStamp,
            transferFee,
            evDate,
            evVenue,
            eventSymbol,
            {
                from: web3.eth.accounts[0],
                data: '0x606060405260006005556000600a5534156200001a57600080fd5b60405162000eac38038062000eac8339810160405280805190602001909190805182019190602001805190602001909190805190602001909190805182019190602001805182019190602001805182019190505086600081905550600054600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084945033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083935080600790805190602001906200011a92919062000173565b5085600690805190602001906200013392919062000173565b5082600890805190602001906200014c92919062000173565b5081600990805190602001906200016592919062000173565b505050505050505062000222565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001b657805160ff1916838001178555620001e7565b82800160010185558215620001e7579182015b82811115620001e6578251825591602001919060010190620001c9565b5b509050620001f69190620001fa565b5090565b6200021f91905b808211156200021b57600081600090555060010162000201565b5090565b90565b610c7a80620002326000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100ca57806318160ddd1461015857806323b872dd146101815780634bfbe5df146101fa57806361f065631461028857806370a08231146102b157806372c5cb63146102fe5780638043c9c01461032757806395d89b41146103b5578063a9059cbb14610443578063e22bda351461049d578063ea8b5ca31461052b575b34156100c557600080fd5b600080fd5b34156100d557600080fd5b6100dd610558565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011d578082015181840152602081019050610102565b50505050905090810190601f16801561014a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016357600080fd5b61016b6105f6565b6040518082815260200191505060405180910390f35b341561018c57600080fd5b6101e0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506105ff565b604051808215151515815260200191505060405180910390f35b341561020557600080fd5b61020d6107b5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024d578082015181840152602081019050610232565b50505050905090810190601f16801561027a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561029357600080fd5b61029b61085d565b6040518082815260200191505060405180910390f35b34156102bc57600080fd5b6102e8600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610867565b6040518082815260200191505060405180910390f35b341561030957600080fd5b6103116108b0565b6040518082815260200191505060405180910390f35b341561033257600080fd5b61033a6108ba565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561037a57808201518184015260208101905061035f565b50505050905090810190601f1680156103a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103c057600080fd5b6103c8610962565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104085780820151818401526020810190506103ed565b50505050905090810190601f1680156104355780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561044e57600080fd5b610483600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a00565b604051808215151515815260200191505060405180910390f35b34156104a857600080fd5b6104b0610b75565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f05780820151818401526020810190506104d5565b50505050905090810190601f16801561051d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053657600080fd5b61053e610c1d565b604051808215151515815260200191505060405180910390f35b60068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105ee5780601f106105c3576101008083540402835291602001916105ee565b820191906000526020600020905b8154815290600101906020018083116105d157829003601f168201915b505050505081565b60008054905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561065d57600080fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015156107ad5781600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc0d84ce5c7ff9ca21adb0f8436ff3f4951b4bb78c4e2fae2b6837958b3946ffd846040518082815260200191505060405180910390a3600190506107ae565b5b9392505050565b6107bd610c3a565b60088054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108535780601f1061082857610100808354040283529160200191610853565b820191906000526020600020905b81548152906001019060200180831161083657829003601f168201915b5050505050905090565b6000600a54905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600554905090565b6108c2610c3a565b60068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109585780601f1061092d57610100808354040283529160200191610958565b820191906000526020600020905b81548152906001019060200180831161093b57829003601f168201915b5050505050905090565b60078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109f85780601f106109cd576101008083540402835291602001916109f8565b820191906000526020600020905b8154815290600101906020018083116109db57829003601f168201915b505050505081565b6000600454341080610a50575081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054105b15610a5a57600080fd5b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36005600081548092919060010191905055506001905092915050565b610b7d610c3a565b60098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c135780601f10610be857610100808354040283529160200191610c13565b820191906000526020600020905b815481529060010190602001808311610bf657829003601f168201915b5050505050905090565b6000600254421115610c325760019050610c37565b600090505b90565b6020604051908101604052806000815250905600a165627a7a723058203ede8090aac92a9a8f02848a50a16958cb6df3434ea71fa4b1d99c11ca4f65470029',
                gas: '4700000'
            }, function (e, contract){
                console.log(e, contract);
                if (typeof contract.address !== 'undefined')
                {
                    alert('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                    //set xcontract button
                    $("#viewOnXContract").show().click(() => {
                        let url = "https://xcontract.herokuapp.com/api/" + abi + "/" + contract.address;
                        window.location.replace(url);
                    });
                }
            });
    }

});

