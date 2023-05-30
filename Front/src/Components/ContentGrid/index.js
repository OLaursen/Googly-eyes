import { Divider, Typography } from "@mui/material";
import {ContentCarousel} from "./ContentCarousel";

export async function Feed() {

    
    const response = await fetch("http://localhost:3001/book");
    const listings = await response.json();
    
    function createCarousel(){
        return(
            {ContentCarousel(){(listings)}}
        )

    }

    return (
        <>
            <Typography variant="h4" padding={"16px 0px"}>
                Discover Books
            </Typography>
            <Divider role="presentation" />
            
            <ContentCarousel />
        </>
    )
}
export default Feed
