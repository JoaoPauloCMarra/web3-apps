import styled, { css } from 'styled-components';

const getStyle = (active = false) => ({
  primary: css`
    background: #3182ce;
    color: #fff;
    ${active &&
    css`
      background: #63b3ed;
      color: #121212;
    `}
  `,
  secondary: css`
    background: #38a169;
    color: #fff;
    ${active &&
    css`
      background: #68d391;
      color: #121212;
    `}
  `,
});

export const Container = styled.button<{ active?: boolean; variant?: 'primary' | 'secondary' }>`
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

  ${({ variant, active }) => {
    try {
      return variant ? getStyle(active)[variant] : '';
    } catch (error) {
      return '';
    }
  }}

  &:hover:not(:disabled) {
    opacity: 0.7;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
