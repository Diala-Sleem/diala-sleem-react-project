import React from "react";
const CalleryChild = ({image}) => {
  return (
    <div className="card">
      <div>
        <p>2022</p>
      </div>
      <div>
        <img src={image} alt="design-webp" />
      </div>
      <div>
        <span>'gallery.Type'</span>
        <h3>'gallery.Title'</h3>
      </div>
    </div>
  );
};
export default CalleryChild;
