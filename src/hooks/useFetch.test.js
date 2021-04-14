import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { server } from '../mocks/server';
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

  await act(async () => renderHook(() => useFetch('wizeline')));

  expect(global.fetch).toBeCalledWith(
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCvMiTRXMR0m35YMRpJZzU_pLIKs88MYkg&type=video&part=snippet&maxResults=25&q=wizeline'
  );
});

// test('fetches info succesfully', async () => {
//   const { result } = renderHook(() => useFetch('wizeline'));

//   expect(await result.current.videoList).toEqual(fullArray);
// });
