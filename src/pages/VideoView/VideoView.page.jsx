import React from 'react';
import { useLocation } from 'react-router-dom';
import RelatedCard from '../../components/RelatedCard/RelatedCard.component';
import useFetch from '../../hooks/useFetch/useFetch';
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

  const { videoList, error } = useFetch(location.props.videoInfo.snippet.title);

  return (
    <>
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
          {error ? (
            <h1>There has been an error: {error}</h1>
          ) : (
            videoList.map((vid) => <RelatedCard key={vid.id.videoId} videoInfo={vid} />)
          )}
          ;
        </CardContainer>
      </MainContainer>
    </>
  );
};

export default VideoView;
