import React from 'react'
import { Grid, Typography } from '@mui/material';
import ListingCard from './ListingCard';
import bookList from "./dummybook.js";



const ContentCarousel = CarouselInfo => {
    const getListingCard = listingobj =>{
        return <Grid item xs={6} sm={6} md={3}><ListingCard {...listingobj} /></Grid>
    }
    const {category} = CarouselInfo
    return(
    <Grid container direction="row" spacing={2} justifyContent={"center"}>

    <Grid item xs={12} >
        <Typography label="carousel-header" variant='h6'>
                {category}
        </Typography>
    </Grid>
    
    {bookList.map(listingobj => getListingCard(listingobj))}
    </Grid>

)}

export default ContentCarousel