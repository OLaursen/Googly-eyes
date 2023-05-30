import * as React from 'react';
import {Card, CardMedia, CardContent, IconButton, Typography, styled, Container, Grid, Divider } from '@mui/material';

import SmsIcon from '@mui/icons-material/Sms';



const ContentCard = (title, price,description,condition, imagePath, authors, ) => {

    const StyledContainer = styled(Container)(({ theme }) => (
        {
        width: '50vw',
        minWidth: '500',
        height: '50vh',
        minHeight: '550',
        direction: "row",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      
        [theme.breakpoints.down("md")]: {
            flexdirection: "row",
            width: 500,
            height: 550,
        },
      
    }));
    
  
    


    return(
        <>
    
        
        <Card>
        
            <StyledContainer flexDirection="column">
            

            <Grid container direction="row" spacing={2} justifyContent={"center"}>
                <Grid item xs={6} lg={4} sx={{}}>

                <CardMedia
                            sx={{backgroundColor:"inherit", objectFit:"contain", paddingTop:2, paddingBottom:2}}
                            height="100%"
                            component={"img"}
                            src={imagePath} 
                            />  
                
             </Grid>
             <Grid item xs={6} lg={8}>

                <CardContent>
                    <Container justifyContent="space-between" height="100%">
                        <Typography variant='h4' color={'primary'}>
                            {title}
                        </Typography>
                        <Divider presentation/>
                        <Typography variant='h6' color={'textSecondary'}>
                            Condition: {condition}
                        </Typography>
                        <Typography>
                            Remarks: {description}
                        </Typography>

                        <Container direction="row" justifyContent="space-between">

                        <Typography variant='h4' color={'primary'}>
                             {price}DKK
                        </Typography>
                        <Typography>
                            {authors}
                        </Typography>
                        </Container>

                    </Container>
                  
                    
                   
                
                    <IconButton aria-label="Message buyer">
                    <SmsIcon />

                </IconButton>


                </CardContent>

             </Grid>


            </Grid >
       
            </StyledContainer>
        

        </Card>
    
    </>
    )
}
export default ContentCard
