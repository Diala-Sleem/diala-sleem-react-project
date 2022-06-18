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
//*****************************************************/
import { UserContext } from "../../UserContext/UserContext";
//*****************************************************/

export default function Layout () {
  const [contextValue, setContextValue] = useState([]);
  return (
    <div className="layout-container">
      {
        //-------------------------------------
      }
      <Header />
      <UserContext.Provider value={{contextValue, setContextValue}}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <Footer />;
      </UserContext.Provider>
      {
        //-------------------------------------
      }
    </div>
  );
}
