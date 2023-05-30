import React from 'react'
import {  Grid} from '@mui/material';
import MiniListing from './MiniListing';

const ContentCarousel = ({listings}) => {
  //THIS IS WHERE IT ALL STARTED...
  if (!Array.isArray(listings)) {
    return null; // or return an error message, or render a fallback component
  }
  
  const getListings = listings.map((listingobj) => (
    <Grid item key={listingobj.ID} xs={12} sm={6} md={4} alignItems="center">
      <MiniListing {...listingobj} />
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
