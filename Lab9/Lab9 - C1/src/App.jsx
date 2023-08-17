import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Courses from "./Courses";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import AboutMe from "./AboutMe";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="profile">
          <Profile />
        </div>
        <div className="info">
        <div className="nav-bar">
          <Link to="/about-me">About Me</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/edit-profile">Edit Profile</Link>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

