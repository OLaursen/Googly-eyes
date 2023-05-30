import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import ContentCard from "../../../../Front/src/Components/ContentCard";

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
              src={listingobj.pictureSrc}
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
            {/* <Link className="menu-link" to={"/expanded-view"}> */}
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={expandOpen}
            >
              Edit listing
            </Button>

            {/* </Link> */}

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
