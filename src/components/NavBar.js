import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { HiOutlineMenu } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import '../css/style.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    alert(event);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >

        <Toolbar className="bar" >
          {/* <h2>Park'n'Go</h2> */}
          <Typography color="#f2f2f2" variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Park'n'Go
          </Typography>


          <div className="language-menu" >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MdLanguage />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to={`/${props.currentPath}`} onClick={handleClose}>English</MenuItem>
              <MenuItem component={Link} to={`/${props.currentPath}-FR`} onClick={handleClose}>French</MenuItem>

            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}