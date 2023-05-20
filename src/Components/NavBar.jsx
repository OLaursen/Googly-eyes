import { AppBar, Avatar, Box, ButtonGroup, Icon, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, makeStyles, styled } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import React from 'react'
import { theme } from '../theme';
import { AccountCircle, StayPrimaryLandscape } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

export const NavBar = () => {

//--------- (Avatar) Profilemenu functions: -----------//
const [anchorEl, setAnchorEl] = React.useState(null);

const handleProfileMenu = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleCloseProfileMenu = () => {
  setAnchorEl(null);
};
//----------------------------------------------------//


//------------------------CSS-------------------------//
//Costumizing "Toolbar"
const StyledToolbar = styled("Toolbar")({
      display: "flex",
      justifyContent: "space-between"
      
});

//Making "Search" from "Box" component
const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
}));
//----------------------------------------------------//


  
  return (
    <React.Fragment>
        <AppBar  position="sticky" sx={{background: ""}}>
            <StyledToolbar spacing={2} justifyContent="space-between" display="">

              
                <IconButton size="large" aria-label="addlisting-icon" color="inherit">
                    <AddCircleTwoToneIcon />
                </IconButton>
              
                  
                 <IconButton color="inherit" aria-label="logo-icon">
                    <MenuBookIcon  size="large" sx={{display:{xs:"block", sm:"block", md:"none"}}}/>
                    <Typography variant="h6" sx={{display:{xs:"none", sm:"none", md:"block"}}}>
                          Usedbooks By Ommm...
                    </Typography>
                </IconButton>
                    
                  
                
                
                <Search sx={{display:{xs:"none", md:"none", lg:"inline"}}}>
                    <SearchIcon color='primary'/>
                    <InputBase color="secondary" placeholder='Find your next book here...'/>
                </Search>
               
                

                <IconButton size="large" aria-label="menu-icon" color="inherit" sx={{display:{md:"block", lg:"none"}}}>
                    <MenuIcon />
                </IconButton>
              
              <Box label="icon-cluster" sx={{display:{xs:"none", sm:"none", md:"none", lg:"inline-flex"}}}>

                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleProfileMenu}
                  color="inherit"
                >
                  <AccountCircle />
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
                  onClose={handleCloseProfileMenu}
                >
                  <MenuItem onClick={handleCloseProfileMenu}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseProfileMenu}>My account</MenuItem>
                </Menu>

              </Box>

            </StyledToolbar>
        </AppBar>
    </React.Fragment>
  )}

export default NavBar
