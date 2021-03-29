import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoView from '../../pages/VideoView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <VideoView />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
