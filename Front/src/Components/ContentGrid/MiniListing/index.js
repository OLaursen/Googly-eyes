
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

    const ContactModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });

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

                    <ContactModal open={contact} onClose={closeContact} >

                        <Box p={3}
                            sx={{
                                borderRadius: "20px",
                                backgroundColor: "white",
                                [theme.breakpoints.up("sm")]: {
                                    width: "500px"
                                },
                                [theme.breakpoints.down("sm")]: {
                                    width: "80%"
                                },
                            }}
                        >
                            <Grid>
                                <Typography variant="h5" color={'gray'} textAlign={"center"}>
                                    Send message to user : {listingobj.sellerID}
                                </Typography>
                                <Divider />

                                <Grid item display={"flex"} alignItems={"center"} gap={2}>
                                    <Grid item display={"flex"} justifyContent={"flex-start"} gap={2} maxHeight={"75px"} maxWidth={"75px"} alignItems={"center"} marginTop={"24px"} marginBottom={"8px"}>
                                        <CardMedia component={"img"} src={listingobj.pictureSrc} objectFit="contain"></CardMedia>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box marginTop={"16px"} display={"flex"} flexDirection={"column"} gap={"4px"}>
                                            <Typography variant="h7" fontWeight={"bold"} width={"100%"}> {listingobj.title} </Typography>
                                            <Typography variant="p" fontStyle={"italic"}> {listingobj.price} Dkk </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>


                                <TextField placeholder="Write your message for seller"
                                    multiline
                                    rows={3}
                                    sx={{
                                        width: '100%',
                                        marginTop: "16px",
                                        marginBottom: "24px"
                                    }} />
                                <Divider />
                                <Grid item display={"flex"} justifyContent={"center"} marginTop={"16px"} gap={"8px"}>
                                    <Button variant="outlined" onClick={closeContact}>Cancel</Button>
                                    <Button variant="contained" >Send message</Button>
                                </Grid>
                            </Grid>
                        </Box>

                    </ContactModal>
                </CardActions>

            </Card>

        </React.Fragment>

    );

    return (

        <Card>{card}</Card>
    )

}

export default SingleListing

