import { useEffect, useContext } from 'react';
import { FetchVideosContext } from '../context/fetchVideoContext/FetchVideosContextProvider';

const useFetch = (search) => {
  const { state, dispatch } = useContext(FetchVideosContext);

  const getFromYoutube = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&type=video&part=snippet&maxResults=25&q=${search}`
      );
      const data = await res.json();
      dispatch({ type: 'FETCH_VIDEOS', payload: data.items });
    } catch (e) {
      dispatch({ type: 'FETCH_VIDEOS_ERROR', payload: e.message });
    }
  };

  useEffect(() => {
    getFromYoutube();
  }, [search]);

  return { videoList: state.videoList, error: state.error };
};

export default useFetch;
