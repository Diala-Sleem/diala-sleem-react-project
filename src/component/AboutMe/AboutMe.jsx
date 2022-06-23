import React from "react";
import Hello from "./Hello";
import Introduction from "./Introduction";
import SpringParallax from "./SpringParallax";
import "./About.css";
import CardsCon from "./CardsCon";

export default function AboutMe() {
  return (
    <div>
      <Hello />
      <Introduction />
      <SpringParallax />
      <CardsCon/>
    </div>
  );
}
