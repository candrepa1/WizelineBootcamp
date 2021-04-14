import React, { useContext } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer.component';
import { Main } from './Home.styled';
import { SearchContext } from '../../context/searchContext/SearchContextProvider';

function HomePage() {
  const { term } = useContext(SearchContext);

  return (
    <>
      <Main>
        <CardContainer video={term} />
      </Main>
    </>
  );
}

export default HomePage;
