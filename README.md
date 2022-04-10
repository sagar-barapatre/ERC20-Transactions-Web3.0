## Setup
![ssbbjb](./todos.png)

### Usage
You need to have [Metamask Wallet](https://metamask.io/). Connect to the app using your wallet. When connected, your address will show on the top navigation bar. You can deposit your tokens or ether, create orders by choosing the amount of token you want to get in exchange for amount of ether or vice versa, or fill open orders to make a trade.

### Technology Stack and Tools

* [Metamask Wallet](https://metamask.io/)
* [Truffle](https://www.trufflesuite.com/) - development framework
* [React](https://reactjs.org/) - front end framework
* [Redux](https://redux.js.org/) - front end state management framework
* [Solidity](https://docs.soliditylang.org/en/v0.7.4/) - ethereum smart contract language
* [Ganache](https://www.trufflesuite.com/ganache) - local blockchain development
* [Web3](https://web3js.readthedocs.io/en/v1.3.0/) - library interact with ethereum nodes 
* [JavaScript](https://www.javascript.com/) - logic front end and testing smart contracts
* [Infura](https://infura.io/) - connection to ethereum networks 
* [Open Zeppelin](https://infura.io/) - smart contract libraries


For this app to work you will need to install truffle suite globally
```bash
npm i -g truffle
```

Afterwards you should go to the Truffle website and download  [Ganache](https://www.trufflesuite.com/ganache). This will provide you with a local ethereum network to test this app or your projects.

Clone this repo and run  `npm i`. You will also need to clone this  [folder](https://github.com/wainola/BIA/tree/master/dappV1/Ballot-Dapp/ballot-demo)  or just clone the entire project. This folder contains the contracts that you will need to compile and migrate to Ganache.

```bash
truffle version
# Truffle v5.3.9 (core: 5.3.9)
# Solidity - 0.8.3 (solc-js)
# Node v14.16.1
# Web3.js v1.3.6
```
```bash
# setup private network
truffle develop
truffle(develop)> compile
truffle(develop)> migrate
truffle(develop)> test
```

The commands to use with the  [contracts folder](https://github.com/wainola/BIA/tree/master/dappV1/Ballot-Dapp/ballot-demo)  are the following (provided that you installed truffle globally)

-   `truffle compile`  will compile the contracts
-   `truffle migrate --reset`  will migrate the contracts to the network and also pase the  **JSON-RPC**  format to the frontend directory

You can check the configuration for the network and the compile directory in the  `truffle-config.js`  file

## How to use MetaMask with web3

* significant changes in recent updates
* refer the latest official doc
  - https://docs.metamask.io/guide/getting-started.html
  - https://docs.metamask.io/guide/ethereum-provider.html
* sample code
  - https://docs.harmony.one/home/developers/wallets/metamask/interacting-with-metamask