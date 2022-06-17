import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import "./ContactMe.css";

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    // watch,
    setFocus,
    // reset,

    formState: { errors },
  } = useForm();
  //----------------------------------------------------------------
  // console.log("errors", errors);
  // const watchValues = watch(["title"]);
  // console.log(watchValues);
  //----------------------------------------------------------------

  const sendEmail = async (values) => {
    console.log(values);
    emailjs
      .sendForm(
        "service_npv8uhi",
        "template_vrtk67n",
        <p>{values}</p>,
        "F3uTeIympeqwCmsfT"
      )
      .then(
        (result) => {
          console.log("Ok", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }


  

  //---------------------------------
  React.useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  //----------------------------

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(sendEmail)} className="formParent">
        <h4>Contact Me</h4>

        <div className="inputForm">
          <label htmlFor="firstName">First name</label>
          <input
            className={`${errors.firstName && "redBorder"}`}
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
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
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
              maxLength: 500,
              minLength: 20,
              rows: 5,
            })}
          />
          {errors.message && <p className="errorMassage">Message required</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
