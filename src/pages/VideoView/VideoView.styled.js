import styled from 'styled-components';

export const IFrame = styled.iframe`
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const VideoDescription = styled.div`
  padding: 0 2rem;
`;

export const Title = styled.h3`
  color: white;
  padding-bottom: 0.4rem;
`;

export const Description = styled.p`
  margin-top: 0.8rem;
  color: #aaaaaa;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: 100vh;
`;

export const VideoContainer = styled.div`
  padding: 1rem;
  background-color: #191919;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #191919;
  overflow: scroll;
`;
