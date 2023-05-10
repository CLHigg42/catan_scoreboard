import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PlayerPage } from './Pages/PlayerPage';
import { AdminPage } from './Pages/AdminPage';
import { RankingsPage } from './Pages/RankingsPage';
import { LandingPage } from './Pages/LandingPage';
import { Header } from './Pages/Header';
import { ErrorPage } from './Pages/ErrorPage'
import { TournamentList } from './Pages/TournamentList';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/tournaments" element={<TournamentList/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      </div>
  );
}

export default App;
