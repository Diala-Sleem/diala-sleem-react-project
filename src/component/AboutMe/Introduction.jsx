import React from "react";
import MovingComponent from "react-moving-text";

export default function Card() {
  return (
    <section id="about" className="about-parent">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white fw-bold  ">
            <span class="text-info">
              <MovingComponent
                type="zoomOut"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease-out"
                iteration="3"
                fillMode="backwards"
              >
                <span class="text-danger">const </span> DIALA-SLEEM{" "}
                <span class="text-danger">()=&gt;</span>
              </MovingComponent>
            </span>
          </h1>
          </div>
      </div>
    </section>
  );
}
