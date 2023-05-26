import styled from "@emotion/styled";
import {
  AutoStoriesTwoTone,
  Notifications,
  QuestionAnswerOutlined,
  Sell,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../styles/theme/theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const IconItem = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Hamburger = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  //--------- (Avatar) Profilemenu functions: -----------//
  const [avatarMenu, setAvatarMenu] = React.useState(null);
  const openAvatarMenu = Boolean(avatarMenu);
  const handleClickProfileMenu = (event) => {
    setAvatarMenu(event.currentTarget);
  };
  const handleCloseAvatarMenu = () => {
    setAvatarMenu(null);
  };
  //----------------------------------------------------//

  //--------- (Burger) Burgermenu Functionality: -----------//
  const [burgermenu, setBurgerMenu] = useState(null);
  const openBurgerMenu = Boolean(burgermenu);
  const handleClickBurgerMenu = (event) => {
    setBurgerMenu(event.currentTarget);
  };
  const handleCloseBurgerMenu = () => {
    setBurgerMenu(null);
  };
  //----------------------------------------------------//

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          reBook
        </Typography>

        <Icons>
          <Badge color="error" badgeContent="5" variant="dot">
            <Notifications color="accent" />
          </Badge>
        </Icons>

        <AutoStoriesTwoTone sx={{ display: { xs: "black", sm: "none" } }} />

        <Search>
          <InputBase
            fullWidth="true"
            placeholder="Search for title, author, subject, or ISBN.."
          />
        </Search>

        <Icons>
          <IconItem>
            <Button variant="contained">Create Listing</Button>
          </IconItem>
          <IconItem>
            <Sell />
            <Typography>My Listings</Typography>
          </IconItem>
          <IconItem>
            <Badge color="error" badgeContent="5">
              <QuestionAnswerOutlined color="accent" />
            </Badge>
            <Typography variant="span">Inbox</Typography>
          </IconItem>
          <Avatar onClick={handleClickProfileMenu}></Avatar>
        </Icons>

        <Hamburger onClick={handleClickBurgerMenu}>
          <MenuIcon />
        </Hamburger>
      </StyledToolbar>
      
      {/* Profile/Avatar Menu */}
      <Menu
        id="avatar-menu"
        open={openAvatarMenu}
        onClose={handleCloseAvatarMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleCloseBurgerMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseBurgerMenu}>My Listings</MenuItem>
        <MenuItem onClick={handleCloseBurgerMenu}>Logout</MenuItem>
      </Menu>

      {/* BurgerMenu */}
      <Menu
        id="Burger-Menu"
        aria-labelledby="Burger-menu"
        open={openBurgerMenu}
        onClose={handleCloseBurgerMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleCloseAvatarMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseAvatarMenu}>My Listings</MenuItem>
        <MenuItem onClick={handleCloseAvatarMenu}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
