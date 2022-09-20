import { FC, useCallback, useState } from 'react';

import Button from '~/components/Button';
import ElectionsList from '~/components/ElectionsList';
import ElectionForm from '~/components/Forms/ElectionForm';

import { Container, Title } from './styles';

const Elections: FC = () => {
  const [showElectionForm, setShowElectionForm] = useState(false);

  const onFormClose = useCallback(() => {
    setShowElectionForm(false);
  }, []);

  return (
    <Container>
      <Title>Voting Dapp</Title>

      <Button disabled={showElectionForm} onClick={() => setShowElectionForm(true)}>
        Create new Election
      </Button>

      {showElectionForm ? <ElectionForm onClose={onFormClose} onSubmitDone={onFormClose} /> : null}

      <ElectionsList />
    </Container>
  );
};

export default Elections;
