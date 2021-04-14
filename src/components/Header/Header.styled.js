import styled from 'styled-components';

export const NavBar = styled.nav`
  background-color: ${(props) => props.theme.navBar};
  width: 100vw;
  color: white;
  padding: 1rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 4rem;
`;

export const TextField = styled.input`
  color: ${(props) => props.theme.textField.color};
  background-color: ${(props) => props.theme.textField.backgroundColor};
  font-size: 1.6rem;
  border: 0.1rem solid #303030;
  border-radius: 0.5rem 0 0 0.5rem;
  width: 40rem;
  padding: 1rem;
`;

export const TextFieldButton = styled.button`
  border-radius: 0 0.5rem 0.5rem 0;
  width: 6rem;
  border: 0;
  background-color: ${(props) => props.theme.submitButton.backgroundColor};
  color: ${(props) => props.theme.submitButton.color};
`;

export const ImgWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border: 0;
  margin-left: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Menu = styled.div`
  margin-right: 2.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const YtIcon = styled.div`
  color: #556cd6;
  margin-right: 0.5rem;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 2.8rem;
  color: white;
`;

export const DarkMode = styled.div`
  margin: 0 1rem;
`;
