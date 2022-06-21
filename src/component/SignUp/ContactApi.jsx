import React, { useContext } from "react";
import { UserContext } from "../../UserContext/UserContext";
import "./SignUp.css";
import Note from './Note'

export default function ContactApi() {
  const { contextValue } = useContext(UserContext);
  console.log("contextValue", contextValue);
  return contextValue.map((conVal,index) => {
    return (
      <div className="signUp-container" key={conVal.id}>
        <div className="signUp-parent ">
          <h5 className="signUp-innerText ">
            <span className="signUp-text">First Name:</span>{" "}
            {conVal.title + " "}
            {conVal.firstName} {conVal.lastName}
          </h5>
          <h6 key={conVal.yourMail} className="signUp-innerText">
            <span className="signUp-text">Email: </span>
            {conVal.yourMail}
          </h6>
          <h6 key={conVal.yourMail} className="signUp-innerText">
            <span className="signUp-text">Mobile: </span> {conVal.yourMobile}
          </h6>
          <p key={conVal.yourMail} className="signUp-innerText">
            <h5>Message: </h5>
            <div className=" signUp-text-box">
              <p className=" signUp-text-massage">{conVal.message}</p>
            </div>
        <Note/>
          </p>
        </div>
      </div>
    );
  });
}
