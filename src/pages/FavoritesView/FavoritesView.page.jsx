import React, { useEffect, useState } from 'react';
import { Container } from '../../components/CardContainer/CardContainer.styled';
import Cards from '../../components/Cards/Cards.component';
import { Main } from '../Home/Home.styled';
import { NoFavoritesAd, WarningIcon } from './FavoritesView.styled';

const FavoritesView = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('Favorites')));
  }, []);
  return (
    <Main style={{ height: '91.5vh' }}>
      {favorites === null || favorites.length === 0 ? (
        <NoFavoritesAd>
          <WarningIcon>
            <i className="fas fa-exclamation-circle fa-7x" />
          </WarningIcon>
          <h1>You have not added a video to your favorites yet</h1>
        </NoFavoritesAd>
      ) : (
        <Container>
          {favorites.map((favorite) => (
            <Cards
              testId={favorite.etag}
              key={favorite.etag}
              img={favorite.snippet.thumbnails.medium.url}
              title={favorite.snippet.title}
              channel={favorite.snippet.channelTitle}
              description={favorite.snippet.description}
              date={favorite.snippet.publishedAt}
              videoInfo={favorite}
              pathname={`/favorites/${favorite.id.videoId}`}
            />
          ))}
        </Container>
      )}
    </Main>
  );
};

export default FavoritesView;
