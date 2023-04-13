import { Button } from '@mui/material'
import React from 'react'

export const LandingPage = () => {
  return (
    <div>
      <Button
        variant='outlined'
      >
        New Tournament
      </Button>
      <Button
        variant='outlined'
      >
        Existing Tournament
      </Button>
    </div>
  )
}