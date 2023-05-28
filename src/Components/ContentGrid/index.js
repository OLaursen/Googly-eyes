import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import ContentCarousel from "./ContentCarousel";



export const Feed = () => {
    return(
        <Container>
                    <Typography variant="h4" padding={"16px 0px"} gutterBottom>
                        Discover or rediscover listings....
                    </Typography>
                    <Divider />
                    <ContentCarousel category="" />
        </Container>
    )}
export default Feed
