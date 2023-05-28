import React from 'react'
import { Typography } from '@mui/material'
import { theme } from '../styles/theme/theme'
import ContentCarousel from '../Components/ContentGrid/ContentCarousel'

export default class MyListings extends React.Component {
    render() {
        return (
            <>
                <Typography variant='h4'>
                    My Listings
                </Typography>
                <ContentCarousel></ContentCarousel>
                
                {/*
                Alle listings skal have et seller ID. Hvis seller ID = user ID, så er den listing på "MyListing" page.
                */}
            </>
        )
    }
}