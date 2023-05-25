import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/home';
import Customnavbar from './Components/NavBar';
import Footer from './Components/Footer';

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
