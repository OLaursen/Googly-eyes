import React from 'react'
import { Box, Container, Stack } from '@mui/material';
import Sidebar from '../Components/SideBar';
import Feed from '../Components/ContentGrid';
import Rightbar from '../Components/RightBar/index';
import NavBar from '../Components/NavBar/NavBar';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Container>
                <Box sx={{ background: "#fff"}} >
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Feed />
                    </Stack>
                </Box>
                </Container>
            </>
        )
    }
}