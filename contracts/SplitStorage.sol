// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

/**
 * @title SplitStorage
 * @author MirrorXYZ
 * @editor realdiganta
 */
contract SplitStorage {
    bytes32 public merkleRoot;
    uint256 public currentWindow;
    address public owner;
    address internal auctionHouse;
    address internal wethAddress;
    address internal _splitter;
    uint256[] public balanceForWindow;
    mapping(bytes32 => bool) internal claimed;
    uint256 internal depositedInWindow;
}
