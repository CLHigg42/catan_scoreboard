import React, { useEffect, useState } from 'react';
import { RankingMock } from '../Mock/RankingMock';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  Avatar,
  Typography,
  Button,
  Modal,
  Box,
  Grid,
  TextField,
} from '@mui/material';
import {
  Edit
} from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const AdminPage = () => {
  const [playerScores, setPlayerScores] = useState(RankingMock);
  const [editPlayer, setEditPlayer] = useState({
    name: '',
    nickname: '',
    points: 0,
  })
  const [playerModalOpen, setPlayerModalOpen] = useState(false);
  //const [tournamentData, setTournamentData] = useState(null);

  useEffect(() => {
    // Fetch player scores from API or local data source
    // and update the state with the fetched data
    const sortByScore = [...playerScores];
    sortByScore.sort(function (a, b) { return b.points - a.points });
    setPlayerScores(sortByScore);
  }, []);

  useEffect(() => {
    // Fetch tournament details and player scores from API or local data source
    // and update the state with the fetched data
  }, []);

  const onPlayerEdit = (id) => {
    const selectedPlayer = playerScores.find((player) => player.id === id);
    setEditPlayer({ ...selectedPlayer })
    setPlayerModalOpen(true)
  }
  const onModalClose = () => {
    setPlayerModalOpen(false)
  }
  //const handlePlayerScoreUpdate = (playerId, newScore) => {
  // Update player score in API or local data source
  //};

  //const handleTournamentUpdate = (updatedTournamentData) => {
  // Update tournament information in API or local data source
  //};

  return (
    <div>
      <h1>Admin Page</h1>
      <Divider />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {playerScores.map((scores) => {
          return (
            <div>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={`${scores.name} aka: ${scores.nickname}`}
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
                <ListItemIcon>
                  <Button
                    onClick={() => onPlayerEdit(scores.id)}
                  >
                    <Edit />
                  </Button>
                </ListItemIcon>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          )
        })}
      </List>
      <Modal
        open={playerModalOpen}
      >
        <Box sx={style}>
          <Grid container spacing={1} columns={10}>
            <Grid item xs={7}>
              <TextField
                label='Name'
                defaultValue={editPlayer.name}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label='Points'
                defaultValue={editPlayer.points}
              />
            </Grid>
          </Grid>
          <TextField
            style={{ width: '100%', marginTop: '20px' }}
            label='Nick Name'
            defaultValue={editPlayer.nickname}
          />
          <div
            style={{marginTop: '20px', left: '25%', position: 'relative'}}
          >
            <Button
              variant='contained'
              color='success'
            >
              Save
            </Button>
            <Button
              style={{marginLeft: '5px'}}
              variant='contained'
              color='error'
              onClick={onModalClose}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
