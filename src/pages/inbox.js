import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import { Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import { Sell, ShoppingCart } from '@mui/icons-material'
import ContentCarousel from '../Components/ContentGrid/ContentCarousel'
import { theme } from '../styles/theme/theme'
import InboxCard from '../Components/InboxCard/InboxCard'

const InboxPage = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <NavBar />
            <Container minHeight="100vh">
                <Typography variant="h4" padding={"16px 0px"}>
                    Inbox
                </Typography>
                <Divider role="presentation" />
                <Box display={"flex"} justifyContent={"center"} marginTop={"24px"} marginBottom={"24px"}>
                    <Tabs value={value} onChange={handleChange} aria-label=''>
                        <Tab icon={<Sell />} label="Selling" />
                        <Tab icon={<ShoppingCart />} label="Buying" />
                    </Tabs>
                </Box>
                <InboxCard></InboxCard>
            </Container>
        </>
    )
}
export default InboxPage;