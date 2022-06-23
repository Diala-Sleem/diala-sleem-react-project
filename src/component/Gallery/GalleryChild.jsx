import React from "react";

const CalleryChild = ({ gallery }) => {
  return (
    <div className="card" key={gallery.imdbID}>
      <div>
        <p>{gallery.Year}</p>
      </div>
      <div>
        <img
          src={
            gallery.Poster !== "N/A"
              ? gallery.Poster
              : "https://via.placeholder.com/400"
          }
          alt={gallery.Title}
        />
      </div>
      <div>
        <span>{gallery.Type}</span>
        <h3>{gallery.Title}</h3>
      </div>
    </div>
  );
};
export default CalleryChild;
