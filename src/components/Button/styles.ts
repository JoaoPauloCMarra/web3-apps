import styled, { css } from 'styled-components';

export const Container = styled.button<{ active?: boolean }>`
  background: #333;
  border: 1px solid transparent;
  border-radius: 0.4rem;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;

  ${({ active }) =>
    active &&
    css`
      background: #999;
      color: #333;
    `}

  &:hover:not(:disabled) {
    opacity: 0.7;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
