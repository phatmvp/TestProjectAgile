import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

import Profile from "./components/Profile";
import HomePage from "./components/HomePage";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/profile" element={<Profile />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
