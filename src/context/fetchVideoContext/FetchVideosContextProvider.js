import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './store';

export const FetchVideosContext = createContext();

const FetchVideosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FetchVideosContext.Provider value={{ state, dispatch }}>
      {children}
    </FetchVideosContext.Provider>
  );
};

export default FetchVideosContextProvider;
