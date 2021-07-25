// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

import {SplitStorage} from "./SplitStorage.sol";
import {IAuctionHouse} from "./interfaces/IAuctionHouse.sol";

interface IERC165 {
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}

interface IERC721 is IERC165 {
    function approve(address to, uint256 tokenId) external;
}

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
}

interface IWETH {
    function deposit() external payable;

    function transfer(address to, uint256 value) external returns (bool);
}

/*
 * @title Splitter
 * @author MirrorXYZ
 * Modified for Zora Auction House by @realdiganta
 * Building on the work from the Uniswap team at https://github.com/Uniswap/merkle-distributor
 */

contract Splitter is SplitStorage {
    uint256 public constant PERCENTAGE_SCALE = 10e5;

    // The TransferETH event is emitted after each eth transfer in the split is attempted.
    event TransferETH(
        // The account to which the transfer was attempted.
        address account,
        // The amount for transfer that was attempted.
        uint256 amount,
        // Whether or not the transfer succeeded.
        bool success
    );

    // Emits when a window is incremented.
    event WindowIncremented(uint256 currentWindow, uint256 fundsAvailable);


    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

  /**
     * @notice Create an auction.
     * @dev Store the auction details in the auctions mapping and emit an AuctionCreated event.
     * If there is no curator, or if the curator is the auction creator, automatically approve the auction.
     */
    function createAuction(
        uint256 tokenId,
        address tokenContract,
        uint256 duration,
        uint256 reservePrice,
        address payable curator,
        uint8 curatorFeePercentages,
        address auctionCurrency
    ) external onlyOwner returns (uint256) {

        // first approve the proxy contract to use the tokenId
        IERC721(tokenContract).approve(address(this), tokenId);

        // here msg.sender will be the proxy contract
       uint256 auctionId =  IAuctionHouse(auctionHouse).createAuction(tokenId, tokenContract, duration, reservePrice, curator, curatorFeePercentages, auctionCurrency);

       return auctionId;
    }

    function setAuctionReservePrice(
        uint256 auctionId, 
        uint256 reservePrice
    ) external onlyOwner {
        IAuctionHouse(auctionHouse).setAuctionReservePrice(auctionId, reservePrice);
    }

    function cancelAuction(uint256 auctionId) external onlyOwner {
        IAuctionHouse(auctionHouse).cancelAuction(auctionId);
    }

    function endAuction(uint256 auctionId) external onlyOwner {
        IAuctionHouse.Auction memory auction = IAuctionHouse(auctionHouse).auctions(auctionId);
        if (auction.auctionCurrency == address(0)) {
            // it is a ETH transfer
            IAuctionHouse(auctionHouse).endAuction(auctionId);
            incrementWindow();
        } else {
            // it is a Token transfer
            uint256 prevBalance = IERC20(auction.auctionCurrency).balanceOf(address(this));
            IAuctionHouse(auctionHouse).endAuction(auctionId);
            uint256 newBalance = IERC20(auction.auctionCurrency).balanceOf(address(this));
            incrementWindowToken(auction.auctionCurrency, newBalance-prevBalance);
        }
    }


    /// @notice this is only for claiming the ETH. For Tokens you have to call the claimToken() function
    function claimForAllWindows(
        address account,
        uint256 percentageAllocation,
        bytes32[] calldata merkleProof
    ) external {
        // Make sure that the user has this allocation granted.
        require(
            verifyProof(
                merkleProof,
                merkleRoot,
                getNode(account, percentageAllocation)
            ),
            "Invalid proof"
        );

        uint256 amount = 0;
        for (uint256 i = 0; i < currentWindow; i++) {
            if (!isClaimed(i, account)) {
                setClaimed(i, account);

                amount += scaleAmountByPercentage(
                    balanceForWindow[i],
                    percentageAllocation
                );
            }
        }

        transferETHOrWETH(account, amount);
    }

    function getNode(address account, uint256 percentageAllocation)
        private
        pure
        returns (bytes32)
    {
        return keccak256(abi.encodePacked(account, percentageAllocation));
    }

    function scaleAmountByPercentage(uint256 amount, uint256 scaledPercent)
        public
        pure
        returns (uint256 scaledAmount)
    {
        /*
            Example:
                If there is 100 ETH in the account, and someone has 
                an allocation of 2%, we call this with 100 as the amount, and 200
                as the scaled percent.

                To find out the amount we use, for example: (100 * 200) / (100 * 100)
                which returns 2 -- i.e. 2% of the 100 ETH balance.
         */
        scaledAmount = (amount * scaledPercent) / (100 * PERCENTAGE_SCALE);
    }

    function claim(
        uint256 window,
        address account,
        uint256 scaledPercentageAllocation,
        bytes32[] calldata merkleProof
    ) external {
        require(currentWindow > window, "cannot claim for a future window");
        require(
            !isClaimed(window, account),
            "Account already claimed the given window"
        );

        setClaimed(window, account);

        require(
            verifyProof(
                merkleProof,
                merkleRoot,
                getNode(account, scaledPercentageAllocation)
            ),
            "Invalid proof"
        );

        transferETHOrWETH(
            account,
            // The absolute amount that's claimable.
            scaleAmountByPercentage(
                balanceForWindow[window],
                scaledPercentageAllocation
            )
        );
    }

    function claimToken(
        address token,
        uint256 window,
        address account,
        uint256 scaledPercentageAllocation,
        bytes32[] calldata merkleProof
    ) external {
        require(currentWindow > window, "cannot claim for a future window");
        require(
            !isClaimedToken(window, account, token),
            "Already claimed the token for window"
        );

        setClaimedToken(window, account, token);

        require(
            verifyProof(
                merkleProof,
                merkleRoot,
                getNode(account, scaledPercentageAllocation)
            ),
            "Invalid proof"
        );

        IERC20(token).transfer(account, scaleAmountByPercentage(
                tokenWindowBalance[encodeAddress(window, account)],
                scaledPercentageAllocation
            ));
    }

    function incrementWindow() public {
        uint256 fundsAvailable;

        if (currentWindow == 0) {
            fundsAvailable = address(this).balance;
        } else {
            // Current Balance, subtract previous balance to get the
            // funds that were added for this window.
            fundsAvailable = depositedInWindow;
        }

        depositedInWindow = 0;
        require(fundsAvailable > 0, "No additional funds for window");
        balanceForWindow.push(fundsAvailable);
        currentWindow += 1;
        emit WindowIncremented(currentWindow, fundsAvailable);
    }

    function incrementWindowToken(address _token, uint256 _tokensDeposited) public {
        require(_tokensDeposited > 0, "No additional funds for window");
        tokenWindowBalance[encodeAddress(currentWindow, _token)] = _tokensDeposited;
        currentWindow += 1;
        emit WindowIncremented(currentWindow, _tokensDeposited);
    }

    function isClaimed(uint256 window, address account)
        public
        view
        returns (bool)
    {
        return claimed[encodeAddress(window, account)];
    }

    function isClaimedToken(uint256 window, address account, address token) public view returns (bool) {
        return claimed[keccak256(abi.encodePacked(window, account, token))];
    }

    //======== Private Functions ========

    function setClaimed(uint256 window, address account) private {
        claimed[encodeAddress(window, account)] = true;
    }

    function setClaimedToken(uint256 window, address account, address token) private {
        claimed[keccak256(abi.encodePacked(window, account, token))] = true;
    }

    function encodeAddress(uint256 window, address account)
        private
        pure
        returns (bytes32)
    {
        return keccak256(abi.encodePacked(window, account));
    }

    function amountFromPercent(uint256 amount, uint32 percent)
        private
        pure
        returns (uint256)
    {
        // Solidity 0.8.0 lets us do this without SafeMath.
        return (amount * percent) / 100;
    }

    // Will attempt to transfer ETH, but will transfer WETH instead if it fails.
    function transferETHOrWETH(address to, uint256 value)
        private
        returns (bool didSucceed)
    {
        // Try to transfer ETH to the given recipient.
        didSucceed = attemptETHTransfer(to, value);
        if (!didSucceed) {
            // If the transfer fails, wrap and send as WETH, so that
            // the auction is not impeded and the recipient still
            // can claim ETH via the WETH contract (similar to escrow).
            IWETH(wethAddress).deposit{value: value}();
            IWETH(wethAddress).transfer(to, value);
            // At this point, the recipient can unwrap WETH.
        }

        emit TransferETH(to, value, didSucceed);
    }

    function attemptETHTransfer(address to, uint256 value)
        private
        returns (bool)
    {
        // Here increase the gas limit a reasonable amount above the default, and try
        // to send ETH to the recipient.
        // NOTE: This might allow the recipient to attempt a limited reentrancy attack.
        (bool success, ) = to.call{value: value, gas: 30000}("");
        return success;
    }

    // From https://github.com/protofire/zeppelin-solidity/blob/master/contracts/MerkleProof.sol
    function verifyProof(
        bytes32[] memory proof,
        bytes32 root,
        bytes32 leaf
    ) private pure returns (bool) {
        bytes32 computedHash = leaf;

        for (uint256 i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];

            if (computedHash <= proofElement) {
                // Hash(current computed hash + current element of the proof)
                computedHash = keccak256(
                    abi.encodePacked(computedHash, proofElement)
                );
            } else {
                // Hash(current element of the proof + current computed hash)
                computedHash = keccak256(
                    abi.encodePacked(proofElement, computedHash)
                );
            }
        }

        // Check if the computed hash (root) is equal to the provided root
        return computedHash == root;
    }
}
