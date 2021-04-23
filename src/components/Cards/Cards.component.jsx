import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, InfoContainer, Title, Subtitle, Description } from './Cards.styled';

const Cards = ({ testId, img, title, channel, description, date, videoInfo }) => {
  return (
    <Card data-testid={testId}>
      <Link
        to={{ pathname: `/${videoInfo.id.videoId}`, props: { videoInfo } }}
        style={{ textDecoration: 'none' }}
      >
        <Image data-testid="card-img" src={img} alt={title} />
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
