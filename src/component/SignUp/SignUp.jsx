import React, { useContext } from "react";
import { UserContext } from "../../UserContext/UserContext";

export default function ContactApi() {
  const { contextValue } = useContext(UserContext);
  console.log("contextValue", contextValue);
  return (
    <div>
      <p>{contextValue.firstName}</p>
      <p>{contextValue.lastName}</p>
      <p>{contextValue.message}</p>
      <p>{contextValue.title}</p>
      <p>{contextValue.yourMail}</p>
      <p>{contextValue.yourMobile}</p>
    </div>
  );
}
