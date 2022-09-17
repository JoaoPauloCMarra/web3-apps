/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@truffle/contract';

declare interface Window {
  ethereum: any;
  web3: any;
}

declare type UserInfo = {
  username: string;
  email: string;
};

declare type ElectionInfo = {
  address: string;
  id: number;
  name: string;
  description: string;
  candidates: {
    id: number;
    name: string;
    voteCount: number;
  }[];
  hasVoted: boolean;
};

declare type ElectionsList = ElectionInfo[];
