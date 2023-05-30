import React from "react";
import { Grid } from "@mui/material";
import MyListingsSingleListing from "./MyListingsMiniListing";

const ContentCarousel = ({listings}) => {
  if (!Array.isArray(listings)) {
    return null; 
  }
  const getListings = listings.map((listingobj) => (
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

export default ContentCarousel;



