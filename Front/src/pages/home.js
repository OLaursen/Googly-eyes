import React from 'react'
import { Box, Container, InputBase, Stack } from '@mui/material';
import Feed from '../Components/ContentGrid';
import NavBar from '../Components/NavBar/NavBar';
import styled from '@emotion/styled';
import { theme } from '../styles/theme/theme';
import { Search as SearchIcon } from '@mui/icons-material';

const Home = () => {
    return (
        <>
            <NavBar />
            <Container>
                {/* SearchField for Mobile Size */}
                <Box
                    display={"flex"}
                    width={"100%"}
                    justifyContent={"center"}
                    border={2}
                    borderColor={'black'}
                    borderRadius={theme.shape.borderRadius}
                    height={"48px"}
                    alignItems={"center"}
                    sx={{
                        [theme.breakpoints.up("md")]: {
                            display: "none",
                        },
                        marginTop: "16px"
                    }}>
                    <InputBase
                        fullWidth="true"
                        placeholder="      Search for title, author, subject, or ISBN.."
                    />
                    <SearchIcon fontSize='large' color='black' sx={{marginRight: "16px"}}/>
                </Box>
                <Feed/>
                
            </Container>
        </>
    )
}
export default Home;