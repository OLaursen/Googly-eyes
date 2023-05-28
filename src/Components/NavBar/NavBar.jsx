import styled from "@emotion/styled";
import "./NavBar.css";
import {
  AutoStoriesTwoTone,
  Forum,
  Sell,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search as SearchIcon } from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
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
  justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  padding: "0 8px",
  borderRadius: theme.shape.borderRadius,
  width: "33%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "16px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "right",
  },
  [theme.breakpoints.down("lg")]: {
    gap: "24px",
  },
}));

const IconItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
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
  const [openAvatarMenu, setOpenAvatarMenu] = React.useState(false);
  const handleClickAvatarMenu = (event) => {
    setAvatarMenu(event.currentTarget);
    setOpenAvatarMenu(true);
  };
  const handleCloseAvatarMenu = () => {
    setAvatarMenu(null);
    setOpenAvatarMenu(false);
  };
  //----------------------------------------------------//

  //--------- (Burger) Burgermenu Functionality: -----------//
  const [burgermenu, setBurgerMenu] = useState(null);
  const [openBurgerMenu, setOpenBurgerMenu] = React.useState(false);
  const handleClickBurgerMenu = (event) => {
    setBurgerMenu(event.currentTarget);
    setOpenBurgerMenu(true);
  };
  const handleCloseBurgerMenu = () => {
    setBurgerMenu(null);
    setOpenBurgerMenu(false);
  };
  //----------------------------------------------------//

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Link id="home-logo" to={"/"}>
          <Box display={"flex"} gap={"8px"}>
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
        </Link>

        <Search
          sx={{
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <InputBase
            fullWidth="true"
            placeholder="Search for title, author, subject, or ISBN.."
          />
        </Search>

        <Icons>
          <IconItem>
            <Link to={"/create-listing"}>
              <Button
                className="Button"
                variant="contained"
                color="secondary"
                borderRadius={theme.shape.borderRadius}
              >
                Create Listing
              </Button>
            </Link>
          </IconItem>

          <Link className="link" to={"/my-listings"}>
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
          </Link>
          <Link className="link" to={"/inbox"}>
            <IconItem>
              <Badge className="badge" color="error" badgeContent="5">
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
          </Link>
          <Avatar
            className="avatar"
            onClick={handleClickAvatarMenu}
            src="https://www.socialdemokratiet.dk/media/ox2hyghg/mette.jpg?format=webp&width=500&height=500&mode=crop&quality=80&center=0.50125313283208017,0.4949874686716792"
          ></Avatar>
        </Icons>

        <Hamburger onClick={handleClickBurgerMenu}>
          <MenuIcon fontSize="large" />
        </Hamburger>
      </StyledToolbar>

      {/* ----------- Avatar Menu ----------- */}
      <Menu
        id="avatar-menu"
        open={openAvatarMenu}
        onClose={handleCloseAvatarMenu}
        anchorEl={avatarMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link className="menu-link" to={"/"}>
          <MenuItem className="menu-link" onClick={handleCloseAvatarMenu}>
            Profile
          </MenuItem>
        </Link>
        <Link className="menu-link" to={"/my-listings"}>
          <MenuItem onClick={handleCloseAvatarMenu}>My Listings</MenuItem>
        </Link>
        <Link className="menu-link" to={"/sign-in"}>
          <MenuItem onClick={handleCloseAvatarMenu}>Logout</MenuItem>
        </Link>
      </Menu>
      {/* ----------------------------------- */}

      {/* ----------- BurgerMenu ------------ */}
      <Menu
        id="Burger-Menu"
        aria-labelledby="Burger-menu"
        open={openBurgerMenu}
        onClose={handleCloseBurgerMenu}
        anchorEl={burgermenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link className="menu-link" to={"/"}>
          <MenuItem className="menu-link" onClick={handleCloseBurgerMenu}>
            Home
          </MenuItem>
        </Link>
        <Link className="menu-link" to={"/my-listings"}>
          <MenuItem onClick={handleCloseBurgerMenu}>My Listings</MenuItem>
        </Link>
        <Link className="menu-link" to={"/inbox"}>
          <MenuItem onClick={handleCloseBurgerMenu}>Inbox</MenuItem>
        </Link>
        <Link className="menu-link" to={"/sign-in"}>
          <MenuItem onClick={handleCloseBurgerMenu}>Logout</MenuItem>
        </Link>
      </Menu>
      {/* ------------------------------------ */}
    </AppBar>
  );
};

export default NavBar;
