import { Image } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Popover, Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const SingleListing = (listingobj) => {
    const theme = useTheme();

   
    const card = (
        
        <React.Fragment>
            <Card >

                <Grid container display={"flex"} direction={'row'} spacing={0} >
                    <Grid item xs={12} > 

                        {/* <Image src={listingobj.pictureSrc} object-fit="cover" sx={{}} /> */}
                        <CardMedia 
                        sx={{backgroundColor:"inherit", objectFit:"contain",paddingTop:2, paddingBottom:2}}
                        height="200"
                        component={"img"}
                        src={listingobj.pictureSrc} 
                        /> 
                    </Grid>

                    <Grid item xs={12}>

                        <CardContent>
                            <Typography variant="h6" id="price-tag">
                                {listingobj.price}DKK
                            </Typography >
                            <Typography varian="body2" noWrap='true'>
                                {listingobj.title}
                            </Typography>
                        
                        </CardContent>
                    </Grid>

            </Grid>
                        
             <CardActions>
                <Grid container direction="row" justifyContent={"space-between"}>
                <Link className="menu-link" to={"/expanded-view"}>
                <Button size="small" variant="outlined" color="secondary">
                    Expand
                </Button>
                </Link>
                <Button size="small" variant="outlined" color="secondary">
                    Contact Seller
                    </Button>    
                </Grid>
            </CardActions> 
            
            </Card>
        </React.Fragment>
        
    );

    return(
  
            <Card>{card}</Card>
    )

}

export default SingleListing

