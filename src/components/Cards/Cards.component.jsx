import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191919;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

const Image = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;

const Title = styled.h3`
  color: white;
  padding-bottom: 0.4rem;
  text-decoration: none;
`;

const InfoContainer = styled.div`
  padding: 1rem;
  color: #aaaaaa;
  text-decoration: none;
`;

const Subtitle = styled.h4`
  font-weight: normal;
`;

const Description = styled.p`
  margin-top: 0.8rem;
`;

const Cards = ({ img, title, channel, description, date, videoInfo, fullList }) => {
  return (
    <Card>
      <Link
        to={{ pathname: `/${videoInfo.id.videoId}`, props: { videoInfo, fullList } }}
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
