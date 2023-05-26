import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/home';
import Customnavbar from './Components/NavBar';
import Footer from './Components/Footer';
import { Box, Container } from '@mui/material';

function App() {
  //Makes browser declare page.
  useEffect(()=>{
    document.title ="Ommm - Home"
  })
  return (
    <Box>
      <Customnavbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
}

export default App;
