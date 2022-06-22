import React from "react";
import Hello from "./Hello";
import Cards from "./Cards";
import Introduction from "./Introduction";
import SpringParallax from "./SpringParallax";
import "./About.css";

export default function AboutMe() {
  return (
    <div>
      <Hello />
      <Introduction />
      <SpringParallax />
    </div>
  );
}
