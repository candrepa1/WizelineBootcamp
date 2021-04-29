import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import RelatedCard from '../../components/RelatedCard/RelatedCard.component';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';
import useButtonFavorites from '../../hooks/useButtonFavorites/useButtonFavorites';

import {
  MainContainer,
  VideoContainer,
  IFrame,
  VideoDescription,
  Title,
  Description,
  CardContainer,
  Button,
  ButtonContainer,
  Div,
} from '../VideoView/VideoView.styled';

const FavoritesRelated = () => {
  const location = useLocation();
  const [videoList, setVideoList] = useState([]);
  const { sessionData } = useContext(LoginContext);
  const { handleClick, message } = useButtonFavorites(location.state.videoInfo);

  useEffect(() => {
    setVideoList(JSON.parse(localStorage.getItem('Favorites')));
  }, []);

  return (
    <>
      <MainContainer>
        <VideoContainer>
          <IFrame
            width="100%"
            height="500"
            frameBorder="0"
            src={`https://www.youtube.com/embed/${location.state.videoInfo.id.videoId}`}
          />
          <VideoDescription>
            <Div>
              <Title>{location.state.videoInfo.snippet.title}</Title>
              {sessionData && (
                <ButtonContainer>
                  <Button type="button" onClick={handleClick}>
                    {message ? 'Remove from Favorites' : 'Add to Favorites'}
                  </Button>
                </ButtonContainer>
              )}
            </Div>

            <Description>{location.state.videoInfo.snippet.description}</Description>
          </VideoDescription>
        </VideoContainer>
        <CardContainer>
          {videoList.map((vid) => (
            <RelatedCard
              key={vid.id.videoId}
              videoInfo={vid}
              pathname={`/favorites/${vid.id.videoId}`}
            />
          ))}
        </CardContainer>
      </MainContainer>
    </>
  );
};

export default FavoritesRelated;
