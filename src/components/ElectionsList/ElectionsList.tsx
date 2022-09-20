import { Children, FC, useState } from 'react';

import Button from '~/components/Button';
import ElectionDetails from '~/components/ElectionDetails';
import Modal from '~/components/Modal';

import { Container, ElectionActions, ElectionContainer } from './styles';

interface Props {
  elections?: ElectionsList;
}

const ElectionsList: FC<Props> = ({ elections }) => {
  const [selectedElection, setSelectedElection] = useState<ElectionInfo | null>(null);

  return (
    <Container>
      <Modal
        isVisible={Boolean(selectedElection ? Number(selectedElection?.id) > -1 : null)}
        onClose={() => setSelectedElection(null)}
      >
        {selectedElection ? <ElectionDetails data={selectedElection} enableVotes /> : null}
      </Modal>

      {Children.toArray(
        elections?.map((election) => (
          <ElectionContainer>
            <ElectionDetails data={election} />
            <ElectionActions>
              <Button onClick={() => setSelectedElection(election)}>Vote now</Button>
            </ElectionActions>
          </ElectionContainer>
        )),
      )}
    </Container>
  );
};

export default ElectionsList;
