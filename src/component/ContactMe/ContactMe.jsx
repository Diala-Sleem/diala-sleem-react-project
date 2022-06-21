import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";

// import emailjs from "@emailjs/browser";
import "./ContactMe.css";
//---------------------------------
import { UserContext } from "../../UserContext/UserContext";
//-------------------

//---------------------------------

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();

  
  //----------------------------------------------------------------
  // console.log("errors", errors);
  //----------------------------------------------------------------


  //-------------------------setContextValue------------------------------
  const { contextValue, setContextValue } = useContext(UserContext);
  const [thanksMsg, setThanksMsg] = useState("");
  // const [values, setValues] = useState("");
  let randomNum = Math.floor(Math.random() * 1000000);
  
  
  const sendData = (values) => {
   
    const newValues = [
      ...contextValue,
      {
        firstName: values.firstName,
        lastName: values.lastName,
        message: values.message,
        title: values.title,
        yourMail: values.yourMail,
        yourMobile: values.yourMobile,
        id: randomNum,
      },
    ];
    setContextValue(newValues);

    setThanksMsg("Thank you for your message");
    // console.log("contextValue", contextValue);
  };

  //-------------------------sendEmail----------------------------------

  // const sendEmail = (values) => {
  //   console.log("sendEmail", values);
  //   emailjs
  //     .sendForm(
  //       "service_npv8uhi",
  //       "template_bw0s4sk",
  //       ...values,
  //       "F3uTeIympeqwCmsfT"
  //     )
  //     .then((res) => {
  //       console.log("Ok", res);
  //     })
  //     .catch((error) => console.log(error));
  // };

  //-------------setFocus--------------------
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus, contextValue]);
  //----------------------------

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(sendData)} className="formParent">
        <h4>Contact Me</h4>

        <div className="inputForm">
          <label htmlFor="firstName">First name</label>
          <input
            className={`${errors.firstName ? "redBorder" : ""}`}
            name="firstName"
            type="text"
            placeholder="First name"
            {...register("firstName", {
              required: true,
              maxLength: 80,
              minLength: {
                value: 3,
              },
            })}
          />
          {errors.firstName && (
            <p className="errorMassage">
              A name is required and longer than 3 character
            </p>
          )}
        </div>

        <div className="inputForm">
          <label htmlFor="lastName">Last name</label>
          <input
            className={`${errors.lastName && "redBorder"}`}
            name="lastName"
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: true,
              maxLength: 100,
              minLength: 3,
            })}
          />
          {errors.lastName && (
            <p className="errorMassage">Last name is required</p>
          )}
        </div>

        <div className="inputForm">
          <label htmlFor="yourMail">Your Email</label>

          <input
            className={`${errors.yourMail && "redBorder"}`}
            name="yourMail"
            type="email"
            placeholder="Email"
            {...register("yourMail", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            })}
          />
          {errors.yourMail && (
            <p className="errorMassage">Email address is required</p>
          )}
        </div>

        <div className="inputForm">
          <label htmlFor="yourMobile">Your Mobile </label>

          <input
            className={`${errors.yourMobile && "redBorder"}`}
            name="yourMobile"
            type="tel"
            placeholder="Mobile number"
            {...register("yourMobile", {
              required: true,
              minLength: 12,
              maxLength: 15,
            })}
          />
          {errors.yourMobile && (
            <p className="errorMassage">Mobile number is not valid</p>
          )}
        </div>

        <div className="inputFormSelect">
          <select
            {...register("title", { required: true })}
            className={`${errors.title && "redBorder"}`}
          >
            <option className="selectOption" value="">
              Select
            </option>
            <option className="selectOption" value="Mr">
              Mr
            </option>
            <option className="selectOption" value="Mrs">
              Mrs
            </option>
            <option className="selectOption" value="Miss">
              Miss
            </option>
            <option className="selectOption" value="Dr">
              Dr
            </option>
          </select>
          {errors.title && <p className="errorMassage">you don't Select</p>}
        </div>

        <div className="inputFormTextarea">
          <label htmlFor="message"> Your Message</label>
          <textarea
            className={`${errors.message && "redBorder"}`}
            name="message"
            placeholder="Your message"
            {...register("message", {
              required: true,
              maxLength: 1000,
              minLength: 5,
              rows: 5,
            })}
          />
          {errors.message && <p className="errorMassage">Message required</p>}
        </div>

        <button type="submit" className="contact-btn">
          Submit
        </button>
      </form>
      <div>
        <div className={thanksMsg && "formParent thanksMsg"}>
          <p>{thanksMsg}</p>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
