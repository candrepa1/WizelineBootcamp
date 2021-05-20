import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  background: #191919;
  height: 100vh;
`;

export const LeftSideContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding: 0 20px;
`;

export const RightSideContainer = styled.div`
  width: 50%;
`;

export const Hr = styled.hr`
  margin: 20px 0;
  width: 50px;
  color: #556cd6;
  border: 3px solid;
  border-radius: 2px;
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  background: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.4rem;
  &:hover {
    background: #6f6f6f;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  color: white;
  font-size: 10rem;
  font-weight: lighter;
`;

export const Description = styled.h3`
  color: #aaaaaa;
  font-size: 2rem;
  font-weight: lighter;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
`;
