import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
  border-radius: 0.4rem;
  cursor: default;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
  padding: 1rem;
  user-select: none;
`;

export const Header = styled.div`
  padding: 1rem;
`;

export const Content = styled.div``;

export const Footer = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const Title = styled.div`
  color: #121212;
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
`;

export const Description = styled.div`
  color: #333;
  font-size: 1.4rem;
  text-transform: lowercase;
`;

export const Candidates = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`;

export const CandidatesItem = styled.div`
  align-items: center;
  background: #ddd;
  border: 1px solid #d2d2d2;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem;
  padding: 1rem 2rem;

  span:first-child {
    font-size: 1rem;
    font-weight: bolder;
    text-transform: uppercase;
  }
  span:last-child {
    font-size: 0.875rem;
  }
`;
