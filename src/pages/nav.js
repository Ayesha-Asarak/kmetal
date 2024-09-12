import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <ListItemText primary="Sign Up" />
        </ListItem>
        <ListItem button component={Link} to="/fp">
          <ListItemText primary="Forgot Password" />
        </ListItem>
        <ListItem button component={Link} to="/otp">
          <ListItemText primary="Confirm Password" />
        </ListItem>
        <ListItem button component={Link} to="/cpw">
          <ListItemText primary="Change Password" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button>
        <Button color="inherit" component={Link} to="/fp">
          Forgot Password
        </Button>
        <Button color="inherit" component={Link} to="/otp">
          Confirm Password
        </Button>
        <Button color="inherit" component={Link} to="/cpw">
          Change Password
        </Button>
      </Toolbar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </AppBar>
  );
};

export default NavigationBar;
