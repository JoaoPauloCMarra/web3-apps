import { Children, FC } from 'react';

import { Container } from './styles';

interface Props {
  elections?: ElectionsList;
}

const ElectionsList: FC<Props> = ({ elections }) => {
  return (
    <Container>
      {Children.toArray(
        elections?.map((election) => (
          <small>
            <pre>{JSON.stringify(election, null, 2)}</pre>
          </small>
        )),
      )}
    </Container>
  );
};

export default ElectionsList;
