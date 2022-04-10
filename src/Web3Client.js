import NFTContractBuild from 'contracts/NFT.json';
import Web3 from 'web3';

let selectedAccount;

let isInitialized = false;
let nftContract;
let provider = window.ethereum;

const init = async () => {
	// let provider = window.ethereum;

	if (typeof provider !== 'undefined') {
		provider
			.request({ method: 'eth_requestAccounts' })
			.then((accounts) => {
				selectedAccount = accounts[0];
				console.log(`Selected account is ${selectedAccount}`);
			})
			.catch((err) => {
				console.log(err);
				return;
			});

		window.ethereum.on('accountsChanged', function (accounts) {
			selectedAccount = accounts[0];
			console.log(`Selected account changed to ${selectedAccount}`);
		});
	}

	const web3 = new Web3(provider);

	const networkId = await web3.eth.net.getId();

	nftContract = new web3.eth.Contract(
		NFTContractBuild.abi,
		NFTContractBuild.networks[networkId].address
	);
	isInitialized = true;
};

export const GetOwnBalance = async () => {
	if (!isInitialized) {
		await init();
	}
	// const web2 = new Web3(provider);
	const balance = await nftContract.methods
		.getBalance(selectedAccount)
		.call();
			
	return balance;
};
var TransactionHash;
export const SendTransaction = async () => {
	// e.preventDefault();
	const to_Address = document.getElementById('to_Address').value;
	const valueAmount = document.getElementById('valueAmount').value;
	if (!isInitialized) {
    await init();
  }
	const web2 = new Web3(provider);
	TransactionHash = await web2.eth.sendTransaction(
    {
      from: selectedAccount.toString(),
      to: to_Address.toString(),
      value: valueAmount.toString(),
    },
    function (err, transactionHash) {
      if (err) {
        console.log(err);
      } else {
        // console.log("intermediate balance : " + transactionHash);
		  TransactionHash = transactionHash;
		  
      }
    }
  );
	// console.log(to_Address, valueAmount);
	return TransactionHash;
};

// export  TransactionHash;

// module.exports =  GetOwnBalance;
// export default GetOwnBalance;
