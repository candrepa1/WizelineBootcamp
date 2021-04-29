import React from 'react';
import { useHistory } from 'react-router';
import {
  NotFoundContainer,
  LeftSideContainer,
  RightSideContainer,
  Hr,
  Button,
  Title,
  Description,
  Img,
  ButtonContainer,
} from './NotFoundView.styled';

const NotFoundView = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <NotFoundContainer>
      <LeftSideContainer>
        <Title data-testid="404-title">404</Title>
        <Hr />
        <Description data-testid="404-description">
          Sorry, the page you are looking for could not be found.
        </Description>
        <ButtonContainer>
          <Button type="button" onClick={handleClick}>
            GO HOME
          </Button>
        </ButtonContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <Img
          data-testid="404-image"
          src="https://i0.wp.com/www.titanui.com/wp-content/uploads/2018/07/01/Valley-Sunset-Scenery-Vector-Illustration-min.jpg?fit=898%2C581&ssl=1"
        />
      </RightSideContainer>
    </NotFoundContainer>
  );
};

export default NotFoundView;
