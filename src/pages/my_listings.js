import React from 'react'
import { Container, Typography } from '@mui/material'
import ContentCarousel from '../Components/ContentGrid/ContentCarousel'
import NavBar from '../Components/NavBar/NavBar'

const MyListing = () => {
    return (
        <>
            <NavBar />
            <Container>
                {/* Brug <Tabs></Tabs> til at toggle mellem Selling / Buying */}
                <Typography variant='h4' padding={"16px 0px"} >
                    My Listings
                </Typography>

                <ContentCarousel></ContentCarousel>

                {/*
                Alle listings skal have et seller ID. Hvis seller ID = user ID, så er den listing på "MyListing" page.
                */}
            </Container>
        </>
    )
}

export default MyListing;