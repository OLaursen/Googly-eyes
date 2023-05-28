import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {ListingForm} from "../Components/CreateListing/ListingForm"
import { Container } from '@mui/material';



export default class CreateListing extends React.Component {
    render() {

    return (
        <>
        <Container>

            <Link to={"/"}>
                    <h1>Return home bitch</h1>
                    
                    {/* Brug floating Action Button til "Plus"-knappen */}
            </Link>
            < ListingForm />
        </Container>
            </>
        )
    }
}