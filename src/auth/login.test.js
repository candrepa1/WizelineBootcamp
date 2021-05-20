import '@testing-library/jest-dom/extend-expect';
import loginApi, { mockedUser } from './login';

test('the promise returns mockedUser', () => {
  return expect(loginApi('wizeline', 'Rocks!')).resolves.toBe(mockedUser);
});

test('the promise rejects the input and throws an error', () => {
  return expect(loginApi('cam', '1234')).rejects.toEqual(expect.any(Error));
});

test('empty input', () => {
  return expect(loginApi('', '')).rejects.toEqual(expect.any(Error));
});
