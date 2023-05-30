import React from 'react'
import { Grid, Typography } from '@mui/material';
// import data from "../../data/listingData";
import MiniListing from './MiniListing';



async function ContentCarousel(listings) {

  // const getListings = listings.map((listingobj) => (
  //   <Grid item key={listingobj.ID} xs={12} sm={6} md={4} alignItems="center">
  //     <MiniListing 
  //     title={listingobj.title} price={listingobj.price} description={listingobj.description} condition={listingobj.condition}
  //     isbn={listingobj.isbn} imagePath={listingobj.imagePath} authors={listingobj.authors} 
  //     />
  //   </Grid>
  // ));

  
  return (
    <>
    
    <Grid container direction="row" spacing={2} justifyContent={"center"}>
      {listings.map((listingobj) => (
      <Grid item  xs={12} sm={6} md={4} alignItems="center">
        <MiniListing {...listingobj}
        />
        </Grid>))}
      {/* {getListings} */}
    </Grid>
    </>
  );
};

export default ContentCarousel
