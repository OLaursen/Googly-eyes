import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar/NavBar';
import MyListings from './pages/my_listings';

function App() {
  //Makes browser declare page.
  useEffect(() => {
    document.title = "Ommm - Home"
  })
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MyListings' element={<MyListings/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
