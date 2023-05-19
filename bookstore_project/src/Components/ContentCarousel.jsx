import React from 'react'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ContentCard from "./ContentCard";
import { Grid } from '@mui/material';

const ContentCarousel = () => {
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 4 }} justifyContent={"center"} >
        
        <Grid item xs={12} sm={6} md={3}>
            <ContentCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <ContentCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <ContentCard />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <ContentCard />
        </Grid>         
    
    </Grid>
}

export default ContentCarousel