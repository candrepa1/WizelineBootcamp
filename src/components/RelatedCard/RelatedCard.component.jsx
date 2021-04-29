import React from 'react';
import { Link } from 'react-router-dom';
import { RCard, Div, Thumbnail, Title, Hr } from './RelatedCard.styled';

const RelatedCard = ({ videoInfo, pathname }) => {
  return (
    <RCard>
      <Link to={{ pathname, props: { videoInfo } }} style={{ textDecoration: 'none' }}>
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
