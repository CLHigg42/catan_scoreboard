import React, { useState, useEffect } from 'react';
// import TournamentDetails from '../components/TournamentDetails';
// import PlayerScores from '../components/PlayerScores';
// import EditPlayerScore from '../components/EditPlayerScore';

export const AdminPage = () => {
const [tournamentData, setTournamentData] = useState(null);
const [playerScores, setPlayerScores] = useState([]);

useEffect(() => {
// Fetch tournament details and player scores from API or local data source
// and update the state with the fetched data
}, []);

const handlePlayerScoreUpdate = (playerId, newScore) => {
// Update player score in API or local data source
};

const handleTournamentUpdate = (updatedTournamentData) => {
// Update tournament information in API or local data source
};

return (
<div>
<h1>Admin Page</h1>
{/*<TournamentDetails tournamentData={tournamentData} onUpdateTournament={handleTournamentUpdate} />
<PlayerScores playerScores={playerScores} onPlayerScoreUpdate={handlePlayerScoreUpdate} />
<EditPlayerScore />*/}
</div>
);
};
