import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import SearchContextProvider from '../context/searchContext/SearchContextProvider';
import FetchVideosContextProvider from '../context/fetchVideoContext/FetchVideosContextProvider';
import { darkTheme } from '../themes/themes';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <SearchContextProvider>
        <FetchVideosContextProvider>{children}</FetchVideosContextProvider>
      </SearchContextProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
