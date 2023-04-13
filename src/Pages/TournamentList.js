import React, { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton, Icon } from '@mui/material';
import { PlayArrow, Pause, Close, Boy } from '@mui/icons-material';
import {TournamentListMock} from '../Mock/TournamentListMock';

export const TournamentList = () => {
  const [checked, setChecked] = useState([0]);
  const [tournaments, setTournaments] = useState(TournamentListMock);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleStatus = (status) => {
    if (status === 'Active') {
      return <PlayArrow style={{color: "#20d423"}}/>
    } else if (status === 'Paused') {
      return <Pause />
    } else {
      return <Close style={{color: "#ed2d1f"}}/>
    }
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {tournaments.map((value) => {
        console.log(value)
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <div
                style={{display: 'flex', alignItems: 'center'}}
              >
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div>
                  {value.players}
                </div>
                <IconButton style={{paddingLeft: 0}}>
                  <Boy style={{color: '#ff2bc7'}} />
                </IconButton>
              </div>
              <IconButton edge="end" aria-label="comments">
                {handleStatus(value.status)}
              </IconButton>
              </div>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}