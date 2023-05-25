import { Box, Stack } from '@mui/material';
import Sidebar from './Components/SideBar';
import Listings from './Components/ContentGrid/Feed';
import Rightbar from './Components/RightBar';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '@mui/system';
import Customnavbar from './Components/NavBar/index';

const [user, setUser] = useState();

function App() {
  //Makes browser declare page.
  useEffect(()=>{
    document.title ="Ommm - Home"
  })
  return (
    //<Container maxWidth="xl">
    <Box sx={{background: "#fff"}} >
    <Customnavbar/>
    <Stack direction ="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Listings />
          <Rightbar />
      </Stack>
    </Box>
      
   // </Container>

  );
}

export default App;
