import { useEffect, useState } from 'react';

const useFetch = (search) => {
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState('');

  const getFromYoutube = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&type=video&part=snippet&maxResults=25&q=${search}`
      );
      const data = await res.json();
      setVideoList(data.items);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    getFromYoutube();
  }, [search]);

  return { videoList, error };
};

export default useFetch;
