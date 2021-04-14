import { ACTIONS } from '../../utils/constants';

export const reducer = (state, action) => {
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
