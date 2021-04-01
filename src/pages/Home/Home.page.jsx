import React, { useState } from 'react';
import Header from '../../components/Header/Header.component';
import CardContainer from '../../components/CardContainer/CardContainer.component';
import { Main } from './Home.styled';

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
        <CardContainer video={videos} />
      </Main>
    </>
  );
}

export default HomePage;
