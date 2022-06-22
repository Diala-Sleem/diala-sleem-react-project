import { SiCodeproject } from "react-icons/si";
import React from "react";
import projects  from "./data";
import { Link } from "react-router-dom";

export default function Cards () {
  
  console.log(projects);
  return (
    <section id="projects" className="about-text about-parent">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white fw-bold  ">
            Apps <SiCodeproject className="mx-auto inline-block w-10 mb-4" />
            Gallery{" "}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div key={index}>{project.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
