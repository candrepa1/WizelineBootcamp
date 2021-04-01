import React, { useState } from 'react';
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

const Header = ({ change, submit, text }) => {
  const [value, setValue] = useState('light');

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
      <Search onSubmit={(e) => submit(e)}>
        <TextField placeholder="Search" value={text} onChange={(e) => change(e)} />
        <TextFieldButton type="submit">
          <i className="fas fa-search fa-lg" />
        </TextFieldButton>
      </Search>
      <Section>
        <Section>
          <DarkMode>
            <span role="img" aria-label="light-mode">
              🌞
            </span>
          </DarkMode>
          <Switch on="dark" off="light" value={value} onChange={setValue} />
          <DarkMode>
            <span role="img" aria-label="dark-mode">
              🌚
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
