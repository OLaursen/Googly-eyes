import React from 'react'
import Feed from '../Components/ContentGrid'
import { Typography } from '@mui/material'
import { theme } from '../styles/theme/theme'

export default class MyListings extends React.Component {
    render() {
        return (
            <>
                <Typography variant='h4'>
                    My Listings
                </Typography>
                
                {/*
                Alle listings skal have et seller ID. Hvis seller ID = user ID, så er den listing på "MyListing" page.
                */}
            </>
        )
    }
}