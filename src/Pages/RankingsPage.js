import React, { useEffect, useState } from 'react';
import {RankingMock} from '../Mock/RankingMock';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const RankingsPage = () => {
  const [playerScores, setPlayerScores] = useState(RankingMock);

  useEffect(() => {
    // Fetch player scores from API or local data source
    // and update the state with the fetched data
    const sorted = playerScores.sort(function(a,b){return b.points - a.points});
    setPlayerScores(sorted);
  }, []);


  const displayRankings = () => {
   
  }


  return (

    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        { playerScores.map((scores) => {
        return (
          <div>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary= {`${scores.name} aka: ${scores.nickname}`}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  
                  
                >
                  Score: &nbsp; 
                </Typography>
                {scores.points}
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />
            </div>
        )}) }
      </List>
    
      <h1>Rankings Page</h1>
      {/* Display player scores in a list or table format */}
    </div>
  );
};


