import React, { useState } from "react";
import { Box, Container, Divider, Tab, Tabs, Typography } from "@mui/material";
import NavBar from "../Components/NavBar/NavBar";
import MyListingsCarousel from "../Components/MyListings/MyListingsCarousel";

const MyListing = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <NavBar />
      <Container>
        <Box minHeight={"100vh"}>
          {/* Brug <Tabs></Tabs> til at toggle mellem Selling / Buying */}
          <Typography variant="h4" padding={"16px 0px"}>
            My Listings
          </Typography>
          <Divider role="presentation" />

          <MyListingsCarousel />
          {/*
                Alle listings skal have et seller ID. Hvis seller ID = user ID, så er den listing på "MyListing" page.
            */}
        </Box>
      </Container>
    </>
  );
};

export default MyListing;
