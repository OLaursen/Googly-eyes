import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import data from "../../data/mockData";
import MiniListing from './MiniListing';

const ContentCarousel = (CarouselInfo) => {
  const getListings = data.map((listingobj) => (
    <Grid item key={listingobj.id} xs={12} sm={6} md={4} alignItems="center">
      <MiniListing {...listingobj} />
    </Grid>
  ));

  const { category } = CarouselInfo;
  return (
    <>
    <Grid container direction="row" spacing={2} justifyContent={"center"}>
      <Divider variant="middle" role="presentation" flexItem></Divider>
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

export default ContentCarousel;
