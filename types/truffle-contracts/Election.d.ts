/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ElectionContract extends Truffle.Contract<ElectionInstance> {
  "new"(
    _info: string[],
    _candidates: string[],
    meta?: Truffle.TransactionDetails
  ): Promise<ElectionInstance>;
}

type AllEvents = never;

export interface ElectionInstance extends Truffle.ContractInstance {
  candidates(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: string; 2: BN }>;

  candidatesCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  description(txDetails?: Truffle.TransactionDetails): Promise<string>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  voters(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  vote: {
    (
      _candidate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _candidate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _candidate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _candidate: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    candidates(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: string; 2: BN }>;

    candidatesCount(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    description(txDetails?: Truffle.TransactionDetails): Promise<string>;

    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    voters(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    vote: {
      (
        _candidate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _candidate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _candidate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _candidate: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
