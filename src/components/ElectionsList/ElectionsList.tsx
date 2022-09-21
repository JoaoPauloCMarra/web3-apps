import { Children, FC, useEffect, useState } from 'react';

import Button from '~/components/Button';
import ElectionDetails from '~/components/ElectionDetails';
import Modal from '~/components/Modal';
import useWeb3 from '~/hooks/useWeb3';

import { Container, ElectionActions, ElectionContainer } from './styles';

const ElectionsList: FC = () => {
  const { web3, contract, elections, refetchElections } = useWeb3();
  const [loading, setLoading] = useState(true);
  const [selectedElection, setSelectedElection] = useState<ElectionInfo | null>(null);

  useEffect(() => {
    if (!web3 || !contract || !refetchElections) return;
    (async () => {
      setLoading(true);
      await refetchElections();
      setLoading(false);
    })();
  }, [contract, refetchElections, web3]);

  if (loading) {
    return <p>loading elections...</p>;
  }

  if (!elections || elections.length === 0) {
    return <p>no election created yet...</p>;
  }

  return (
    <Container>
      <Modal
        isVisible={Boolean(selectedElection ? Number(selectedElection?.id) > -1 : null)}
        onClose={() => setSelectedElection(null)}
      >
        {selectedElection ? (
          <ElectionDetails data={selectedElection} enableVotes onVoteDone={() => setSelectedElection(null)} />
        ) : null}
      </Modal>

      {Children.toArray(
        elections?.map((election) => (
          <ElectionContainer>
            <ElectionDetails data={election} />
            {!election.hasVoted && (
              <ElectionActions>
                <Button onClick={() => setSelectedElection(election)} variant="secondary">
                  Vote now
                </Button>
              </ElectionActions>
            )}
          </ElectionContainer>
        )),
      )}
    </Container>
  );
};

export default ElectionsList;
