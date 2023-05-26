import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import ListingCard from './ListingCard';
import bookList from "../../data/mockData";
import SingleListing from '../MiniListing.jsx';



const ContentCarousel = CarouselInfo => {
    const getListingCard = bookList.map((listingobj) => (
        <Grid item key={listingobj.id} xs={12} sm={6} md={4} alignItems="center">
                 {/* <ListingCard {...listingobj} />  */}
                <SingleListing {...listingobj} /> 
        </Grid>

    ));


    const {category} = CarouselInfo
    return(
    <Grid container direction="row" spacing={2} justifyContent={"center"}>
        <Divider variant="middle" role="presentation" flexItem></Divider>
    <Grid item xs={12} >
        <Typography label="carousel-header" variant='h6'>
                {category}
        </Typography>
    </Grid>
    
    {getListingCard}
    
    
    </Grid>

)}

export default ContentCarousel