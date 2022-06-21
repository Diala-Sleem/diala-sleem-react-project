import React from "react";
import {  NavLink } from "react-router-dom";
import './Header.css'
import { SiHomebridge,  } from "react-icons/si";



const Header = () => (
  <ul className="header-container">
    <li>
      <NavLink to="/" className="headerLink">
        <SiHomebridge className="i" />
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" className="headerLink">
        About
      </NavLink>
    </li>
    <li>
      <NavLink to="/contact" className="headerLink">
        Contact
      </NavLink>
    </li>
    <li>
      <NavLink to="/signUp" className="headerLink">
        Sign Up
      </NavLink>
    </li>
    <li>
      <NavLink to="/test" className="headerLink">
        Test
      </NavLink>
    </li>
  </ul>
);

export default Header;


/*
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
*/