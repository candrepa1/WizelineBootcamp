import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';
import useButtonFavorites from '../../hooks/useButtonFavorites/useButtonFavorites';
import {
  Card,
  Image,
  InfoContainer,
  Title,
  Subtitle,
  Description,
  Overlay,
  OverlayContainer,
  Button,
} from './Cards.styled';

const Cards = ({
  testId,
  img,
  title,
  channel,
  description,
  date,
  videoInfo,
  pathname,
}) => {
  const { sessionData } = useContext(LoginContext);
  const { handleClick, message } = useButtonFavorites(videoInfo);

  return (
    <Card data-testid={testId}>
      {sessionData && (
        <OverlayContainer>
          <Image data-testid="card-img" src={img} alt={title} />
          <Overlay>
            <Button type="button" onClick={handleClick}>
              {message ? 'Remove' : 'Add'}
            </Button>
          </Overlay>
        </OverlayContainer>
      )}
      <Link to={{ pathname, state: { videoInfo } }} style={{ textDecoration: 'none' }}>
        {!sessionData && <Image data-testid="card-img" src={img} alt={title} />}
        <InfoContainer>
          <Title data-testid="card-title">{title}</Title>
          <Subtitle data-testid="card-subtitle">
            By {channel} • {date.split('T')[0]}
          </Subtitle>
          <Description data-testid="card-description">{description}</Description>
        </InfoContainer>
      </Link>
    </Card>
  );
};

export default Cards;
