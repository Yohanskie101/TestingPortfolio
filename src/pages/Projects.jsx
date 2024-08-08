import React from "react";
import Projectfirst from "../components/Projectfirst";
import Projectsecond from "../components/Projectsecond";
import Projectthird from "../components/Projectthird";

const Projects = () => {
  return (
    <div
      className="container  w-full h-fit gap-7 mt-40 2xl:mt-56 xl:mt-56 lg:mt-44 md:mt-40 sm:mt-40  
    "
      id="Proj-container"
    >
      <div className="font-for-intro mb-5 2xl:mb-16 lg:mb-13 md:mb-12 sm:mb-10 ">
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
