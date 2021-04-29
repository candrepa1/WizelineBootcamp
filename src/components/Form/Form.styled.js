import styled from 'styled-components';

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  margin-top: 1.5rem;
`;

export const Input = styled.input`
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  padding: 1rem;
  color: white;
  background: #191919;
  border: 1px solid;
  border-radius: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  border: 0;
  padding: 1rem;
  color: #556cd6;
  background: none;
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  &:hover {
    background: #d4dbfa;
    border-radius: 0.5rem;
  }
`;
