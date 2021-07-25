import { ethers, waffle } from "hardhat";
import fs from "fs";

const config = {
  mainnet: {
    WETH_ADDRESS: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
   AUCTION_HOUSE : "0xE468cE99444174Bd3bBBEd09209577d25D1ad673"

  },
  rinkeby: {
    WETH_ADDRESS: "0xc778417e063141139fce010982780140aa0cd5ab",
    AUCTION_HOUSE : "0xE7dd1252f50B3d845590Da0c5eADd985049a03ce"
  },
  hardhat: {
    // Note: This won't integrate, but will allow us to test deploys.
    WETH_ADDRESS: "0xc778417e063141139fce010982780140aa0cd5ab",
    AUCTION_HOUSE : "0xE468cE99444174Bd3bBBEd09209577d25D1ad673"
  },
};

const NETWORK_MAP = {
  "1": "mainnet",
  "4": "rinkeby",
  "1337": "hardhat",
  "31337": "hardhat",
};

let isLocal = false;

async function main() {
  const chainId = (await waffle.provider.getNetwork()).chainId;

  console.log({chainId})
  const networkName = NETWORK_MAP[chainId];

  console.log(`Deploying to ${networkName}`);

  const { WETH_ADDRESS, AUCTION_HOUSE } = config[networkName];

  const Splitter = await ethers.getContractFactory("Splitter");
  const splitter = await Splitter.deploy();
  await splitter.deployed();

  const SplitFactory = await ethers.getContractFactory("SplitFactory");
  const splitFactory = await SplitFactory.deploy(
    splitter.address,
    WETH_ADDRESS,
    AUCTION_HOUSE
  );
  await splitFactory.deployed();

  const info = {
    Contracts: {
      Splitter: splitter.address,
      SplitFactory: splitFactory.address,
    },
  };

  console.log(info);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
