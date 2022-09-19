import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0;

  > div {
    margin-bottom: 2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
