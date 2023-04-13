import React, {useEffect, useState} from 'react'
import { Button, Card, TextField } from '@mui/material'
import { TournamentList } from './TournamentList';

export const LandingPage = () => {
  const [buttonState, setButtonState] = useState({
    newTournament: false,
    existingTournament: false
  });
  const onButtonClick = (event) => {
    const { name } = event;
    setButtonState({...buttonState, [name]: !buttonState[name]})
  }

  return (
    <div
      style={{paddingLeft: 10}}
    >
      <Button
        variant='contained'
        style={{marginTop: 10, marginBottom: 10, backgroundColor: '#29A8DE'}}
        onClick={() => onButtonClick({name: 'newTournament'})}
      >
        New Tournament
      </Button>
      {buttonState.newTournament && (<Card
        style={{padding: 10, backgroundColor: '#F3D993'}}
        sx={{maxWidth: 275 }}
      >
        <TextField 
          id="outlined-basic"
          style={{backgroundColor: 'white', marginBottom: 8}}
          label="Tournament Name"
          variant="outlined" 
        />
        <TextField 
          id="outlined-basic"
          style={{backgroundColor: 'white', marginBottom: 8}}
          label="Number of People"
          variant="outlined"
        />
        <Button
          variant='contained'
          
        >
          Submit
        </Button>
      </Card>
      )}
      <Button
        variant='contained'
        style={{backgroundColor: '#00908C'}}
      >
        Existing Tournament
      </Button>
      <TournamentList />
    </div>
  )
}