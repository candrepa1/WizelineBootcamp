import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
`;

const Div = styled.div`
  display: flex;
  color: white;
`;

const Thumbnail = styled.img`
  width: 13rem;
  height: 12rem;
  margin-right: 1rem;
`;

const Title = styled.p`
  width: 50%;
  text-align: start;
`;

const Hr = styled.hr`
  margin: 1rem 0;
`;

const RelatedCard = ({ videoInfo, fullList }) => {
  return (
    <RCard>
      <Link
        to={{ pathname: `/${videoInfo.id.videoId}`, props: { videoInfo, fullList } }}
        style={{ textDecoration: 'none' }}
      >
        <Div>
          <Thumbnail
            src={videoInfo.snippet.thumbnails.medium.url}
            alt={videoInfo.snippet.title}
          />
          <Title>{videoInfo.snippet.title}</Title>
        </Div>
        <Hr />
      </Link>
    </RCard>
  );
};

export default RelatedCard;
