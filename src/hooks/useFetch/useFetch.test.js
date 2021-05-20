import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { FetchVideosContext } from '../../context/fetchVideoContext/FetchVideosContextProvider';
import { initialState } from '../../context/fetchVideoContext/store';
import { server } from '../../mocks/server';
import useFetch from './useFetch';

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

test('fetches correct url given by the search prop', async () => {
  global.fetch = jest.fn();

  const dispatch = jest.fn();

  const wrapper = ({ children }) => {
    return (
      <FetchVideosContext.Provider value={{ state: initialState, dispatch }}>
        {children}
      </FetchVideosContext.Provider>
    );
  };

  await act(() => {
    return renderHook(() => useFetch('wizeline'), {
      wrapper,
    });
  });

  expect(global.fetch).toBeCalledWith(
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCvMiTRXMR0m35YMRpJZzU_pLIKs88MYkg&type=video&part=snippet&maxResults=20&q=wizeline'
  );
  expect(dispatch).toBeCalled();
});
