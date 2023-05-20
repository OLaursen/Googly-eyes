import React from 'react'
import ContentCard from "./ContentCard";
import { Grid, Typography } from '@mui/material';
import ListingCard from './ListingCard';

const ContentCarousel = () => {
    return(
    <Grid container direction="row" spacing={2} justifyContent={"center"}>

    <Grid item xs={12} >
        <Typography label="carousel-header" variant='h6'>
                Display the carousel category here
        </Typography>
    </Grid>
        
    <Grid item xs={12} sm={6} md={3}>
         <ListingCard title="Book title" author="Oli" price="500" description="This is my book" condition="As new" pictureSrc="https://play-lh.googleusercontent.com/_tslXR7zUXgzpiZI9t70ywHqWAxwMi8LLSfx8Ab4Mq4NUTHMjFNxVMwTM1G0Q-XNU80" SellerUsername="Trustworty" location="Copenhagen" />
    </Grid>

     
     

</Grid>

)}

export default ContentCarousel