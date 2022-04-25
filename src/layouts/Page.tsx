import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page
import Home from "../pages/home";
import About from "../pages/about";
import Registration from "../pages/registration";
import Profile from "../pages/profile";
import Forum from "../pages/forum";
import Records from "../pages/records";
import Game from "../pages/game";

// components
import NavTest from "../components/NavTest";

const Page = () => {
  return (
    <div>
      <BrowserRouter>
        <NavTest />
        <Routes>
          <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                          <Route path="registration" element={<Registration />} />
          <Route path="profile" element={<Profile />} />
          <Route path="forum" element={<Forum />} />
          <Route path="records" element={<Records />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Page;
