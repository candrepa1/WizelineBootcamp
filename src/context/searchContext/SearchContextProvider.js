import React, { createContext } from 'react';
import useInput from '../../hooks/useInput/useInput';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const search = useInput();
  return <SearchContext.Provider value={search}>{children}</SearchContext.Provider>;
};

export default SearchContextProvider;
