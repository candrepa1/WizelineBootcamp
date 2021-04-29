import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 10rem 3rem;
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props.theme.body};
`;

export const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  font-family: 'Roboto', sans-serif;
  border-radius: 0.5rem;
  font-size: 2rem;
`;

export const Modal = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  visibility: visible;
  background-color: #191919;
`;

export const HiddenModal = styled(Modal)`
  visibility: hidden;
  opacity: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LoginTitle = styled.h3`
  color: black;
  font-weight: lighter;
  margin-bottom: 3rem;
  color: white;
`;
