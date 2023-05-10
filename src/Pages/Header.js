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
 import '../css/header.css'

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  const openPage = (url) => {
    navigate(url);
    setDrawerOpen(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }} >
      <React.Fragment key='left'>
        <SwipeableDrawer
          style={{width: '200px'}}
          anchor='left'
          open={drawerOpen}
          onClose={() => toggleDrawer()}
          onOpen={() => toggleDrawer()}
        >
          <MenuList style={{width: '200%'}}>
            <MenuItem>
              <ListItemIcon>
                Menu
              </ListItemIcon>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => openPage('admin')}
            >
              <ListItemIcon>
                <Security />
              </ListItemIcon>
              <ListItemText>
                Administrator
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => openPage('rankings')}
            >
              <ListItemIcon>
                <EmojiEvents />
              </ListItemIcon>
              <ListItemText>
                Rankings
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => openPage('tournaments')}
            >
              <ListItemIcon>
                <Celebration/>
              </ListItemIcon>
              <ListItemText>
                Tournaments
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => openPage('player')}
            >
              <ListItemIcon>
                <AccountCircle/>
              </ListItemIcon>
              <ListItemText>
                My Account
              </ListItemText>
            </MenuItem>
          </MenuList>
        </SwipeableDrawer>
      </React.Fragment>
      <AppBar position="static" style={{backgroundColor: '#007F2E'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer()}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button 
            color="inherit"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}