import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import AboutUs from "./Component/AboutUs";
import Profile from "./Component/Profile";
import BookList from "./Component/BookList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/SignIn" />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

      <Routes>
      
        <Route path="/home" element={
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
      </Routes>
    </Router>
  );
}
