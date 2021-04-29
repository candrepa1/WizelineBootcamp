import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form.component';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';

test('checks input is rendered by expecting placeholder', () => {
  const providerProps = {
    sessionData: '',
    usernameChangeHandler: jest.fn(),
    passwordChangeHandler: jest.fn(),
    handleSubmit: jest.fn(),
    error: '',
  };

  const { queryByPlaceholderText, queryByTestId } = render(
    <MemoryRouter>
      <LoginContext.Provider value={providerProps}>
        <Form />
      </LoginContext.Provider>
    </MemoryRouter>
  );

  expect(queryByPlaceholderText('Username')).toBeInTheDocument();
  expect(queryByPlaceholderText('Password')).toBeInTheDocument();
  expect(queryByTestId('cancelButton')).toHaveTextContent('CANCEL');
  expect(queryByTestId('loginButton')).toHaveTextContent('LOGIN');
});
