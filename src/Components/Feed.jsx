import { Box, Grid, Stack, Typography } from "@mui/material";
import ContentCarousel from "./ContentCarousel";

import styled from "@emotion/styled";
import ListingCard from "./ListingCard";




export const Feed = () => {
  
    
    return(
    <Box flex={4} p={2}>
        
            <Grid container label="feed-grid" direction="column">
                
                <Grid item xs={12} justifyContent={"center"}>
                    <Typography variant="h4">
                        Discover or rediscover listings....
                    </Typography>
                </Grid>

                <Grid item>
                    <ContentCarousel category="You might like this..." />
                </Grid>
                <Grid item>
                    <ContentCarousel category="Visited recently..." />
                </Grid>
                <Grid item>
                    <ContentCarousel category="Favorites.." />
                </Grid>

            </Grid>
    
       
    </Box>
    )}

export default Feed