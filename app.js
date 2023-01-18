// In the terminal >>> npm init -y    This tells the computer that this is a node project
// install web3 into the pcakage.json file >>> npm install --save web3

let web3 = require("web3");
//instantiate web3 in order to work with it, we will connect using HttpProvider to Ganache
let web3 = new web3(new web3.providers.HttpProvider("http://127.0.0.1:7545"));
web3

//pressing web3. then press tab you can see (auto complete) other enpoints, functions and method you can work with.

//lets get the balance of an account (it is a promise so we need the then keyword to finish it)
web3.eth.getBalance('0f9584939q8984984989q9489q89q8q').then(console.log);

//this console.logs the exact value of the balance in ether
web3.eth.getBalance('0f9584939q8984984989q9489q89q8q').then(function(result) {console.log(web3.utils.fromwei(result, "ether"));});

// Sending transaction from one wallet to another

