import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cards from '../Cards/Cards.component';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 1.5rem;
  padding-top: 1.5rem;
`;

const CardContainer = ({ search, video }) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    if (video) {
      const apiKey = 'AIzaSyCvMiTRXMR0m35YMRpJZzU_pLIKs88MYkg';
      const max = 25;
      fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=${max}&q=${search}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setVideoList(data.items);
        });
    }
  }, [video]);

  return (
    <Container data-testid="card-container">
      {videoList.length > 0 &&
        videoList.map((videoIndiv) => (
          <Cards
            key={videoIndiv.id.videoId}
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
