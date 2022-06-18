import React, { useContext } from "react";
import { UserContext } from "../../UserContext/UserContext";

export default function ContactApi() {
  const { contextValue } = useContext(UserContext);
  console.log("contextValue", contextValue);
  return contextValue.map((conVal) => {
    return (
      <div>
        <div>
          <h5 key={conVal.yourMail}>
            <span>First Name:</span> {conVal.title + " "}
            {conVal.firstName} {conVal.lastName}
          </h5>
          <h6 key={conVal.yourMail}>
            <span>Email: </span>
            {conVal.yourMail}
          </h6>
          <h6 key={conVal.yourMail}>
            <span>Mobile: </span> {conVal.yourMobile}
          </h6>
          <p key={conVal.yourMail}>
            <h5>Message: </h5>
            {conVal.message}
          </p>
        </div>
      </div>
    );
  });
}
