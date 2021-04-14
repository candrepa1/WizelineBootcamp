import React, { useContext } from 'react';
import Switch from 'react-input-switch';
import { Link } from 'react-router-dom';
import {
  NavBar,
  Section,
  Menu,
  IconWrapper,
  YtIcon,
  Title,
  Search,
  TextField,
  TextFieldButton,
  DarkMode,
  ImgWrapper,
  Image,
} from './Header.styled';
import { SearchContext } from '../../context/searchContext/SearchContextProvider';

const Header = ({ theme, toggle }) => {
  const { input, submitHandler, changeHandler } = useContext(SearchContext);

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
        <Menu>
          <i className="fas fa-bars fa-2x" />
        </Menu>
        <IconWrapper>
          <YtIcon>
            <i className="fab fa-youtube fa-2x" />
          </YtIcon>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Title data-testid="title-content">Wizeline Challenge</Title>
          </Link>
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
            <span role="img" aria-label="dark-mode">
              🌚
            </span>
          </DarkMode>
          <Switch on="light" off="dark" value={theme} onChange={toggleHandler} />
          <DarkMode>
            <span role="img" aria-label="light-mode">
              🌞
            </span>
          </DarkMode>
        </Section>
        <ImgWrapper>
          <Image
            data-testid="image"
            src="https://www.vertexacc.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
            alt="user"
          />
        </ImgWrapper>
      </Section>
    </NavBar>
  );
};

export default Header;
