import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingHomePage from "./components/LandingHomePage/LandingHomePage";
import Signup from "./components/SignupForm/Signup";
import Login from "./components/LoginForm/Login";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;