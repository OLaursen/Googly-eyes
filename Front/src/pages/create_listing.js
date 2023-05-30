import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Container } from '@mui/material'
import ListingForm from '../Components/CreateListing/ListingForm'

export default class CreateListing extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Container>
                    < ListingForm />
                </ Container>
            </>
        )
    }
}