import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Container } from '@mui/material'
import ListingForm from '../Components/CreateListing/ListingForm'
import ContentCard from '../Components/ContentCard'

export default class expanded_view extends React.Component {
    render() {
        return (
            <>
            <NavBar />
            <Container>
                <ContentCard />
            </Container>
            </>
        ) 
    }
}