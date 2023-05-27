import styled from "@emotion/styled";
import {
  AutoStoriesTwoTone,
  Forum,
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
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "right",
  },
  [theme.breakpoints.down("lg")]: {
    gap: "30px"
  },
}));

const IconItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const Hamburger = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
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
          <Box display={"flex"} gap={"10px"}>
            <AutoStoriesTwoTone sx={{ fontSize: 30 }} />
            <Typography
              variant="h5"
              sx={{
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              ReBook
            </Typography>
          </Box>
      
        {/* 
        <Icons>
          <Badge color="error" badgeContent="5" variant="dot">
            <Notifications color="accent" />
          </Badge>
        </Icons>
        */}

        <Search>
          <InputBase
            fullWidth="true"
            placeholder="Search for title, author, subject, or ISBN.."
          />
        </Search>

        <Icons>
          <IconItem>
            <Button
              variant="contained"
              color="secondary"
              borderRadius={theme.shape.borderRadius}
            >
              Create Listing
            </Button>
          </IconItem>
          <IconItem>
            <Sell />
            <Typography
              sx={{
                [theme.breakpoints.down("lg")]: {
                  display: "none",
                },
              }}
              className="icon-text"
            >
              My Listings
            </Typography>
          </IconItem>
          <IconItem>
            <Badge color="error" badgeContent="5">
              <Forum color="accent" />
            </Badge>
            <Typography
              sx={{
                [theme.breakpoints.down("lg")]: {
                  display: "none",
                },
              }}
              variant="span"
            >
              Inbox
            </Typography>
          </IconItem>
          <Avatar onClick={handleClickProfileMenu}></Avatar>
        </Icons>

        <Hamburger onClick={handleClickBurgerMenu}>
          <MenuIcon fontSize="large" />
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
