import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        <Typography 
          variant="h6" 
          sx={{ 
            flexGrow: 1, 
            fontFamily: 'cursive', 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            color: '#FFFFFF', 
            textAlign: 'center',
          }}
        >
          Food-Truck
        </Typography>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Inicio</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/informacion" style={{ textDecoration: 'none', color: 'inherit' }}>Información</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Instagram</a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Facebook</a>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;