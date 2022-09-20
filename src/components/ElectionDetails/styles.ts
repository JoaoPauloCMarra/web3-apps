import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  padding: 1rem;
`;

export const Content = styled.div`
  max-width: 100%;
`;

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
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
`;

export const CandidatesItem = styled.div<{ selectable?: boolean; active?: boolean }>`
  align-items: center;
  background: #ddd;
  border: 1px solid #d2d2d2;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  padding: 1rem 2rem;

  span:first-child {
    font-size: 1rem;
    font-weight: bolder;
    text-transform: uppercase;
  }
  span:last-child {
    font-size: 0.875rem;
  }

  ${({ selectable, active }) =>
    selectable &&
    css`
      ${active &&
      css`
        background: #333;
        color: white;
      `}
      &:hover:not(:disabled) {
        background: #333;
        color: white;
        cursor: pointer;
      }
      &:disabled {
        cursor: not-allowed;
      }
    `}
`;

export const Actions = styled.div`
  text-align: center;
`;
