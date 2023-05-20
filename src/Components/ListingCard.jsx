import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import CardHeader from '@mui/material/CardHeader';
import { Avatar, CardMedia, IconButton } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';


const ListingCard = salesInfo =>{
    const {title, author, price, description, condition, pictureSrc, SellerUsername, location} = salesInfo
      
      const card = (
        <React.Fragment>
            <CardHeader
        
        action={
          <IconButton aria-label="share-icon">
                <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={author}
        />
        <CardMedia 
            component="img" 
            src={pictureSrc}
            height={200}
            
        
        />
          <CardContent>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Location: {location}
            </Typography>
            <Typography variant="h5" component="div">
              Price: {price} DKK
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Condtion: {condition}
            </Typography>
            <Typography variant="body2">
                User: {SellerUsername} "{description}"
              
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Text seller</Button>
          </CardActions>
        </React.Fragment>
      );

    return(
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>

    )
}

export default ListingCard