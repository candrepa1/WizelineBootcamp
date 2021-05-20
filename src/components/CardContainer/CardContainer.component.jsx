import React from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import Cards from '../Cards/Cards.component';
import { Container } from './CardContainer.styled';

const CardContainer = ({ video }) => {
  const { videoList, error } = useFetch(video);

  return (
    <Container data-testid="card-container">
      {error ? (
        <h1>There has been an error: {error}</h1>
      ) : (
        videoList.map((videoIndiv) => (
          <Cards
            testId={videoIndiv.etag}
            key={videoIndiv.etag}
            img={videoIndiv.snippet.thumbnails.medium.url}
            title={videoIndiv.snippet.title}
            channel={videoIndiv.snippet.channelTitle}
            description={videoIndiv.snippet.description}
            date={videoIndiv.snippet.publishedAt}
            videoInfo={videoIndiv}
            pathname={`/videos/${videoIndiv.id.videoId}`}
          />
        ))
      )}
    </Container>
  );
};

export default CardContainer;
