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
    "claim(uint256,address,uint256,bytes32[])": FunctionFragment;
    "claimForAllWindows(address,uint256,bytes32[])": FunctionFragment;
    "currentWindow()": FunctionFragment;
    "incrementWindow()": FunctionFragment;
    "isClaimed(uint256,address)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "scaleAmountByPercentage(uint256,uint256)": FunctionFragment;
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
    functionFragment: "claim",
    values: [BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimForAllWindows",
    values: [string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "currentWindow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "incrementWindow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scaleAmountByPercentage",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "PERCENTAGE_SCALE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceForWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimForAllWindows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scaleAmountByPercentage",
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

    currentWindow(overrides?: CallOverrides): Promise<[BigNumber]>;

    "currentWindow()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    incrementWindow(overrides?: Overrides): Promise<ContractTransaction>;

    "incrementWindow()"(overrides?: Overrides): Promise<ContractTransaction>;

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

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<[string]>;

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

  currentWindow(overrides?: CallOverrides): Promise<BigNumber>;

  "currentWindow()"(overrides?: CallOverrides): Promise<BigNumber>;

  incrementWindow(overrides?: Overrides): Promise<ContractTransaction>;

  "incrementWindow()"(overrides?: Overrides): Promise<ContractTransaction>;

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

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

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

    currentWindow(overrides?: CallOverrides): Promise<BigNumber>;

    "currentWindow()"(overrides?: CallOverrides): Promise<BigNumber>;

    incrementWindow(overrides?: CallOverrides): Promise<void>;

    "incrementWindow()"(overrides?: CallOverrides): Promise<void>;

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

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

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

    currentWindow(overrides?: CallOverrides): Promise<BigNumber>;

    "currentWindow()"(overrides?: CallOverrides): Promise<BigNumber>;

    incrementWindow(overrides?: Overrides): Promise<BigNumber>;

    "incrementWindow()"(overrides?: Overrides): Promise<BigNumber>;

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

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    currentWindow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentWindow()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    incrementWindow(overrides?: Overrides): Promise<PopulatedTransaction>;

    "incrementWindow()"(overrides?: Overrides): Promise<PopulatedTransaction>;

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

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
  };
}
