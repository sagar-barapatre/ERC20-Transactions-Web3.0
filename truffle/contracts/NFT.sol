// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NFT {

    function getBalance(address _owner) public view returns (uint256) {
        return _owner.balance;
    }
}