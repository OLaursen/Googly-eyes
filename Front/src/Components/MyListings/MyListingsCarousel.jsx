import React from "react";
import { Grid, Typography } from "@mui/material";

import MiniListing from "../ContentGrid/MiniListing";
import MyListingsSingleListing from "./MyListingsMiniListing";

const MyListingsCarousel = (MyListings) => {
  const getListings = MyListings.map((listingobj) => (
    <Grid item key={listingobj.ID} xs={12} sm={6} md={4} alignItems="center">
        <MyListingsSingleListing {...listingobj} />
    </Grid>
  ));


  return (
    <>
      <Grid container direction="row" spacing={2} justifyContent={"center"}>
     

        {getListings}
      </Grid>
    </>
  );
};

export default MyListingsCarousel;

