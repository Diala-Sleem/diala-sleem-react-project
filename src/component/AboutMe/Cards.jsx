import React from "react";
import "./About.css";

import { FaReact } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";


import {
  DiJavascript1,
  DiCss3Full,
  DiHtml5,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";


import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";


export default function Cards() {
  return (
    <div>
      <CardGroup className="g-4 xs={1} md={}  ">
        <Card style={{ height: "100%", margin: "15px" }}>
          <Card.Body>
            <Card.Text>
              <Card.Title>
                <h1>
                  {" "}
                  <FaReact />
                </h1>{" "}
                <h1> React</h1>
              </Card.Title>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ height: "100%", margin: "15px" }}>
          <Card.Body>
            <Card.Title>
              <h1>
                {" "}
                <DiJavascript1 />
              </h1>
              <h1> Javascript</h1>
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="g-4 xs={1} md={2} ">
        <Card style={{ height: "100%", margin: "15px" }}>
          <Card.Body>
            <Card.Text>
              <Card.Title>
                <h1>
                  {" "}
                  <DiCss3Full />
                </h1>{" "}
                <h1> CSS</h1>
              </Card.Title>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ height: "100%", margin: "15px" }}>
          <Card.Body>
            <Card.Title>
              <h1>
                {" "}
                <DiHtml5 />
              </h1>
              <h1> HTML</h1>
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="g-4 xs={1} md={2} ">
        <Card style={{ height: "100%", margin: "15px" }}>
          <Card.Body>
            <Card.Text>
              <Card.Title>
                <h1>
                  {" "}
                  <DiPhotoshop />
                </h1>{" "}
                <h1> Photoshop</h1>
              </Card.Title>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ height: "100%", margin: "15px" }}>
          <Card.Body>
            <Card.Title>
              <h1>
                {" "}
                <DiIllustrator />
              </h1>
              <h1> Illustrator</h1>
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="g-4 xs={1} md={2} ">
        <Card style={{ height: "100%", margin: "15px" }}>
          <Card.Body>
            <Card.Text>
              <Card.Title>
                <h1>
                  {" "}
                  <SiAdobeindesign />
                </h1>{" "}
                <h1> Indesign</h1>
              </Card.Title>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

