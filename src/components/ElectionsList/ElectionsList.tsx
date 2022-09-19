import { Children, FC, useState } from 'react';

import ElectionDetails from '~/components/ElectionDetails';

import { Container } from './styles';

interface Props {
  elections?: ElectionsList;
}

const ElectionsList: FC<Props> = ({ elections }) => {
  const [selectedElection, setSelectedElection] = useState<ElectionInfo | null>(null);

  return (
    <Container>
      <span>Vote Modal for {selectedElection?.name}</span>
      {Children.toArray(
        elections?.map((election) => <ElectionDetails data={election} onVoteClick={setSelectedElection} />),
      )}
    </Container>
  );
};

export default ElectionsList;
