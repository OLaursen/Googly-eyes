
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

import ContentCard from "../../ContentCard";


const SingleListing = (listingobj) => {
    //Resources:
    //https://github.com/safak/youtube/blob/material-ui/src/components/Add.jsx
    //

    const theme = useTheme();

    // ---------Expand functionality---------- //
    const [expand, setExpand] = React.useState(false);
    const expandOpen = () => setExpand(true);
    const expandClose = () => setExpand(false);

    // ---------Contact Seller functionality---------- //
    const [contact, setContact] = React.useState(false);
    const openContact = () => setContact(true);
    const closeContact = () => setContact(false);

    const CustomModal = styled(Modal)(({ theme }) => (
        {
        width: '50vw',
        height: '50vh',
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("md")]: {
            width: 500,
            height: 550,
        }
      
    }));

    const card = (
    
        
        <React.Fragment>
            <Card >

                <Grid container display={"flex"} direction={'row'} spacing={0} >
                    <Grid item xs={12} > 
                        <CardMedia 
                        sx={{backgroundColor:"inherit", objectFit:"contain",paddingTop:2, paddingBottom:2}}
                        height="200"
                        component={"img"}
                        src={listingobj.imagePath} 
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
                {/* <Link className="menu-link" to={"/expanded-view"}> */}
                <Button size="small" variant="outlined" color="secondary" onClick={expandOpen} >
                    Expand
                </Button>
                <CustomModal open={expand} onClose={expandClose} >
                    
                    <ContentCard {...listingobj} />
                   
                </CustomModal>
                {/* </Link> */}
                
                <Button size="small" variant="outlined" color="secondary" onClick={openContact}>
                    Contact Seller
                </Button>    

                </Grid>
                <CustomModal open={contact} onClose={closeContact} >
                    <Typography>This is where you should be able to contact the seller</Typography>
                    
                </CustomModal>
            </CardActions> 
            
            </Card>
            
        </React.Fragment>
        
    );

    return(
  
            <Card>{card}</Card>
    )

}

export default SingleListing

