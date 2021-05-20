import { act, renderHook } from '@testing-library/react-hooks';
import useInput from './useInput';

describe('testing state and functionality of the useInput custom hook', () => {
  const { result } = renderHook(useInput);

  const eventPD = { preventDefault: () => {} };

  beforeEach(() => {
    jest.spyOn(eventPD, 'preventDefault');
  });

  test('default input and term states', () => {
    expect(result.current.input).toBe('wizeline');
    expect(result.current.term).toBe('wizeline');
  });

  test('submitHandler function', () => {
    act(() => {
      result.current.submitHandler(eventPD);
    });

    expect(eventPD.preventDefault).toBeCalled();
  });
});
