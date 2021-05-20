import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cards from './Cards.component';
import { infoObject, fullArray } from '../MockedDataTest';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';

test('renders individual card with provided info successfully ', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <LoginContext.Provider value={false}>
        <Cards
          testId="_PVKwNJf_qw9nukFeRFOtQ837o0"
          key="_PVKwNJf_qw9nukFeRFOtQ837o0"
          img="https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo"
          title="Wizeline"
          channel="Wizeline"
          description="Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ..."
          date="2014-09-27T01:39:18Z"
          videoInfo={infoObject}
          fullList={fullArray}
        />
      </LoginContext.Provider>
    </MemoryRouter>
  );

  expect(getByTestId('card-title')).toHaveTextContent('Wizeline');
});
