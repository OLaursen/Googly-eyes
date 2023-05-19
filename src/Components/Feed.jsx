import { Box, Stack } from "@mui/material";
import ContentCarousel from "./ContentCarousel";
import ContentCard from "./ContentCard";

const Feed = () => {
    <Box flex={4} p={2}>
        <Stack direction={"column"} spacing={2} justifyContent={"center"}>
            <ContentCarousel />
        </Stack>
    </Box>
}

export default Feed