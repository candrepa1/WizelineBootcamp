import { act, renderHook } from '@testing-library/react-hooks';
import useForm from './useForm';

describe('testing state and functionality of the useForm custom hook', () => {
  const { result } = renderHook(useForm);

  const eventPD = { preventDefault: () => {} };

  beforeEach(() => {
    jest.spyOn(eventPD, 'preventDefault');
  });

  test('submitHandler function', () => {
    act(() => {
      result.current.handleSubmit(eventPD);
    });

    expect(eventPD.preventDefault).toBeCalled();
  });
});
