import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  SwipeableDrawer,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List
} from '@mui/material';
import {
  Menu,
  Security,
  EmojiEvents,
  Celebration,
  AccountCircle
 } from '@mui/icons-material';
 import '../css/footer.css'

export const Footer = () => {
  
  const navigate = useNavigate();
  const openPage = (url) => {
    navigate(url);
    
  }

  return (
    <Box sx={{position: 'fixed', bottom: 0, width: '100%', flexWrap: 'wrap', display: 'flex' }} >
      
      <AppBar position="static" style={{backgroundColor: '#007F2E'}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
            onClick={() => openPage('/')}
            color ="inherit"
            >            
            Home
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
            onClick={() => openPage('Player')}
            color ="inherit"
            >            
            Players
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
            onClick={() => openPage('rankings')}
            color ="inherit"
            >            
            Rankings
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
            onClick={() => openPage('tournaments')}
            color ="inherit"
            >            
            Tournaments
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
            onClick={() => openPage('admin')}
            color ="inherit"
            >            
            Admin
            </Button>
          </Typography>
          <Button 
          onClick={() => openPage('LoginPage')}
            color="inherit"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}