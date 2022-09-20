import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0;
`;

export const ElectionContainer = styled.div`
  background: #f2f2f2;
  border-radius: 0.4rem;
  cursor: default;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
  margin-bottom: 2rem;
  padding: 1rem;
  user-select: none;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ElectionActions = styled.div`
  text-align: center;
`;
