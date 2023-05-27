import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar/NavBar';
import MyListings from './pages/my_listings';
import CreateListing from './pages/create_listing';

function App() {
  //Makes browser declare page.
  useEffect(() => {
    document.title = "Ommm - Home"
  })
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-listings' element={<MyListings/>} />
          <Route path='/create-listing' element={<CreateListing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
