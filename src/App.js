import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PlayerPage } from './Pages/PlayerPage';
import { AdminPage } from './Pages/AdminPage';
import { RankingsPage } from './Pages/RankingsPage';
import { LandingPage } from './Pages/LandingPage';

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/rankings" component={RankingsPage} />
        <Route path="/player/:id" component={PlayerPage} />
        <Route path="/admin" component={AdminPage} />
      </BrowserRouter>
  );
}

export default App;
