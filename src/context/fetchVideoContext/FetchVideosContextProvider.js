import React, { createContext, useReducer } from 'react';

export const FetchVideosContext = createContext();

const initialState = {
  videoList: [],
  error: '',
};

const ACTIONS = {
  FETCH_VIDEOS: 'FETCH_VIDEOS',
  FETCH_VIDEOS_ERROR: 'FETCH_VIDEOS_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_VIDEOS: {
      return {
        ...state,
        videoList: action.payload,
      };
    }
    case ACTIONS.FETCH_VIDEOS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

const FetchVideosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FetchVideosContext.Provider value={{ state, dispatch }}>
      {children}
    </FetchVideosContext.Provider>
  );
};

export default FetchVideosContextProvider;
