import * as React from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, styled, Box, Checkbox, StepLabel } from '@mui/material';
import { FavoriteBorder, MoreVert} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsIcon from '@mui/icons-material/Sms';



export const ContentCard = () => {
    return(
        <Box flexGrow={1}>

        <Card >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    <MoreVert />
                    </IconButton>

                    }
                    title="{Title} by {auhtor}"
                    subheader="Condition: {stand}"
                    />
                <CardMedia
                    component="img"
                    height = "200"
                    alt="sales-picture"
                    src="https://cdn.shopify.com/s/files/1/0509/9529/8464/products/236c22c8645867a4ecab090794379542.jpg?v=1683849448"
                    />
            <CardContent>

                <box id="pricetag">
                    <Typography variant='h6' color="text.secondary">
                        Price DKK
                    </Typography>
                </box>
                
                <Typography variant="body2" color="text.secondary">
                    The book of books, no booklover has ever said no to buying this book. That begs the question... Are you a booklover? 
                </Typography>

            </CardContent>

            <CardActions disableSpacing>

                <IconButton aria-label="add to favorites">
                    <Checkbox {...StepLabel} icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon color='error'/>} /> 
                </IconButton>

                <IconButton aria-label="Message buyer">
                    <SmsIcon />
                </IconButton>

                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>

        </Card>
    </Box>
    )
}

export default ContentCard