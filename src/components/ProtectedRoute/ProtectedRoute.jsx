import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { LoginContext } from '../../context/loginContext/LoginContextProvider';

const ProtectedRoute = ({ children, ...props }) => {
  const { sessionData } = useContext(LoginContext);
  return (
    <Route {...props} render={() => (sessionData ? children : <Redirect to="/" />)} />
  );
};

export default ProtectedRoute;
