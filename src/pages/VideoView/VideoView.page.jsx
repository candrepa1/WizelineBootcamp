import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header.component';
import RelatedCard from '../../components/RelatedCard/RelatedCard.component';

const VideoContainer = styled.div`
  padding: 1rem;
  width: 90%;
  background-color: #191919;
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
`;

const IFrame = styled.iframe`
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const VideoDescription = styled.div`
  padding: 0 2rem;
`;

const Title = styled.h3`
  color: white;
  padding-bottom: 0.4rem;
`;

const Description = styled.p`
  margin-top: 0.8rem;
  color: #aaaaaa;
`;

const MainContainer = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #191919;
`;

const VideoView = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <MainContainer>
        <VideoContainer>
          <IFrame
            width="100%"
            height="500"
            frameBorder="0"
            src={`http://www.youtube.com/embed/${location.props.videoInfo.id.videoId}`}
          />
          <VideoDescription>
            <Title>{location.props.videoInfo.snippet.title}</Title>
            <Description>{location.props.videoInfo.snippet.description}</Description>
          </VideoDescription>
        </VideoContainer>
        <CardContainer>
          {location.props.fullList.length > 0 &&
            location.props.fullList.map((vid) => (
              <RelatedCard
                key={vid.id.videoId}
                videoInfo={vid}
                fullList={location.props.fullList}
              />
            ))}
        </CardContainer>
      </MainContainer>
    </>
  );
};

export default VideoView;
