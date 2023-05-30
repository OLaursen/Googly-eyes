import {

  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";



const MyListingsSingleListing = (listingobj) => {
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

  const CustomModal = styled(Modal)(({ theme }) => ({
    width: "50vw",
    height: "50vh",
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
    },
  }));

  const ContactModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const myListingsCard = (
    <React.Fragment>
      <Card>
        <Grid container display={"flex"} direction={"row"} spacing={0}>
          <Grid item xs={12}>
            <CardMedia
              sx={{
                backgroundColor: "inherit",
                objectFit: "contain",
                paddingTop: 2,
                paddingBottom: 2,
              }}
              height="200"
              component={"img"}
              src={listingobj.imagePath}
            />
          </Grid>

          <Grid item xs={12}>
            <CardContent>
              <Typography variant="h6" id="price-tag">
                {listingobj.price}DKK
              </Typography>
              <Typography varian="body2" noWrap="true">
                {listingobj.title}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>

        <CardActions>
          <Grid container direction="row" justifyContent={"space-between"}>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={expandOpen}
            >
              Edit listing
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={openContact}
            >
              Mark as sold
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </React.Fragment>
    
  );

  return <Card>{myListingsCard}</Card>;
};

export default MyListingsSingleListing;
