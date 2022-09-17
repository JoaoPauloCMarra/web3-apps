import { useCallback, useEffect, useState } from 'react';

import Web3 from 'web3';

import ElectionContract from '../../truffle-project/build/Election.json';
import MainContract from '../../truffle-project/build/MainContract.json';

const NETWORK_URL = 'HTTP://127.0.0.1:7545';
const MAIN_CONTRACT_ADDRESS = '0xce7A59ec51B00fD2007DC4A288524b32febBa28a';

const web3: Web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider(NETWORK_URL));
const contract = new web3.eth.Contract(MainContract.abi as AbiItem[], MAIN_CONTRACT_ADDRESS);

const useWeb3 = () => {
  const [account, setAccount] = useState<string | null>(null);

  const getElectionByID = useCallback(async (id: string, from: string) => {
    const address = String(await contract.methods.Elections(id).call());
    const contractInstance = new web3.eth.Contract(ElectionContract.abi as AbiItem[], address);
    const hasVoted = Boolean(await contractInstance.methods.voters(from).call());
    const name = String(await contractInstance.methods.name().call());
    const description = String(await contractInstance.methods.description().call());
    const candidatesCount = Number(await contractInstance.methods.candidatesCount().call());

    const candidates = [];
    for (let j = 0; j < candidatesCount; j++) {
      const candidateData = await contractInstance.methods.candidates(j).call();
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

  const getAllElections = useCallback(async () => {
    try {
      if (!account) return;

      const lastElectionID = Number(await contract.methods.electionId().call());
      if (!lastElectionID) return;

      const electionDetails = [];

      for (let i = 0; i < lastElectionID; i++) {
        electionDetails[i] = getElectionByID(String(i), String(account));
      }

      return await Promise.all(electionDetails);
    } catch (error) {
      console.error(error);
      return [];
    }
  }, [account, getElectionByID]);

  const createElection = useCallback(
    async (electionDetails: { name: string; description: string; candidates: string[] }) => {
      try {
        // const transaction = await contract.methods
        await contract.methods
          .createElection([electionDetails.name, electionDetails.description], electionDetails.candidates)
          .send({ from: account });
        // const { transactionHash, status } = transaction;
        // console.log({ transactionHash, status });
      } catch (error) {
        console.log(error);
      }
    },
    [account],
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

  return { web3, contract, account, getAllElections, createElection };
};

export default useWeb3;
