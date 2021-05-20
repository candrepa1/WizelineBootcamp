import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  position: relative;
  z-index: 2;
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

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const YtIcon = styled.div`
  color: #556cd6;
  margin-right: 4rem;
  margin-left: 1rem;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  color: white;
`;

export const DarkMode = styled.div`
  margin: 0 1rem;
`;

export const LoginMenu = styled.button`
  font-size: 1.7rem;
  padding: 10px;
  border-radius: 2px;
`;

export const NavBarItem = styled(Link)`
  text-decoration: none;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 200px;
`;

export const Li = styled.li`
  padding: 15px 0;
  position: relative;
  width: 50%;
  text-align: center;
`;
