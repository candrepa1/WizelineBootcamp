import { useEffect, useState } from 'react';
import useFavorites from '../useFavorites/useFavorites';

const useButtonFavorites = (video) => {
  const [foundInFav, setFoundInFav] = useState(false);
  const [message, setMessage] = useState(false);
  const { addToFav, removeFromFav } = useFavorites();

  const isVideoInFavorites = () => {
    const favArr = JSON.parse(localStorage.getItem('Favorites'));
    if (favArr === null) {
      setFoundInFav(false);
      setMessage(false);
    } else if (favArr.length > 0) {
      const found = favArr.find((item) => item.id.videoId === video.id.videoId);
      if (found) {
        setFoundInFav(true);
        setMessage(true);
      }
    }
  };

  const handleClick = () => {
    setMessage(!message);
    if (foundInFav) {
      removeFromFav(video);
    } else {
      addToFav(video);
    }
  };

  useEffect(() => {
    isVideoInFavorites();
  }, []);

  return {
    handleClick,
    message,
  };
};

export default useButtonFavorites;
