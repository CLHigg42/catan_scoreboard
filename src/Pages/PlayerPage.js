import React, { useState } from 'react';
//import PlayerProfile from '../components/PlayerProfile';

export const PlayerPage = () => {
  const [playerData, setPlayerData] = useState({
    name: '',
    username: '',
    profilePhoto: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlayerData({ ...playerData, [name]: value });
  };

  const handlePhotoUpload = (event) => {
    const photoFile = event.target.files[0];
    setPlayerData({ ...playerData, profilePhoto: photoFile });
  };

  const handleProfileUpdate = () => {
    // Update player profile data in API or local data source
  };

  return (
    <div>
      <h1>Player Page</h1>
 {/*     <PlayerProfile
        playerData={playerData}
        onInputChange={handleInputChange}
        onPhotoUpload={handlePhotoUpload}
        onUpdateProfile={handleProfileUpdate}
 />*/}
    </div>
  );
};


