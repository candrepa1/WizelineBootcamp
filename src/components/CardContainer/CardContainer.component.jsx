import React from 'react';
import useFetch from '../../hooks/useFetch';
import Cards from '../Cards/Cards.component';
import { Container } from './CardContainer.styled';

const CardContainer = ({ video }) => {
  const videoList = useFetch(video);

  return (
    <Container data-testid="card-container">
      {videoList.map((videoIndiv) => (
        <Cards
          testId={videoIndiv.etag}
          key={videoIndiv.etag}
          img={videoIndiv.snippet.thumbnails.medium.url}
          title={videoIndiv.snippet.title}
          channel={videoIndiv.snippet.channelTitle}
          description={videoIndiv.snippet.description}
          date={videoIndiv.snippet.publishedAt}
          videoInfo={videoIndiv}
          fullList={videoList}
        />
      ))}
    </Container>
  );
};

export default CardContainer;
