import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import { Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import { Sell, ShoppingCart } from '@mui/icons-material'
import ContentCarousel from '../Components/ContentGrid/ContentCarousel'
import { theme } from '../styles/theme/theme'
import InboxCard from '../Components/InboxCard/InboxCard'
import InboxPageSelling from './inboxSelling'

const InboxPageBuying = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        const theValue = newValue;
        if (theValue === 0) {
            return redirect("/inbox/selling")
        } else {
            return redirect("/inbox/buying")
        }
    };
    
    return (
        <>
            <NavBar />
            <NavBar />
            <Container minHeight="100vh" display="flex" justifyContent="center" >
                <Box display="flex" justifyContent="center" flexDirection={"column"}>

                    <Typography variant="h4" padding={"16px 0px"}>
                        Inbox
                    </Typography>
                    <Divider role="presentation" />
                    <Box display={"flex"} justifyContent={"center"} marginTop={"24px"} marginBottom={"24px"}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab icon={<Sell />} label="Selling" />
                            <Tab icon={<ShoppingCart />} label="Buying" />
                        </Tabs>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>

                        <InboxCard />
                        <InboxCard />
                        <InboxCard />
                        <InboxCard />
                        <InboxCard />
                        <InboxCard />
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default InboxPageBuying;