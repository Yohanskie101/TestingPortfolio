import React from "react";

const Skills = () => {
  return (
    // <div className="container grid lg:grid-cols-[80%,20%] text-center lg:text-left w-full h-fit gap-2 mt-40 2xl:mt-56 xl:mt-56 lg:mt-44 md:mt-40 sm:mt-40">
    <div className="container grid  text-center  w-full h-fit gap-2 mt-40 2xl:mt-56 xl:mt-56 lg:mt-44 md:mt-40 sm:mt-40">
      <div className="flex flex-row">
        {/* <div className="flex flex-col">
          <span className="font-for-intro-2 font-semibold">"</span>
        </div> */}
        <div className="flex flex-col">
          <span className="font-for-intro font-semibold">
            "Don't compare yourself with anyone in this world. If you do so, you
            are insulting yourself."
          </span>
          <span className="block text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold mt-5">
            -Bill Gates
          </span>
        </div>
      </div>
      <div></div> {/* This is the empty second column */}
    </div>
  );
};

export default Skills;
