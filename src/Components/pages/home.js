import React from 'react'
import { Box, Stack } from '@mui/material';
import Sidebar from '../SideBar';
import Listings from '../ContentGrid';
import Feed from '../ContentGrid';
import Rightbar from '../RightBar/index';
import Footer from '../Footer';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Box sx={{ background: "#fff" }} >
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Sidebar />
                        <Feed />
                        <Rightbar />
                    </Stack>
                </Box>
            </div>
        )
    }
}