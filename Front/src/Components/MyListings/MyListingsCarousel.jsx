import React from "react";
import { Grid, Typography } from "@mui/material";

import MiniListing from "../ContentGrid/MiniListing";
import MyListingsSingleListing from "./MyListingsMiniListing";


const ContentCarousel = ({listings}) => {
  //THIS IS WHERE IT ALL STARTED...
  if (!Array.isArray(listings)) {
    return null; // or return an error message, or render a fallback component
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

// const MyListingsCarousel = ({MyListings}) => {
//   if (!Array.isArray(MyListings)) {
//     return null; // or return an error message, or render a fallback component
//   }
//   const getListings = MyListings.map((listingobj) => (
//     <Grid item xs={12} sm={6} md={4} alignItems="center">
//         <MyListingsSingleListing {...listingobj} />
//     </Grid>
//   ));


//   return (
//     <>
//       <Grid container direction="row" spacing={2} justifyContent={"center"}>

//         {getListings}
//       </Grid>
//     </>
//   );
// };

// export default MyListingsCarousel;

