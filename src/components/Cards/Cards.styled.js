import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #191919; */
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.title};
  padding-bottom: 0.4rem;
  text-decoration: none;
`;

export const InfoContainer = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
`;

export const Subtitle = styled.h4`
  font-weight: normal;
`;

export const Description = styled.p`
  margin-top: 0.8rem;
`;
