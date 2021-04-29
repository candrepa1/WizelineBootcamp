import React, { useContext } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer.component';
import Form from '../../components/Form/Form.component';
import { SearchContext } from '../../context/searchContext/SearchContextProvider';
import { Main, LoginTitle, HiddenModal, Modal, ModalContainer } from './Home.styled';

function HomePage({ modal, modalToggle }) {
  const { term } = useContext(SearchContext);

  const MyModal = modal ? Modal : HiddenModal;

  return (
    <>
      <Main>
        <CardContainer video={term} />
      </Main>
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
}

export default HomePage;
