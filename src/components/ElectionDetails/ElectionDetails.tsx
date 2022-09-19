import { Children, FC } from 'react';

import Button from '../Button';

import { Candidates, CandidatesItem, Container, Content, Description, Footer, Header, Title } from './styles';

interface Props {
  data: ElectionInfo;
  onVoteClick?: (election: ElectionInfo) => void;
}

const ElectionDetails: FC<Props> = ({ data, onVoteClick }) => {
  return (
    <Container>
      <Header>
        <Title>{data.name}</Title>
        <Description>{data.description}</Description>
      </Header>
      <Content>
        <Candidates>
          {Children.toArray(
            data.candidates.map((candidate) => (
              <CandidatesItem>
                <span>{candidate.name}</span>
                <span>{candidate.voteCount} votes</span>
              </CandidatesItem>
            )),
          )}
        </Candidates>
      </Content>
      {onVoteClick ? (
        <Footer>
          {data.hasVoted ? 'you already voted' : <Button onClick={() => onVoteClick(data)}>Vote now</Button>}
        </Footer>
      ) : null}
    </Container>
  );
};

export default ElectionDetails;
