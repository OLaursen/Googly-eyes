import React from "react";
import { Box } from "@mui/system";
import { IconButton, CardHeader, Typography, Card, CardActions, CardContent, Grid, Checkbox, StepLabel, CardMedia } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import SmsIcon from "@mui/icons-material/Sms";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoriteBorder} from "@mui/icons-material";
import { ListingImage } from "../../styles/ContentGrid";





const ListingCard = (listingobj) =>{
    
      
    const card = (
      <React.Fragment>
            <CardHeader
        
        addToFavorites={
            <IconButton>
                <Checkbox {...StepLabel} icon={<FavoriteBorder />} checkedIcon={<FavoriteBorderIcon color='error' />} />
            </IconButton>
            
        }
        action={
          <IconButton aria-label="share-icon">
                <ShareIcon />
          </IconButton>
        }
        title={listingobj.title}
        subheader={listingobj.author}
        />
        {/* <ListingImage src={listingobj.pictureSrc} /> */}
        
        <CardMedia sx={{ 
          height: "150px", objectFit:"cover"
          }} 
          image={listingobj.pictureSrc} 
          />

          <CardContent>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Location: {listingobj.location}
            </Typography>
            <Typography variant="h5" component="div">
              Price: {listingobj.price} DKK
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Condtion: {listingobj.condition}
            </Typography>
            <Typography variant="body2">
                User: {listingobj.SellerUsername} "{listingobj.description}"
              
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container direction={"row"} justify-content="space-evenly">
            <Grid item>
                <IconButton aria-label="add to favorites" size="small">
                      <Checkbox {...StepLabel} icon={<FavoriteBorder />} checkedIcon={<FavoriteBorderIcon color='error'/>} />
                </IconButton>
                </Grid>
                <Grid item>
                <IconButton aria-label="Message seller" size="small">
                    <SmsIcon />
                    <Typography variant="overline"> message seller</Typography> 
                </IconButton>
                </Grid>
                
            </Grid>
                
          </CardActions>
        </React.Fragment>
      );

    return(
        <Box sx={{}}>
            <Card variant="outlined">{card}</Card>
        </Box>

    )
}

export default ListingCard