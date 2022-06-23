import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import "./Layout.css";
//*****************************************************/
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import SignUp from "../SignUp/SignUp";
import Cards from "../AboutMe/Cards";
import CardsCon from "../AboutMe/CardsCon";
import Gallery from "../Gallery/Gallery";



//*****************************************************/
import { UserContext } from "../../UserContext/UserContext";
import Test from "../../Test";
import ContactApi from "../SignUp/ContactApi";
import Callery from "../Gallery/Gallery";
//*****************************************************/

export default function Layout () {
  const [contextValue, setContextValue] = useState([]);
  return (
    <div className="layout-container">
      {
        //-------------------------------------
      }
      <Header />
      <UserContext.Provider value={{ contextValue, setContextValue }}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/cardsCon" element={<CardsCon />} />
          <Route path="*" element={<h1>404 - Not Found!</h1>} />
          <Route path="/contactApi" element={<ContactApi />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
      {
        //-------------------------------------
      }
    </div>
  );
}
