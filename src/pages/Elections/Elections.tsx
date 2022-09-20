import { FC, useCallback, useEffect, useState } from 'react';

import Button from '~/components/Button';
import ElectionsList from '~/components/ElectionsList';
import ElectionForm from '~/components/Forms/ElectionForm';
import useWeb3 from '~/hooks/useWeb3';

import { Container, Title } from './styles';

const Elections: FC = () => {
  const { web3, contract, getAllElections } = useWeb3();
  const [elections, setElections] = useState<ElectionsList | null>(null);
  const [showElectionForm, setShowElectionForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const refetchElections = useCallback(async () => {
    setLoading(true);
    const electionsList = await getAllElections();
    if (electionsList) {
      setElections(electionsList);
    }
    setLoading(false);
  }, [getAllElections]);

  const onFormClose = useCallback(() => {
    setShowElectionForm(false);
    refetchElections();
  }, [refetchElections]);

  useEffect(() => {
    if (!web3 || !contract) return;
    (async () => {
      await refetchElections();
    })();
  }, [contract, refetchElections, web3]);

  return (
    <Container>
      <Title>Voting Dapp</Title>

      <Button disabled={showElectionForm} onClick={() => setShowElectionForm(true)}>
        Create new Election
      </Button>

      {showElectionForm ? <ElectionForm onClose={onFormClose} onSubmitDone={onFormClose} /> : null}

      <div>
        {loading ? <span>loading...</span> : null}
        {!loading && elections && elections.length === 0 ? <p>no election created</p> : null}
        {!loading && elections && elections.length > 0 ? <ElectionsList elections={elections} /> : null}
      </div>
    </Container>
  );
};

export default Elections;
