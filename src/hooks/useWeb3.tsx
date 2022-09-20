import { useCallback, useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import Web3 from 'web3';

import { electionsState } from '~/store/electionsStore';

import ElectionContract from '../../truffle-project/build/Election.json';
import MainContract from '../../truffle-project/build/MainContract.json';

const NETWORK_URL = 'HTTP://127.0.0.1:7545'; // Ganache
const MAIN_CONTRACT_ADDRESS = '0xce7A59ec51B00fD2007DC4A288524b32febBa28a';

const web3: Web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider(NETWORK_URL));
const mainContract = new web3.eth.Contract(MainContract.abi as AbiItem[], MAIN_CONTRACT_ADDRESS);

const useWeb3 = () => {
  const [elections, setElections] = useRecoilState(electionsState);
  const [account, setAccount] = useState<string | null>(null);
  const [voting, setVoting] = useState(false);

  const getElectionByID = useCallback(async (id: string, from: string) => {
    const address = String(await mainContract.methods.Elections(id).call());
    const contract = new web3.eth.Contract(ElectionContract.abi as AbiItem[], address);
    const hasVoted = Boolean(await contract.methods.voters(from).call());
    const name = String(await contract.methods.name().call());
    const description = String(await contract.methods.description().call());
    const candidatesCount = Number(await contract.methods.candidatesCount().call());

    const candidates = [];
    for (let j = 0; j < candidatesCount; j++) {
      const candidateData = await contract.methods.candidates(j).call();
      candidates.push({
        id: Number(candidateData.id),
        name: String(candidateData.name),
        voteCount: Number(candidateData.voteCount),
      });
    }

    return {
      address,
      id: Number(id),
      name,
      description,
      candidates,
      hasVoted,
    };
  }, []);

  const refetchElections = useCallback(async () => {
    try {
      if (!account) return;

      const lastElectionID = Number(await mainContract.methods.electionId().call());
      if (!lastElectionID) return;

      const electionDetails = [];

      for (let i = 0; i < lastElectionID; i++) {
        electionDetails[i] = getElectionByID(String(i), String(account));
      }

      const result = await Promise.all(electionDetails);
      setElections(result.sort((a, b) => Number(b.id) - Number(a.id)));
    } catch (error) {
      console.error(error);
      return [];
    }
  }, [account, getElectionByID, setElections]);

  const createElection = useCallback(
    async (electionDetails: { name: string; description: string; candidates: string[] }) => {
      try {
        await mainContract.methods
          .createElection([electionDetails.name, electionDetails.description], electionDetails.candidates)
          .send({ from: account });
        await refetchElections();
      } catch (error) {
        console.log(error);
      }
    },
    [account, refetchElections],
  );

  const voteElection = useCallback(
    async (electionID: number, candidateID: number) => {
      setVoting(true);
      try {
        const address = String(await mainContract.methods.Elections(electionID).call());
        const contract = new web3.eth.Contract(ElectionContract.abi as AbiItem[], address);
        await contract.methods.vote(Number(candidateID)).send({ from: account });
        await refetchElections();
      } catch (error) {
        console.log(error);
      } finally {
        setVoting(false);
      }
    },
    [account, refetchElections],
  );

  useEffect(() => {
    if (!window.ethereum) return;
    (async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (Array.isArray(accounts) && accounts[0]) {
        setAccount(accounts[0]);
      }
    })();
  }, []);

  return {
    web3,
    contract: mainContract,
    account,
    elections,
    voting,
    refetchElections,
    createElection,
    voteElection,
  };
};

export default useWeb3;
