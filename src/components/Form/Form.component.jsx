import React, { useContext } from 'react';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';
import { LoginContainer, Input, ButtonContainer, Button } from './Form.styled';

const Form = ({ modalToggle, modal }) => {
  const {
    usernameChangeHandler,
    passwordChangeHandler,
    handleSubmit,
    error,
  } = useContext(LoginContext);
  return (
    <>
      <LoginContainer onSubmit={(e) => handleSubmit(e, modalToggle, modal)}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={usernameChangeHandler}
        />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
        />
        <ButtonContainer>
          <Button
            data-testid="cancelButton"
            type="button"
            onClick={() => modalToggle(!modal)}
          >
            CANCEL
          </Button>
          <Button data-testid="loginButton" type="submit">
            LOGIN
          </Button>
        </ButtonContainer>
      </LoginContainer>
      {error && <p>Username or password invalid</p>}
    </>
  );
};

export default Form;
