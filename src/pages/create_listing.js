import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'

export default class CreateListing extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Link to={"/"}>
                    <h1>Return home bitch</h1>

                    {/* Brug Floating Action Button til "Plus"-knappen */}
                </Link>
            </>
        )
    }
}