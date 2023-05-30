import React, { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Box, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import { Sell, ShoppingCart } from '@mui/icons-material'

import InboxCard from '../Components/InboxCard/InboxCard'


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