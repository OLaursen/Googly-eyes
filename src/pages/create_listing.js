import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import { Container } from '@mui/material'
import ListingForm from '../Components/CreateListing/ListingForm'

export default class CreateListing extends React.Component {
    render() {
        return (
            <>
                <NavBar />
            <Container>
                <Link to={"/"}>
                    <h6>Back to Home</h6>

                    {/* Brug Floating Action Button til "Plus"-knappen */}
                </Link>
                < ListingForm />
            </ Container>
            </>
        ) 
    }
}