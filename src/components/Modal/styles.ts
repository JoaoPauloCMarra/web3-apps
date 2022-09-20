import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
`;

export const ModalWindow = styled.div`
  background: #fff;
  border-radius: 0.4rem;
  margin-top: -25%;
  max-width: 50rem;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Actions = styled.div`
  padding: 2rem 1rem;
  text-align: center;
`;
