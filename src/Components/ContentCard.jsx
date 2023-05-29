import * as React from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, styled, Box, Checkbox, StepLabel, Container } from '@mui/material';
import { FavoriteBorder, MoreVert} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsIcon from '@mui/icons-material/Sms';



export function ContentCard(listingobj){
    const {title, condition, src, price, description } = listingobj
    return(
        <Container>

        <Card>
            <CardHeader
                    title= {title}
                    subheader={condition}
                    />
                <CardMedia
                    component="img"
                    height = "200"
                    alt="sales-picture"
                    src={src}                   
                     />
            <CardContent>

                <box id="pricetag">
                    <Typography variant='h6' color="text.secondary">
                        {price} DKK
                    </Typography>
                </box>
                
                <Typography variant="body2" color="text.secondary">
                    {description}
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
    </Container>
    )
}

