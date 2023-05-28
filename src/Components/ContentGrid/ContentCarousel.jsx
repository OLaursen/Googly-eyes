import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import ListingCard from './ListingCard';
import data from "../../data/mockData";
import SingleListing from '../SingleListing/index.js';

const ContentCarousel = (CarouselInfo) => {
  const getListingCard = data.map((listingobj) => (
    <Grid item key={listingobj.id} xs={12} sm={6} md={4} alignItems="center">
      {/* <ListingCard {...listingobj} />  */}
      <SingleListing {...listingobj} />
    </Grid>
  ));

  const { category } = CarouselInfo;
  return (
    <>
    <Divider role="presentation" flexItem></Divider>
    <Grid container direction="row" spacing={2} justifyContent={"center"}>
      
      <Grid item xs={12}>
        <Typography label="carousel-header" variant="h6">
          {category}
        </Typography>
      </Grid>

      {getListingCard}
    </Grid>
    </>
  );
};

export default ContentCarousel;
