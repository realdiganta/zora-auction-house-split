/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface SplitterInterface extends ethers.utils.Interface {
  functions: {
    "PERCENTAGE_SCALE()": FunctionFragment;
    "balanceForWindow(uint256)": FunctionFragment;
    "cancelAuction(uint256)": FunctionFragment;
    "claim(uint256,address,uint256,bytes32[])": FunctionFragment;
    "claimForAllWindows(address,uint256,bytes32[])": FunctionFragment;
    "claimToken(address,uint256,address,uint256,bytes32[])": FunctionFragment;
    "createAuction(uint256,address,uint256,uint256,address,uint8,address)": FunctionFragment;
    "currentWindow()": FunctionFragment;
    "endAuction(uint256)": FunctionFragment;
    "incrementWindow()": FunctionFragment;
    "incrementWindowToken(address,uint256)": FunctionFragment;
    "isClaimed(uint256,address)": FunctionFragment;
    "isClaimedToken(uint256,address,address)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "owner()": FunctionFragment;
    "scaleAmountByPercentage(uint256,uint256)": FunctionFragment;
    "setAuctionReservePrice(uint256,uint256)": FunctionFragment;
    "tokenWindowBalance(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "PERCENTAGE_SCALE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceForWindow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimForAllWindows",
    values: [string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimToken",
    values: [string, BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createAuction",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "currentWindow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "endAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementWindow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "incrementWindowToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimedToken",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "scaleAmountByPercentage",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuctionReservePrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenWindowBalance",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "PERCENTAGE_SCALE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceForWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimForAllWindows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endAuction", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementWindowToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isClaimedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scaleAmountByPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuctionReservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenWindowBalance",
    data: BytesLike
  ): Result;

  events: {
    "TransferETH(address,uint256,bool)": EventFragment;
    "WindowIncremented(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TransferETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WindowIncremented"): EventFragment;
}

export class Splitter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SplitterInterface;

  functions: {
    PERCENTAGE_SCALE(overrides?: CallOverrides): Promise<[BigNumber]>;

    "PERCENTAGE_SCALE()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceForWindow(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceForWindow(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cancelAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claim(
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(uint256,address,uint256,bytes32[])"(
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claimForAllWindows(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claimForAllWindows(address,uint256,bytes32[])"(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claimToken(
      token: string,
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claimToken(address,uint256,address,uint256,bytes32[])"(
      token: string,
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createAuction(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    currentWindow(overrides?: CallOverrides): Promise<[BigNumber]>;

    "currentWindow()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    endAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "endAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    incrementWindow(overrides?: Overrides): Promise<ContractTransaction>;

    "incrementWindow()"(overrides?: Overrides): Promise<ContractTransaction>;

    incrementWindowToken(
      _token: string,
      _tokensDeposited: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "incrementWindowToken(address,uint256)"(
      _token: string,
      _tokensDeposited: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isClaimed(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isClaimed(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isClaimedToken(
      window: BigNumberish,
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isClaimedToken(uint256,address,address)"(
      window: BigNumberish,
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    scaleAmountByPercentage(
      amount: BigNumberish,
      scaledPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { scaledAmount: BigNumber }>;

    "scaleAmountByPercentage(uint256,uint256)"(
      amount: BigNumberish,
      scaledPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { scaledAmount: BigNumber }>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokenWindowBalance(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenWindowBalance(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  PERCENTAGE_SCALE(overrides?: CallOverrides): Promise<BigNumber>;

  "PERCENTAGE_SCALE()"(overrides?: CallOverrides): Promise<BigNumber>;

  balanceForWindow(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceForWindow(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cancelAuction(
    auctionId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelAuction(uint256)"(
    auctionId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claim(
    window: BigNumberish,
    account: string,
    scaledPercentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(uint256,address,uint256,bytes32[])"(
    window: BigNumberish,
    account: string,
    scaledPercentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claimForAllWindows(
    account: string,
    percentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claimForAllWindows(address,uint256,bytes32[])"(
    account: string,
    percentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claimToken(
    token: string,
    window: BigNumberish,
    account: string,
    scaledPercentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claimToken(address,uint256,address,uint256,bytes32[])"(
    token: string,
    window: BigNumberish,
    account: string,
    scaledPercentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createAuction(
    tokenId: BigNumberish,
    tokenContract: string,
    duration: BigNumberish,
    reservePrice: BigNumberish,
    curator: string,
    curatorFeePercentages: BigNumberish,
    auctionCurrency: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
    tokenId: BigNumberish,
    tokenContract: string,
    duration: BigNumberish,
    reservePrice: BigNumberish,
    curator: string,
    curatorFeePercentages: BigNumberish,
    auctionCurrency: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  currentWindow(overrides?: CallOverrides): Promise<BigNumber>;

  "currentWindow()"(overrides?: CallOverrides): Promise<BigNumber>;

  endAuction(
    auctionId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "endAuction(uint256)"(
    auctionId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  incrementWindow(overrides?: Overrides): Promise<ContractTransaction>;

  "incrementWindow()"(overrides?: Overrides): Promise<ContractTransaction>;

  incrementWindowToken(
    _token: string,
    _tokensDeposited: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "incrementWindowToken(address,uint256)"(
    _token: string,
    _tokensDeposited: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isClaimed(
    window: BigNumberish,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isClaimed(uint256,address)"(
    window: BigNumberish,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isClaimedToken(
    window: BigNumberish,
    account: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isClaimedToken(uint256,address,address)"(
    window: BigNumberish,
    account: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  scaleAmountByPercentage(
    amount: BigNumberish,
    scaledPercent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "scaleAmountByPercentage(uint256,uint256)"(
    amount: BigNumberish,
    scaledPercent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setAuctionReservePrice(
    auctionId: BigNumberish,
    reservePrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAuctionReservePrice(uint256,uint256)"(
    auctionId: BigNumberish,
    reservePrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokenWindowBalance(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokenWindowBalance(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    PERCENTAGE_SCALE(overrides?: CallOverrides): Promise<BigNumber>;

    "PERCENTAGE_SCALE()"(overrides?: CallOverrides): Promise<BigNumber>;

    balanceForWindow(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceForWindow(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelAuction(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claim(uint256,address,uint256,bytes32[])"(
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimForAllWindows(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claimForAllWindows(address,uint256,bytes32[])"(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimToken(
      token: string,
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claimToken(address,uint256,address,uint256,bytes32[])"(
      token: string,
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    createAuction(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentWindow(overrides?: CallOverrides): Promise<BigNumber>;

    "currentWindow()"(overrides?: CallOverrides): Promise<BigNumber>;

    endAuction(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "endAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    incrementWindow(overrides?: CallOverrides): Promise<void>;

    "incrementWindow()"(overrides?: CallOverrides): Promise<void>;

    incrementWindowToken(
      _token: string,
      _tokensDeposited: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "incrementWindowToken(address,uint256)"(
      _token: string,
      _tokensDeposited: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isClaimed(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isClaimed(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isClaimedToken(
      window: BigNumberish,
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isClaimedToken(uint256,address,address)"(
      window: BigNumberish,
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    scaleAmountByPercentage(
      amount: BigNumberish,
      scaledPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "scaleAmountByPercentage(uint256,uint256)"(
      amount: BigNumberish,
      scaledPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenWindowBalance(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenWindowBalance(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    TransferETH(account: null, amount: null, success: null): EventFilter;

    WindowIncremented(currentWindow: null, fundsAvailable: null): EventFilter;
  };

  estimateGas: {
    PERCENTAGE_SCALE(overrides?: CallOverrides): Promise<BigNumber>;

    "PERCENTAGE_SCALE()"(overrides?: CallOverrides): Promise<BigNumber>;

    balanceForWindow(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceForWindow(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    claim(
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim(uint256,address,uint256,bytes32[])"(
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    claimForAllWindows(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claimForAllWindows(address,uint256,bytes32[])"(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    claimToken(
      token: string,
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claimToken(address,uint256,address,uint256,bytes32[])"(
      token: string,
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    createAuction(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    currentWindow(overrides?: CallOverrides): Promise<BigNumber>;

    "currentWindow()"(overrides?: CallOverrides): Promise<BigNumber>;

    endAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "endAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    incrementWindow(overrides?: Overrides): Promise<BigNumber>;

    "incrementWindow()"(overrides?: Overrides): Promise<BigNumber>;

    incrementWindowToken(
      _token: string,
      _tokensDeposited: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "incrementWindowToken(address,uint256)"(
      _token: string,
      _tokensDeposited: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isClaimed(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isClaimed(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isClaimedToken(
      window: BigNumberish,
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isClaimedToken(uint256,address,address)"(
      window: BigNumberish,
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    scaleAmountByPercentage(
      amount: BigNumberish,
      scaledPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "scaleAmountByPercentage(uint256,uint256)"(
      amount: BigNumberish,
      scaledPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tokenWindowBalance(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenWindowBalance(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PERCENTAGE_SCALE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PERCENTAGE_SCALE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceForWindow(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceForWindow(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claim(
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(uint256,address,uint256,bytes32[])"(
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claimForAllWindows(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimForAllWindows(address,uint256,bytes32[])"(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claimToken(
      token: string,
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimToken(address,uint256,address,uint256,bytes32[])"(
      token: string,
      window: BigNumberish,
      account: string,
      scaledPercentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createAuction(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentages: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    currentWindow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentWindow()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "endAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    incrementWindow(overrides?: Overrides): Promise<PopulatedTransaction>;

    "incrementWindow()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    incrementWindowToken(
      _token: string,
      _tokensDeposited: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "incrementWindowToken(address,uint256)"(
      _token: string,
      _tokensDeposited: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isClaimed(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isClaimed(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isClaimedToken(
      window: BigNumberish,
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isClaimedToken(uint256,address,address)"(
      window: BigNumberish,
      account: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scaleAmountByPercentage(
      amount: BigNumberish,
      scaledPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "scaleAmountByPercentage(uint256,uint256)"(
      amount: BigNumberish,
      scaledPercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tokenWindowBalance(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenWindowBalance(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
