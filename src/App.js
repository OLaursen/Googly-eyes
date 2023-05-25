import { useEffect } from 'react';
import { Container } from '@mui/system';
import Customnavbar from './Components/NavBar/index';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/home';
import Customnavbar from './Components/NavBar';
import Footer from './Components/Footer';
import { useState } from 'react';
const [user, setUser] = useState();

function App() {
  //Makes browser declare page.
  useEffect(()=>{
    document.title ="Ommm - Home"
  })
  return (
    <>
      <Customnavbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
