import React, { useContext, useState } from 'react';
import Switch from 'react-input-switch';
import {
  NavBar,
  Section,
  IconWrapper,
  YtIcon,
  Title,
  Search,
  TextField,
  TextFieldButton,
  DarkMode,
  ImgWrapper,
  Image,
  LoginMenu,
  NavBarItem,
  Ul,
  Li,
} from './Header.styled';
import { SearchContext } from '../../context/searchContext/SearchContextProvider';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';

const Header = ({ theme, toggle, modalToggle, modal }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { input, submitHandler, changeHandler } = useContext(SearchContext);
  const { sessionData, logout } = useContext(LoginContext);

  const toggleHandler = () => {
    if (theme === 'dark') {
      toggle('light');
    } else {
      toggle('dark');
    }
  };

  return (
    <NavBar>
      <Section>
        <IconWrapper>
          <YtIcon>
            <i className="fab fa-youtube fa-2x" />
          </YtIcon>
          <Ul>
            <Li>
              <NavBarItem to="/">
                <Title data-testid="title-content">HOME</Title>
              </NavBarItem>
            </Li>
            {sessionData && (
              <Li>
                <NavBarItem to="/favorites">
                  <Title data-testid="hidden-title">FAVORITES</Title>
                </NavBarItem>
              </Li>
            )}
          </Ul>
        </IconWrapper>
      </Section>
      <Search onSubmit={submitHandler}>
        <TextField value={input} onChange={changeHandler} />
        <TextFieldButton type="submit">
          <i className="fas fa-search fa-lg" />
        </TextFieldButton>
      </Search>
      <Section>
        <Section>
          <DarkMode>
            <span data-testid="dm-id" role="img" aria-label="dark-mode">
              🌚
            </span>
          </DarkMode>
          <Switch on="light" off="dark" value={theme} onChange={toggleHandler} />
          <DarkMode>
            <span data-testid="lm-id" role="img" aria-label="light-mode">
              🌞
            </span>
          </DarkMode>
        </Section>
        <ImgWrapper>
          <Image
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            data-testid="image"
            src={
              sessionData
                ? sessionData.avatarUrl
                : 'https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
            }
            alt="user"
          />
          {isLoginOpen &&
            (sessionData ? (
              <LoginMenu
                type="button"
                onClick={() => {
                  logout();
                  setIsLoginOpen(!isLoginOpen);
                }}
              >
                Logout
              </LoginMenu>
            ) : (
              <LoginMenu
                type="button"
                onClick={() => {
                  modalToggle(!modal);
                  setIsLoginOpen(!isLoginOpen);
                }}
              >
                Login
              </LoginMenu>
            ))}
        </ImgWrapper>
      </Section>
    </NavBar>
  );
};

export default Header;
