import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import ContentCarousel from "./ContentCarousel";



export const Feed = () => {
    return(
        <Container>
                    <Typography variant="h4" padding={"16px 0px"}>
                        Discover Books
                    </Typography>
                    <Divider />
                    <ContentCarousel category="" />
        </Container>
    )}
export default Feed
