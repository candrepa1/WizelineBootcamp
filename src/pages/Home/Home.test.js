import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home.page';
import { SearchContext } from '../../context/searchContext/SearchContextProvider';
import { FetchVideosContext } from '../../context/fetchVideoContext/FetchVideosContextProvider';
import { initialState } from '../../context/fetchVideoContext/store';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';

describe('testing UI of the 404 view', () => {
  const sc = {
    term: 'wizeline',
  };

  const fv = {
    state: initialState,
    dispatch: jest.fn(),
  };

  const providerProps = {
    sessionData: '',
    usernameChangeHandler: jest.fn(),
    passwordChangeHandler: jest.fn(),
    handleSubmit: jest.fn(),
    error: '',
  };
  const { getByText } = render(
    <MemoryRouter>
      <SearchContext.Provider value={sc}>
        <FetchVideosContext.Provider value={fv}>
          <LoginContext.Provider value={providerProps}>
            <Home modal modalToggle={jest.fn()} />
          </LoginContext.Provider>
        </FetchVideosContext.Provider>
      </SearchContext.Provider>
    </MemoryRouter>
  );
  test('title, image, button, description', () => {
    expect(getByText('Login')).toBeInTheDocument();
  });
});
