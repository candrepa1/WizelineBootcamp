const useFavorites = () => {
  const addToFav = (video) => {
    let favVidArr = [];
    favVidArr = JSON.parse(localStorage.getItem('Favorites')) || [];
    favVidArr.push(video);
    localStorage.setItem('Favorites', JSON.stringify(favVidArr));
  };

  const removeFromFav = (videoToRemove) => {
    const result = JSON.parse(localStorage.getItem('Favorites'));
    const arr = result.filter((item) => item.id.videoId !== videoToRemove.id.videoId);
    if (arr) {
      localStorage.setItem('Favorites', JSON.stringify(arr));
    } else {
      localStorage.setItem('Favorites', JSON.stringify([]));
    }
  };

  return { addToFav, removeFromFav };
};

export default useFavorites;
