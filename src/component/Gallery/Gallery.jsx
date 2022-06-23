import React, { useState, useEffect } from "react";
import GalleryChild from "./GalleryChild";
import { BiSearch } from "react-icons/bi";
import "./Gallery.css";
import { SiCodeproject } from "react-icons/si";

const API_URL = "http://www.omdbapi.com/?apikey=b6003d8a";

const Gallery = () => {
  const [search, setSearch] = useState("");
  const [gallerys, setGallerys] = useState([]);

  useEffect(() => {
    searchGallery("Batman");
  }, []);

  const searchGallery = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setGallerys(data.Search);
  };
  // console.log(gallerys);
  return (
    <div className="gallery">
      <section id="projects" className="about-text about-parent container">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white fw-bold  ">
              Gellery{" "}
              <SiCodeproject className="mx-auto inline-block w-10 mb-4" />
            </h1>
          </div>
        </div>
        <div className="search">
          <input
            value={search}
            onChange={(e) => searchGallery(e.target.value)}
            placeholder="Search"
          />
          <BiSearch onClick={() => searchGallery(search)} />
        </div>

        {gallerys?.length > 0 ? (
          <div className="container">
            {gallerys.map((gallery) => (
              <GalleryChild gallery={gallery} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Post found</h2>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
