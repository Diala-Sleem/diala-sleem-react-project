import React from 'react'
import "./About.css";
import Cards from "./Cards";
import { SiCodeproject } from "react-icons/si";




export default function CardsCon() {
  return (
    <section id="projects" className="about-text about-parent container">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white fw-bold   h1Style">
            Skills <SiCodeproject className="mx-auto inline-block w-10 mb-4" />
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>

        
      </div>
      <Cards />
    </section>
  );
}

