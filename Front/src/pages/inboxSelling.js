import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Tab, Tabs, TextField, Typography } from '@mui/material'
import { Sell, ShoppingCart } from '@mui/icons-material'
import ContentCarousel from '../Components/ContentGrid/ContentCarousel'
import { theme } from '../styles/theme/theme'
import InboxCard from '../Components/InboxCard/InboxCard'
import InboxPageBuying from './inboxBuying'

const InboxPageSelling = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <NavBar />
            <Container>
                <Box display="flex" justifyContent="center" flexDirection={"column"}  >

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
                    <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"} >
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
export default InboxPageSelling;