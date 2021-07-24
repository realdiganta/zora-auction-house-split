// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

import {SplitProxy} from "./SplitProxy.sol";

/**
 * @title SplitFactory
 * @author MirrorXYZ
 * @editor realdiganta
 */
contract SplitFactory {
    //======== Immutable storage =========

    address public immutable splitter;
    address public immutable wethAddress;
    address public immutable auctionHouse;

    //======== Mutable storage =========

    // Gets set within the block, and then deleted.
    bytes32 public merkleRoot;
    address public splitOwner;

    //======== Constructor =========

    constructor(address splitter_, address wethAddress_, address auctionHouse_) {
        splitter = splitter_;
        wethAddress = wethAddress_;
        auctionHouse = auctionHouse_;
    }

    //======== Deploy function =========

    function createSplit(bytes32 merkleRoot_, address owner_)
        external
        returns (address splitProxy)
    {
        merkleRoot = merkleRoot_;
        splitOwner = owner_;
        splitProxy = address(
            new SplitProxy{salt: keccak256(abi.encode(merkleRoot_))}()
        );
        delete merkleRoot;
        delete splitOwner;
    }
}
