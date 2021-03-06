import React, { useContext } from 'react';
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
  Button,
  ButtonContainer,
  Div,
} from './VideoView.styled';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';
import useButtonFavorites from '../../hooks/useButtonFavorites/useButtonFavorites';
import { LoginTitle, HiddenModal, Modal, ModalContainer } from '../Home/Home.styled';
import Form from '../../components/Form/Form.component';

const VideoView = ({ modal, modalToggle }) => {
  const location = useLocation();

  const { videoList, error } = useFetch(location.state.videoInfo.snippet.title);
  const { sessionData } = useContext(LoginContext);
  const { handleClick, message } = useButtonFavorites(location.state.videoInfo);

  const MyModal = modal ? Modal : HiddenModal;

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
          {error ? (
            <h1>There has been an error: {error}</h1>
          ) : (
            videoList.map((vid) => (
              <RelatedCard
                key={vid.id.videoId}
                videoInfo={vid}
                pathname={`/${vid.id.videoId}`}
              />
            ))
          )}
        </CardContainer>
      </MainContainer>
      {modal && (
        <ModalContainer>
          <MyModal>
            <LoginTitle>Login</LoginTitle>
            <Form modal={modal} modalToggle={modalToggle} />
          </MyModal>
        </ModalContainer>
      )}
    </>
  );
};

export default VideoView;
