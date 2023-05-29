import { Divider, Typography } from "@mui/material";
import ContentCarousel from "./ContentCarousel";

export const Feed = () => {
    return (
        <>
            <Typography variant="h4" padding={"16px 0px"}>
                Discover Books
            </Typography>
            <Divider role="presentation" />
            <ContentCarousel category="" />
        </>
    )
}
export default Feed
