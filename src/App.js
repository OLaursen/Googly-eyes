import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar/NavBar';
import MyListings from './pages/my_listings';
import CreateListing from './pages/create_listing';
import { Inbox } from '@mui/icons-material';
import SignIn from './pages/sign_up';

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
          <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/my-listings' element={<MyListings/>} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
