import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
             import {Link} from "react-router-dom";

// import ContactApi from "./ContactApi";

import "./SignUp.css";
import { UserContext } from "../../UserContext/UserContext";


export default function SignUp () {
      const { contextValue, setContextValue } = useContext(UserContext);

  const {
    register,
    handleSubmit,
  } = useForm();

  //----------------------------------------------------------------
  const [apperanse, setApperanse] = useState(false);
  const [data, setData] = useState("");

  const onSubmit = (data) => {
    // console.log("data======>", data);
    const username = data.username;
    const password = data.password;

    // console.log("username======>", username, password);

    (username === "diala.slim@yahoo.com") & (password === "1234")
      ? setApperanse(true)
      : setData("The user is not logged in.!! ");
  };
  // console.log("apperanse,Data======>", apperanse, data);
  return (
    <div className="signUp-container ">
      <form
        id="form"
        className="signUp-parent"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Register just for the team</label>
        <p className="reversed">{contextValue.length} massage(s)</p>
        <input
          type="text"
          {...register("username")}
          placeholder="username"
          className="inputForm"
        />
        <input
          type="password"
          name="password"
          autoComplete="1234"
          {...register("password")}
          placeholder="password"
          className="inputForm"
        />
        <button type="submit" className="signUp-btn">
          {apperanse && (
            <Link to="/contactApi">Sign In</Link>
          )}
          <b className="reversed reversedLeft InfoBanner">
            {apperanse
              ? "Please!"
              : "The user is not logged in"}
          </b>
        </button>
      </form>
    </div>
  );
}
