import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import Projectfirst from "../components/Projectfirst";
import Projectsecond from "../components/Projectsecond";
import Projectthird from "../components/Projectthird";

const Projects = () => {
  //Framer project
  const projectRef = useRef(null);

  //Framer project check if it is in view
  const isInViewProject = useInView(projectRef, { once: true });

  return (
    <div
      className="container  w-full h-fit gap-7 mt-24 2xl:mt-56 xl:mt-56 lg:mt-44  sm:mt-24
    "
      id="Proj-container"
    >
      <div
        className="font-for-intro mb-5 2xl:mb-16 lg:mb-13 md:mb-12 sm:mb-10 "
        ref={projectRef}
        style={{
          transform: isInViewProject ? "none" : "translateX(-100px)",
          opacity: isInViewProject ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Projects
      </div>

      <div className="relative mb-7 sm:mb-16 md:mb-20 lg:mb-28">
        <Projectfirst />
      </div>

      <div className="relative mb-7 sm:mb-16 md:mb-20 lg:mb-28">
        <Projectsecond />
      </div>

      <div className="relative mb-7 sm:mb-16 md:mb-20 lg:mb-28">
        <Projectthird />
      </div>
    </div>
  );
};

export default Projects;
