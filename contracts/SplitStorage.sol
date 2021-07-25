// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

/**
 * @title SplitStorage
 * @author MirrorXYZ
 * Modified by realdiganta
 */
contract SplitStorage {
    bytes32 public merkleRoot;
    uint256 public currentWindow;
    address public owner; // address of the account that will be able to call the auction house functions
    address internal auctionHouse;
    address internal wethAddress;
    address internal _splitter; // address for the splitter contract
    mapping(bytes32 => uint256) public tokenWindowBalance; // mapping from a token's window balance to the amount of that token
    mapping(bytes32 => bool) internal claimed;
}