import { Typography } from "@mui/material";
import ContentCarousel from "./ContentCarousel";

export const Feed = () => {
    return (
        <>
            <Typography variant="h4" padding={"16px 0px"}>
                Discover Books
            </Typography>
            <ContentCarousel category="" />
        </>
    )
}
export default Feed
