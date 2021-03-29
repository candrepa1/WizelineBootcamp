import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header.component';
import CardContainer from '../../components/CardContainer/CardContainer.component';

const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 10rem 3rem;
  font-family: 'Roboto', sans-serif;
  background-color: #191919;
`;

function HomePage() {
  const [input, setInput] = useState('wizeline');
  const [videos, setVideos] = useState('wizeline');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(input);
    e.preventDefault();
    setVideos(input);
  };

  return (
    <>
      <Header change={handleChange} submit={handleSubmit} text={input} />
      <Main>
        <CardContainer search={input} video={videos} />
      </Main>
    </>
  );
}

export default HomePage;
