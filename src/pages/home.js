import React from 'react'
import { Box, Container, InputBase, Stack } from '@mui/material';
import Feed from '../Components/ContentGrid';
import NavBar from '../Components/NavBar/NavBar';
import styled from '@emotion/styled';
import { theme } from '../styles/theme/theme';
import { Search as SearchIcon } from '@mui/icons-material';

const Search = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    padding: "0 8px",
    borderRadius: theme.shape.borderRadius,
    width: "60%",
    border: "1",
    borderRightColor: "beige"
}));

const Home = () => {
    return (
        <>
            <NavBar />
            <Container display="flex" justifyContent="center">
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
                <Box sx={{ background: "#fff" }} >
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Feed />
                    </Stack>
                </Box>
                
            </Container>
        </>
    )
}
export default Home;