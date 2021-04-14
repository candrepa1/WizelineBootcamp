import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header.component';
import RelatedCard from '../../components/RelatedCard/RelatedCard.component';
import {
  MainContainer,
  VideoContainer,
  IFrame,
  VideoDescription,
  Title,
  Description,
  CardContainer,
} from './VideoView.styled';

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
            src={`https://www.youtube.com/embed/${location.props.videoInfo.id.videoId}`}
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
