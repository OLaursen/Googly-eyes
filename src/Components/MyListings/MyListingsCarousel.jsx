import React from "react";
import { Grid, Typography } from "@mui/material";
import data from "../../data/myListingsData";
import MiniListing from "../ContentGrid/MiniListing";
import MyListingsSingleListing from "./MyListingsMiniListing";

const MyListingsCarousel = (CarouselInfo) => {
  const getListings = data.map((listingobj) => (
    <Grid item key={listingobj.ID} xs={12} sm={6} md={4} alignItems="center">
      <MyListingsSingleListing {...listingobj} />
    </Grid>
  ));

  const { category } = CarouselInfo;
  return (
    <>
      <Grid container direction="row" spacing={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography label="carousel-header" variant="h6">
            {category}
          </Typography>
        </Grid>

        {getListings}
      </Grid>
    </>
  );
};

export default MyListingsCarousel;
