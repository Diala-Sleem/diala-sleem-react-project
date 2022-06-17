import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

import "./Layout.css";

import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import SignUp from "../SignUp/SignUp";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}
