import React, { useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import FetchVideosContextProvider from '../../context/fetchVideoContext/FetchVideosContextProvider';
import LoginContextProvider from '../../context/loginContext/LoginContextProvider';
import SearchContextProvider from '../../context/searchContext/SearchContextProvider';
import NotFoundView from '../../pages/404NotFound/NotFoundView.page';
import FavoritesRelated from '../../pages/FavoritesRelatedView/FavoritesRelated.page';
import FavoritesView from '../../pages/FavoritesView/FavoritesView.page';
import HomePage from '../../pages/Home';
import VideoView from '../../pages/VideoView';
import { darkTheme, lightTheme } from '../../themes/themes';
import Header from '../Header/Header.component';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const excludedPaths = ['/404'];

  const location = useLocation();

  return (
    // moved router higher up to index.js in order to use the useLocation hook here.
    <LoginContextProvider>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <SearchContextProvider>
          <FetchVideosContextProvider>
            {excludedPaths.includes(location.pathname) ? null : (
              <Header
                theme={theme}
                toggle={setTheme}
                modalToggle={setIsModalOpen}
                modal={isModalOpen}
              />
            )}
            <Switch>
              <ProtectedRoute exact path="/favorites/:id">
                <FavoritesRelated />
              </ProtectedRoute>
              <ProtectedRoute path="/favorites">
                <FavoritesView />
              </ProtectedRoute>
              <Route exact path="/videos/:id">
                <VideoView modal={isModalOpen} modalToggle={setIsModalOpen} />
              </Route>
              <Route exact path="/">
                <HomePage modal={isModalOpen} modalToggle={setIsModalOpen} />
              </Route>
              <Route path="*">
                <Redirect to="/404" />
                <NotFoundView />
              </Route>
            </Switch>
          </FetchVideosContextProvider>
        </SearchContextProvider>
      </ThemeProvider>
    </LoginContextProvider>
  );
}

export default App;
