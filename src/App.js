import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './Components/Footer';
import MyListings from './pages/my_listings';
import CreateListing from './pages/create_listing';
import SignIn from './pages/sign_up';
import InboxPage from './pages/inboxBuying';
import SignUp from './Components/SignUp/SignUp';
import Expanded_view from './pages/expanded_view';
import {getUsers, createUser} from './data/userHandling';
import InboxPageSelling from './pages/inboxSelling';
import InboxPageBuying from './pages/inboxBuying';

function App() {
  //Makes browser declare page.
  useEffect(() => {
    document.title = "Ommm - Home"
  })

  let users = getUsers();

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/my-listings' element={<MyListings/>} />
          <Route path='/inbox/selling' element={<InboxPageSelling/>} />
          <Route path='/inbox/buying' element={<InboxPageBuying/>} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/expanded-view' element={<Expanded_view/>} />
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;