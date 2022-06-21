import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import cv from "../../assets/cv/cv.pdf";

import CustomSimpleTypewriter from "./CustomSimpleTypewriter";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-parent">
        <div className="home-details">
          <div className="social-media-container">
            <div className="social-media-container-icon">
              <a
                rel="noreferrer"
                href="https://github.com/Diala-Sleem"
                target="_blank"
                className="social-media"
              >
                <FiGithub className="i" />
              </a>

              <a
                rel="noreferrer"
                href="https://www.linkedin.com/feed/?trk=hb_signin"
                target="_blank"
                className="social-media"
              >
                <FiLinkedin className="i" />
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/dilasgraficdesign/"
                target="_blank"
                className="social-media"
              >
                <FiInstagram className="i" />
              </a>
            </div>
          </div>

          <div className="home-details-name">
            <span className="primary-text">
              {" "}
              Hello,I'm <span className="highlighted-text">Diala</span>
            </span>
          </div>

          <div className="home-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <CustomSimpleTypewriter/>
              </h1>
              <span className="home-role-tagline">
                &lt; Full-stack web developer with background knowledge of
                Graphic Design /&gt;
              </span>
            </span>
          </div>
          <div className="home-options">
            <Link to="/about">
              <button className=" btn badge primary-btn ">Hire Me</button>
            </Link>

            <a href={cv} download>
              <button className="btn  highlighted-btn ">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="home-picture">
        <div className="home-picture-background"></div>
      </div>
    </div>
  )
}
