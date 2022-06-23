import React, { useState } from "react";
import GalleryChild from "./GalleryChild";
import "./Gallery.css";
import { SiCodeproject } from "react-icons/si";


const Gallery = () => {
  
  return (
    <div className="gallery">
      <section id="projects" className="about-text about-parent ">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white fw-bold  ">
              Gellery{" "}
              <SiCodeproject className="mx-auto inline-block w-10 mb-4" />
            </h1>
          </div>
        </div>
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <GalleryChild image={"/design.webp"} />
          <GalleryChild image={"/growth_2.webp"} />
          <GalleryChild image={"/design.webp"} />
          <GalleryChild image={"/growth_2.webp"} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
