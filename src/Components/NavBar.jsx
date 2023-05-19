import { AppBar, Avatar, Box, ButtonGroup, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import React from 'react'
import { theme } from '../theme';
import { AccountCircle, StayPrimaryLandscape } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

export const NavBar = () => {
const [anchorEl, setAnchorEl] = React.useState(null);

const handleProfileMenu = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleCloseProfileMenu = () => {
  setAnchorEl(null);
};
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
}));


  
  return (
    <React.Fragment>
        <AppBar  position="sticky" sx={{background: ""}}>
            <StyledToolbar spacing={2}>
                <Typography variant="h6" sx={{display:{xs:"none", sm:"none", md:"block"}}}>
                  Usedbooks By Ommm...
                </Typography>
                <MenuBookIcon sx={{display:{xs:"block", sm:"block", md:"none"}}}/>

                <Search sx={{display:{xs:"none", sm:"none", md:"block"}}}>
                  <SearchIcon/>
                  <InputBase placeholder='Find your next book here...'/>
                </Search>
              
              
                
              

              <Box sx={{display:{}}}>

              
                <ButtonGroup>

                  <Box sx={{display:{sm:"block", md:"none"}}} >
                    <IconButton size="large" aria-label="search-icon" color="inherit">
                    <SearchIcon/>
                    </IconButton>
                  </Box>
               

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
               

                </ButtonGroup>
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
