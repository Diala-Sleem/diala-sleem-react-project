// import { SiCodeproject } from "react-icons/si";
// import React from "react";
// import projects from "./data";
// import { Link } from "react-router-dom";
// import { FaReact } from "react-icons/fa";

// export default function Test() {
//   console.log(projects);
//   return (
//     <section id="projects" className="about-text about-parent">
//       <div className="container px-5 py-10 mx-auto text-center lg:px-40">
//         <div className="flex flex-col w-full mb-20">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white fw-bold  ">
//             Apps <SiCodeproject className="mx-auto inline-block w-10 mb-4" />
//             Gallery{" "}
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
//             facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
//             fuga dolore.
//           </p>
//         </div>

//         <div className="flex flex-wrap -m-4">
//           {
//             //-------------------------
//           }
//           <div id="cards_landscape_wrap-2">
//             <div className="container">
//               <div className="row">
//                 {projects.map((product, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="col-xs-12 col-sm-6 col-md-3 col-lg-3"
//                     >
//                       <Link to={product.link}>
//                         <div className="card-flyer">
//                           <div className="text-box">
//                             <div className="image-box">
//                               <h1>{product.icon}</h1>
//                             </div>
//                             <div className="text-container">
//                               <h1>{product.title}</h1>
//                               <p>{product.description}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//           {
//             //-------------------------
//           }
//         </div>
//       </div>
//     </section>
//   );
// }

// /*
//  <>
//               <h1>{project.title}</h1>
//               <h1>{project.description}</h1>
//               <img src={image1} alt="img" />
//               <img src={image2} alt="img" />
//               <img src={image3} alt="img" />
//               <img src={image4} alt="img" />

//               <a key={index} href={project.link}>
//                 Link
//               </a>
//             </>
// */
