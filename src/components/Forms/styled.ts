import styled from 'styled-components';

export const ElectionFormContainer = styled.form`
  border: 1px solid #333;
  border-radius: 0.4rem;
  margin: 1rem 0;
  max-width: 30rem;
  padding: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const Input = styled.input`
  appearance: none;
  border: 1px solid #333;
  border-radius: 0.4rem;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
`;

export const FormFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Message = styled.span`
  color: teal;
  display: inline-block;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;
