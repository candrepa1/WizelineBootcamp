import { reducer } from './reducer';
import { ACTIONS } from '../../utils/constants';
import { initialState } from './store';

it('checking reducer FETCH VIDEOS action', () => {
  const arr = [1, 2, 3];
  const action = { type: ACTIONS.FETCH_VIDEOS, payload: arr };
  const expectedState = { videoList: arr, error: '' };
  expect(reducer(initialState, action)).toEqual(expectedState);
});

it('checking reducer FETCH_VIDEOS_ERROR action', () => {
  const action = {
    type: ACTIONS.FETCH_VIDEOS_ERROR,
    payload: 'this is an error message',
  };
  const expectedState = { videoList: [], error: 'this is an error message' };
  expect(reducer(initialState, action)).toEqual(expectedState);
});

it('checking reducer DEFAULT case', () => {
  const action = { type: 'default' };
  const expectedState = { videoList: [], error: '' };
  expect(reducer(initialState, action)).toEqual(expectedState);
});
