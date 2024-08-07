import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import AboutUs from "./Component/AboutUs";
import Profile from "./Component/Profile";
import BookList from "./Component/BookList";
import Footer from './Component/Footer';
import Payment from './Component/Payment';
import CancelTikit from './Component/CancelTikit'

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>

        <Routes>
          <Route 
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            } 
          />
          <Route
            path="/aboutus"
            element={
              <>
                <Navbar />
                <AboutUs />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />
          <Route
            path="/bookList"
            element={
              <>
                <Navbar />
                <BookList />
              </>
            }
          />
           <Route
            path="/Payment"
            element={
              <>
                <Navbar />
                <Payment />
              </>
            }
          />
          <Route
            path="/CancelTikit"
            element={
              <>
                <Navbar />
                <CancelTikit />
              </>
            }
          />
        </Routes>
        
        <div style={{ marginTop: 'auto' }}>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
