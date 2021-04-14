import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import FetchVideosContextProvider from '../../context/fetchVideoContext/FetchVideosContextProvider';
import SearchContextProvider from '../../context/searchContext/SearchContextProvider';
import HomePage from '../../pages/Home';
import VideoView from '../../pages/VideoView';
import { darkTheme, lightTheme } from '../../themes/themes';
import Header from '../Header/Header.component';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <Router>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <SearchContextProvider>
          <Header theme={theme} toggle={setTheme} />
          <FetchVideosContextProvider>
            <Switch>
              <Route path="/:id">
                <VideoView />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </FetchVideosContextProvider>
        </SearchContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
