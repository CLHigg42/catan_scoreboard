import React from 'react';
import { PlayerPage } from './Pages/PlayerPage';
import { AdminPage } from './Pages/AdminPage';
import { RankingsPage } from './Pages/RankingsPage';
import './App.css';

function App() {
  return (
    <div>
      <h1>Landing Page</h1>
      <PlayerPage />
      <AdminPage />
      <RankingsPage />
    </div>
  );
}

export default App;
