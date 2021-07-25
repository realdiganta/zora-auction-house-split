# Zoro Auction House Split Contract

This repository has been forked from mirror-xyz's implementation of Split Contracts, and modified for use with Zora Auction House as per the requirements in [Feature Request: Auction Splits Contract#5](https://github.com/ourzora/auction-house/issues/5)

## Contract Architecture
This uses a Proxy Contract pattern to reduce gas costs for deploying new split contracts. The Split Contract supports multiple ERC20 tokens & also ETH as payment. 

For e.g. The Split Contract may get the first payment in ETH, the second in WBTC tokens, the third again in WBTC tokens, the fourth in ETH, the fifth in maybe SUSHI, etc. and it will efficiently store each deposit (using a concept of window) and pay out the shares to the users as per their allocations.

There are 3 primary contracts here:
1. [Splitter](): This is the core logic contract and contains all the logic for interacting with the Auction House & for claiming of shares by the users. This contract needs to be deployed just once by the Zora Team. (Works like a library contract).
2. [SplitProxy](): This is a proxy Contract which only stores some storage variables and delegates the core logic to the Splitter Contract. It interacts with the Splitter with the help of Delegate Calls. This is the contract which will be deployed by the user to create a split.
3. [SplitFactory](): This is the factory contract that the user can interact with to create SplitProxy Contracts by calling the <strong>createSplit()</strong> function.

## Splitter Contract Design 
As explained in [mirror-xyz](https://dev.mirror.xyz/V_7Jp1hy_g8bz-J1B4Wb5KYSmj5Lt4W7q7cw0noxJsU) a merkle proof implemenation has been done, where no array of members is stored to keep track of the members of the split contract and their allocations. Instead just a merkle tree root is stored which is used to verify the member and his/her allocation whenever the member tries to claim the profit shares. Thus the member needs to submit a merkle proof to verify that he/she actually has that allocation whenever he/she tries to claim the profit from the contract. This allows for a very large number of accounts to split the allocations while being relatively cheap to distribute funds.

Now since a split contract may get payments multiple times, [mirror-xyz](https://dev.mirror.xyz/V_7Jp1hy_g8bz-J1B4Wb5KYSmj5Lt4W7q7cw0noxJsU) used a concept of claim-"window" to track the exact deposits for each sale & prevent users from claiming more than once from a given deposit. However, since our requirement needed splitting of ERC20 tokens too (which was not supported in the mirror-xyz implementation), a few more things needed to be added here.

To track ETH deposits for different windows, mirror-xyz used a <strong>"balanceForWindow"</strong> dynamic array where the ETH deposits for each window were stored. But this cannot be used to track ERC20 token balances. 

So I added a mapping called <strong>"tokenWindowBalance"</strong> which maps a bytes32 array to a uint256. The bytes32 array will be the hash of the token address & the window number. And the uint256 will be the deposits balance of that token for that window. For ETH transfers, we are using the zero address as the token address. So whenever a user wants to withdraw a token for a particular window, we can easily check the "tokenWindowBalance" mapping for the exact deposits for that window. (This also removed the need for the balanceForWindow dynamic array, thus saving us a little gas during ProxyContract creation).

Also, there is another bytes32=>bool mapping called <strong>"claimed"</strong> which maps the hash of the window, user's account address & the token address to a bool. Once the user has claimed his/her shares for a particular window, this mapping is set to <strong>true</strong> thus preventing multiple claims for the same window.

Now for governance, an address needs to be set as owner during the ProxyContract creation. This owner will have the authority to call the Auction House functions like creating an auction, setting the price, etc. Since, each split contract is supposed to be used for just one auction, so transfer of ownership is not allowed in the contract.
Also, the owner must be the owner of the NFT while creating the Auction. The Split Contract is only given approval for the NFT. The ownership of the NFT stays with the actual owner.



## Documentation
### SplitFactory.sol
<strong>createSplit(bytes32 merkleRoot, address owner)</strong>
```
info: creates a new SplitProxy Contract

access: public
```

### SplitProxy.sol / Splitter.sol
(The SplitProxy Contract will make delegate calls of the below functions to the Splitter contract)

<strong>claim(address token, uint256 window, address account, uint256 scaledPercentageAllocation, bytes32[] calldata merkleProof)</strong>
```
info: claims the shares of an account for a particular window based on the given allocation percentage. Put the zero address as token address for claiming ETH.

access: public
```

<strong>createAuction(uint256 tokenId, address tokenContract, uint256 duration, uint256 reservePrice, address payable curator, uint8 curatorFeePercentage, address auctionCurrency)</strong>
```
info: approves the SplitContract & then calls the createAuction function of the Zora Auction House Contract

access: only owner
```

<strong>endAuction(uint256 auctionId)</strong>

```
info: calls the endAuction function of the Auction House Contract & increments the current window. After this function is called, the users can claim their profits.

access: only owner
```

<strong>setAuctionReservePrice( uint256 auctionId, uint256 reservePrice)</strong>
```
info: calls the setAuctionReservePrice function of the Auction House Contract

access: only owner
``` 

<strong>cancelAuction(uint256 auctionId)</strong>
```
info: calls the cancelAuction function of the Auction House Contract

access: only owner
```

## To get Root Hash & Allocations Off-Chain
As already clear, the merkle tree with the allocations is created off-chain, and only the root hash is submitted while creating the split contract.
```js
import AllocationTree from "../merkle-tree/balance-tree";

const claimers = [account1, account2];
const allocationPercentages = [50000000, 50000000];
const allocations = allocationPercentages.map((percentage, index) => {
    return {
    account: claimers[index].address,
    allocation: BigNumber.from(percentage),
    };
});

tree = new AllocationTree(allocations);
const rootHash = tree.getHexRoot();
```

## Tests
Sorry, ran out of time

## Deploy
To deploy to local hardhat environment
```
npx hardhat run --network localhost scripts/deploy.ts
```
