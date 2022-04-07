import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { HiOutlineMenu } from "react-icons/hi";
import { RiEnglishInput } from "react-icons/ri";

import '../css/style.css'



export default function NavBar() {
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
      <AppBar position="static" className="bar" >
      
        <Toolbar >
        {/* <h2>Park'n'Go</h2> */}
        <Typography color= "#f2f2f2" variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Park'n'Go
          </Typography>
         


          <div   className="language-menu" >
              <IconButton


              
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <RiEnglishInput />
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
                <MenuItem onClick={handleClose}>English</MenuItem>
                <MenuItem onClick={handleClose}>French</MenuItem>
                <MenuItem onClick={handleClose}>More</MenuItem>

              </Menu>
            </div>

          {/* <Typography color= "#eb52cc " variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo goes here!!
          </Typography> */}
       {/*    {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <RiEnglishInput />
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
                <MenuItem onClick={handleClose}>English</MenuItem>
                <MenuItem onClick={handleClose}>French</MenuItem>
                <MenuItem onClick={handleClose}>More</MenuItem>

              </Menu>
            </div>
          )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}