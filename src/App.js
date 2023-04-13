import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PlayerPage } from './Pages/PlayerPage';
import { AdminPage } from './Pages/AdminPage';
import { RankingsPage } from './Pages/RankingsPage';
import { LandingPage } from './Pages/LandingPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
  );
}

export default App;
