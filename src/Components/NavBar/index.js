import { AppBar,  Box,  IconButton, InputBase, Menu, MenuItem, Typography, styled } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import React from 'react'
import { theme } from '../../styles/theme/theme';
import { AccountCircle, StayPrimaryLandscape } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

function Customnavbar() {

  //--------- (Avatar) Profilemenu functions: -----------//
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleProfileMenu = (event) => {
     setAnchorEl(event.currentTarget);
   };

   const handleCloseProfileMenu = () => {
     setAnchorEl(null);
   };
  //----------------------------------------------------//

  //--------- (Burger) Burgermenu Functionality: -----------//
  const [anchorBurger, setAnchorBurger] = React.useState(null);
  const openBurger = Boolean(anchorBurger);

  const handleClickBurgerMenu = (event) => {
    setAnchorBurger(event.currentTarget);
  };

  const handleCloseBurgerMenu = () => {
    setAnchorBurger(null);
  };
  //----------------------------------------------------//

  //-----------------(plus) Create listing--------------//



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
      <AppBar position="sticky" sx={{ background: "" }}>
        <StyledToolbar spacing={2} justifyContent="space-between" display="flex">


          <IconButton size="large" aria-label="addlisting-icon" color="inherit"
            >
            <AddCircleTwoToneIcon />
          </IconButton>

          


          <IconButton color="inherit" aria-label="logo-icon">
            <MenuBookIcon size="large" sx={{ display: { xs: "block", sm: "block", md: "none" } }} />
            <Typography variant="h6" sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              Usedbooks By Ommm...
            </Typography>
          </IconButton>




          {/* <Search sx={{ display: { xs: "none", md: "none", lg: "inline" } }}>
            <SearchIcon color='primary' />
            <InputBase color="secondary" placeholder='Find your next book here...' />
          </Search> */}

         

          <IconButton id="menu-button" size="large" aria-label="menu-button" color="inherit" sx={{ display: { sm: "inline", md: "none" } }}
          aria-controls={openBurger ? 'BurgerMenu' : undefined}
          aria-haspopup="true"
          aria-expanded={openBurger ? 'true' : undefined} 
          onClick={handleClickBurgerMenu}
          >
            <MenuIcon id="menu-icon" />
          </IconButton> 
          {/* Burgermenu menu */}
          <Menu
            id='BurgerMenu'
            aria-labelledby='menu-icon'
            anchorEl="menu-icon"
            open={openBurger}
            onClose={handleCloseBurgerMenu}
            //MenuListProps={{'aria-labelledby' : 'menu-button',}}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: ''

            }}

            >
              <MenuItem onClick={handleCloseBurgerMenu}>Profile</MenuItem>
              <MenuItem onClick={handleCloseBurgerMenu}>MyListings</MenuItem>
              <MenuItem onClick={handleCloseBurgerMenu}>Inbox</MenuItem>

          </Menu>




          <Box label="icon-cluster" sx={{ display: { xs:"none", md: "inline-flex" } }}>

            <IconButton
            label="profile-avatar"
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
              id="profile-avatar-menu"
              anchorEl={"profile-avatar"}
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
  );
}


  export default Customnavbar