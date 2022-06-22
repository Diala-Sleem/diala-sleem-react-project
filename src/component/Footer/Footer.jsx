import React from 'react'
import './Footer.css'
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";



import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar fixed="bottom" fluid className="footer-edit">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            xs={12}
            size="xs"
            className="me-auto my-2 my-sm-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="https://github.com/Diala-Sleem"
              className=" footer-text"
            >
              {" "}
              <FiGithub className="i" />{" "}
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/feed/?trk=hb_signin"
              className=" footer-text"
            >
              {" "}
              <FiLinkedin className="i" />{" "}
            </Nav.Link>{" "}
            <Nav.Link
              href="https://www.instagram.com/dilasgraficdesign/"
              className=" footer-text"
            >
              {" "}
              <FiInstagram className="i" />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;


