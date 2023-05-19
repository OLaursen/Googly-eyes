import { Box, Stack } from '@mui/material';
import { NavBar } from './Components/NavBar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/ContentCard';
import Rightbar from './Components/Rightbar';
import ContentCarousel from './Components/ContentCarousel';
import ContentCard from './Components/ContentCard';


function App() {
  return (
    <Box>
      <NavBar/>
      <Stack direction ="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar />
      </Stack>
      
    </Box>

  );
}

export default App;
