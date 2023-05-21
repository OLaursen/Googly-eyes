import { Box, Divider, Grid, Typography } from "@mui/material";
import ContentCarousel from "./ContentCarousel";

import styled from "@emotion/styled";
import ListingCard from "./ListingCard";




export const Feed = () => {
  
    
    return(
    <Box flex={8} p={2}>
        
            <Grid container label="feed-grid" direction="column">
                
                <Grid item xs={12} display="flex" justifyContent={"center"} sx={{backgroundColor: "" }}>
                    <Typography variant="h4">
                        Discover or rediscover listings....
                    </Typography>
                    <Divider />
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