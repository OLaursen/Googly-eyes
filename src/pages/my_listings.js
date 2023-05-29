import React, { useState } from 'react'
import { Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import ContentCarousel from '../Components/ContentGrid/ContentCarousel'
import NavBar from '../Components/NavBar/NavBar'
import { Sell, ShoppingCart } from '@mui/icons-material'

const MyListing = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <NavBar />
            <Container>
                {/* Brug <Tabs></Tabs> til at toggle mellem Selling / Buying */}
                <Typography variant='h4' padding={"16px 0px"} >
                    My Listings
                </Typography>
                <Divider role="presentation" />
                
                <ContentCarousel></ContentCarousel>

                {/*
                Alle listings skal have et seller ID. Hvis seller ID = user ID, så er den listing på "MyListing" page.
                */}
            </Container>
        </>
    )
}

export default MyListing;