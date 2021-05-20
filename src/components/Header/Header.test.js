import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';
import { SearchContext } from '../../context/searchContext/SearchContextProvider';
import Header from './Header.component';
import { mockedUser } from '../../auth/login';
import { darkTheme } from '../../themes/themes';

describe('testing navbar links and image info', () => {
  const searchProviderProps = {
    input: 'wizeline',
    changeHandler: jest.fn(),
    submitHandler: jest.fn(),
  };

  const loginProviderProps = {
    sessionData: mockedUser,
    logout: jest.fn(),
  };

  const toRender = (
    <MemoryRouter>
      <ThemeProvider theme={darkTheme}>
        <LoginContext.Provider value={loginProviderProps}>
          <SearchContext.Provider value={searchProviderProps}>
            <Header />
          </SearchContext.Provider>
        </LoginContext.Provider>
      </ThemeProvider>
    </MemoryRouter>
  );
  test('renders title text content correctly', () => {
    const { queryByTestId } = render(toRender);
    expect(queryByTestId('title-content')).toHaveTextContent('HOME');
    expect(queryByTestId('hidden-title')).toHaveTextContent('FAVORITES');
  });

  test('testing that the src of the image is the one given by the logged in user, alt should be user in any case', () => {
    const { queryByTestId } = render(toRender);
    expect(queryByTestId('image')).toHaveAttribute(
      'src',
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png'
    );
    expect(queryByTestId('image')).toHaveAttribute('alt', 'user');
  });

  test('testing switch UI', () => {
    const { getByTestId } = render(toRender);

    expect(getByTestId('dm-id')).toHaveAttribute('aria-label', 'dark-mode');
    expect(getByTestId('lm-id')).toHaveAttribute('aria-label', 'light-mode');
  });
});
