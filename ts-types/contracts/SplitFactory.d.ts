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

interface SplitFactoryInterface extends ethers.utils.Interface {
  functions: {
    "auctionHouse()": FunctionFragment;
    "createSplit(bytes32,address)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "splitOwner()": FunctionFragment;
    "splitter()": FunctionFragment;
    "wethAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "auctionHouse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createSplit",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "splitOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "splitter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "auctionHouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSplit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "splitOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "splitter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export class SplitFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SplitFactoryInterface;

  functions: {
    auctionHouse(overrides?: CallOverrides): Promise<[string]>;

    "auctionHouse()"(overrides?: CallOverrides): Promise<[string]>;

    createSplit(
      merkleRoot_: BytesLike,
      owner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createSplit(bytes32,address)"(
      merkleRoot_: BytesLike,
      owner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<[string]>;

    splitOwner(overrides?: CallOverrides): Promise<[string]>;

    "splitOwner()"(overrides?: CallOverrides): Promise<[string]>;

    splitter(overrides?: CallOverrides): Promise<[string]>;

    "splitter()"(overrides?: CallOverrides): Promise<[string]>;

    wethAddress(overrides?: CallOverrides): Promise<[string]>;

    "wethAddress()"(overrides?: CallOverrides): Promise<[string]>;
  };

  auctionHouse(overrides?: CallOverrides): Promise<string>;

  "auctionHouse()"(overrides?: CallOverrides): Promise<string>;

  createSplit(
    merkleRoot_: BytesLike,
    owner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createSplit(bytes32,address)"(
    merkleRoot_: BytesLike,
    owner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

  splitOwner(overrides?: CallOverrides): Promise<string>;

  "splitOwner()"(overrides?: CallOverrides): Promise<string>;

  splitter(overrides?: CallOverrides): Promise<string>;

  "splitter()"(overrides?: CallOverrides): Promise<string>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  "wethAddress()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    auctionHouse(overrides?: CallOverrides): Promise<string>;

    "auctionHouse()"(overrides?: CallOverrides): Promise<string>;

    createSplit(
      merkleRoot_: BytesLike,
      owner_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createSplit(bytes32,address)"(
      merkleRoot_: BytesLike,
      owner_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

    splitOwner(overrides?: CallOverrides): Promise<string>;

    "splitOwner()"(overrides?: CallOverrides): Promise<string>;

    splitter(overrides?: CallOverrides): Promise<string>;

    "splitter()"(overrides?: CallOverrides): Promise<string>;

    wethAddress(overrides?: CallOverrides): Promise<string>;

    "wethAddress()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    auctionHouse(overrides?: CallOverrides): Promise<BigNumber>;

    "auctionHouse()"(overrides?: CallOverrides): Promise<BigNumber>;

    createSplit(
      merkleRoot_: BytesLike,
      owner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createSplit(bytes32,address)"(
      merkleRoot_: BytesLike,
      owner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    splitOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "splitOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    splitter(overrides?: CallOverrides): Promise<BigNumber>;

    "splitter()"(overrides?: CallOverrides): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "wethAddress()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    auctionHouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "auctionHouse()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createSplit(
      merkleRoot_: BytesLike,
      owner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createSplit(bytes32,address)"(
      merkleRoot_: BytesLike,
      owner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    splitOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "splitOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    splitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "splitter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wethAddress()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
