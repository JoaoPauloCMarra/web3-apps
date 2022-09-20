import { Children, FC, useCallback, useState } from 'react';

import Button from '~/components/Button';
import useWeb3 from '~/hooks/useWeb3';

import { Actions, Candidates, CandidatesItem, Container, Content, Description, Header, Title } from './styles';

interface Props {
  data: ElectionInfo;
  enableVotes?: boolean;
}

const ElectionDetails: FC<Props> = ({ data, enableVotes }) => {
  const { voting, voteElection } = useWeb3();
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateInfo | null>(null);

  const onVoteSubmit = useCallback(
    async (electionID: number) => {
      if (!selectedCandidate) return;
      await voteElection(electionID, selectedCandidate.id);
      setSelectedCandidate(undefined);
    },
    [selectedCandidate, voteElection],
  );

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
              <CandidatesItem
                active={selectedCandidate?.id === candidate.id}
                onClick={() => (enableVotes ? setSelectedCandidate(candidate) : () => null)}
                selectable={enableVotes}
              >
                <span>{candidate.name}</span>
                <span>{candidate.voteCount} votes</span>
              </CandidatesItem>
            )),
          )}
        </Candidates>
        <Actions>
          {enableVotes ? (
            <>
              {!voting && (
                <Button disabled={Number(selectedCandidate?.id) < 0} onClick={() => onVoteSubmit(data.id)}>
                  Submit Vote
                </Button>
              )}
              {voting ? <p>processing your vote...</p> : null}
            </>
          ) : null}
        </Actions>
      </Content>
    </Container>
  );
};

export default ElectionDetails;
