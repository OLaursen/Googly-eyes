import React from 'react'
import { Container, Divider, Typography } from '@mui/material'
import ContentCarousel from '../Components/ContentGrid/ContentCarousel'

export default class MyListings extends React.Component {
    render() {
        return (
            <>
            <Container>
                
                <Typography variant='h4' padding={"16px 0px"}>
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
}