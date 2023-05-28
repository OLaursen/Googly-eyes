import React from 'react'
import { Container, Divider, Typography } from '@mui/material'
import { theme } from '../styles/theme/theme'
import ContentCarousel from '../Components/ContentGrid/ContentCarousel'
import { Padding } from '@mui/icons-material'

export default class MyListings extends React.Component {
    render() {
        return (
            <>
            <Container>
                
                <Typography variant='h4' padding={"16px 0px"}>
                    My Listings
                </Typography>
                <Divider></Divider>
                <ContentCarousel></ContentCarousel>
                
                {/*
                Alle listings skal have et seller ID. Hvis seller ID = user ID, så er den listing på "MyListing" page.
                */}
            </Container>
            </>
        )
    }
}