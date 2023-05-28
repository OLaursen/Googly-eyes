import { Box, Divider, Grid, Typography } from "@mui/material";
import ContentCarousel from "./ContentCarousel";


export const Feed = () => {
  return (
    <Box flex={8} p={2}>
      <Grid
        container
        label="feed-grid"
        direction="column"
        justifyContent={"space-between"}
      >
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent={"center"}
          sx={{ backgroundColor: "" }}
        >
          <Typography variant="h4">
            Discover or rediscover listings....
          </Typography>
          <Divider />
        </Grid>

        <Grid item>
          <ContentCarousel category="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Feed;
