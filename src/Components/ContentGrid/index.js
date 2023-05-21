import { Grid} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import listings from "../../data/mockData"
import ListingCard from "./ListingCard";



export default function Listings(){
    const theme = useTheme();
    //"Boolean" for whether the window is the size of mobile[<md](true) or desktop[>md](false)

    const getListings = listings.map((listing) => (
        <Grid item key={listing.id} xs={6} sm={4} md={3} display="flex" flexDirection={"column"} alignItems="center">
                <ListingCard salesInfo={listing} />

        </Grid>
    ));
    return (
        <Grid container spacing={{xs:2, md:3}} justifyContent={"center"} columns={{xs: 4, sm:8, md: 12}}>
            getListings
        </Grid>
    );
}