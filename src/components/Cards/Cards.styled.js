import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
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

export const Overlay = styled.span`
  background: rgba(29, 45, 80, 0.3);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

export const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  &:hover,
  &:focus,
  &:hover ${Overlay} {
    display: flex;
  }
`;

export const Button = styled.button`
  z-index: 2;
  padding: 10px 15px;
  margin: 5px;
  text-align: center;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  background: black;
  color: white;
  text-decoration: none;
  &:hover {
    background: #202020;
  }
`;
