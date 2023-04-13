import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PlayerPage } from './Pages/PlayerPage';
import { AdminPage } from './Pages/AdminPage';
import { RankingsPage } from './Pages/RankingsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/rankings" component={RankingsPage} />
        <Route path="/player/:id" component={PlayerPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
