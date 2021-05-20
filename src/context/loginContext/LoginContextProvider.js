import React, { createContext } from 'react';
import useForm from '../../hooks/useForm/useForm';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const session = useForm();
  return <LoginContext.Provider value={session}>{children}</LoginContext.Provider>;
};

export default LoginContextProvider;
