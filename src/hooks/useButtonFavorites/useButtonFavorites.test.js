import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useButtonFavorites from './useButtonFavorites';

const getItem = jest
  .fn()
  .mockReturnValue(
    `[{"kind":"youtube#searchResult","etag":"erqeM78PZDWIBe8qOGHGM2WdSE8","id":{"kind":"youtube#video","videoId":"nmXMgqjQzls"},"snippet":{"publishedAt":"2019-09-30T23:54:32Z","channelId":"UCPGzT4wecuWM0BH9mPiulXg","title":"Video Tour | Welcome to Wizeline Guadalajara","description":"Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Wizeline","liveBroadcastContent":"none","publishTime":"2019-09-30T23:54:32Z"}}]`
  );

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem,
    },
    writable: true,
  });
});

test('testing local storage function', () => {
  act(() => {
    renderHook(() => useButtonFavorites());
  });

  expect(getItem).toBeCalled();
});

test('testing when getItem is null', () => {
  getItem.mockReturnValueOnce(null);

  let currentHookValue;

  act(() => {
    const result = renderHook(() => useButtonFavorites());
    currentHookValue = result.result.current.message;
  });

  expect(currentHookValue).toBe(false);
});
