import React from 'react'
import Hello from './Hello'
import Introduction from "./Introduction";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


export default function AboutMe() {
  return (
    <div>
      <Hello />
      <Introduction />

      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <section id="about" className="about-parent2">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                <h2>
                  <br className="hidden lg:inline-block" /> &#123;{" "}
                  <span class="text-danger">I love </span> &#40; &lt; React
                  /&gt; &lt;Javascript/&gt; &lt;CSS/&gt; &amp; &lt;HTML/&gt;
                  &#41; &#125;
                </h2>
                <h6 className="mb-8 leading-relaxed shadow p-3 mb-5 bg-white rounded about-text lh-lg">
                  <div>
                    Web developing<span class="text-danger">()=&gt;</span>{" "}
                    &#123; I am still learning&#125;
                  </div>
                  <div>
                    Advertising<span class="text-danger">()=&gt;</span> &#123;
                    Printing and Digital campaigns&#125;
                  </div>
                  <div>
                    Branding
                    <span class="text-danger">()=&gt;</span> &#123; Building a
                    brand identity from the ground up.&#125;
                  </div>
                </h6>
                <div className="flex justify-center">
                  <a
                    href="#contact"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                  >
                    Work With Me
                  </a>
                  <a
                    href="#projects"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                  >
                    See My Past Work
                  </a>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./coding.svg"
                  />
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
