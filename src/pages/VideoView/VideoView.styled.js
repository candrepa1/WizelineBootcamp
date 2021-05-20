import styled from 'styled-components';

export const IFrame = styled.iframe`
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const VideoDescription = styled.div`
  padding: 0 2rem;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.title};
  padding-bottom: 0.4rem;
`;

export const Description = styled.p`
  margin-top: 0.8rem;
  color: ${(props) => props.theme.fontColor};
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100vh;
`;

export const VideoContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.body};
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${(props) => props.theme.body};
  overflow: scroll;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1.6rem;
  border-radius: 4px;
  color: ${(props) => props.theme.submitButton.color};
  &:hover {
    background: ${(props) => props.theme.submitButton.backgroundColor};
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
