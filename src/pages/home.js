import React from 'react'
import { Box, Stack } from '@mui/material';
import Sidebar from '../Components/SideBar';
import Feed from '../Components/ContentGrid';
import Rightbar from '../Components/RightBar/index';
import NavBar from '../Components/NavBar/NavBar';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Box sx={{ background: "#fff"}} >
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Sidebar />
                        <Feed />
                        <Rightbar />
                    </Stack>
                </Box>
            </>
        )
    }
}