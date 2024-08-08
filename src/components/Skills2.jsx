import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import phpimg from "../assets/php.png";
import jsimg from "../assets/js.png";
import csharpimg from "../assets/c-sharp.png";
import threeimg from "../assets/threejs.png";
import reactimg from "../assets/react.png";
import tailwindimg from "../assets/tailwindcss.png";
import bootstrapimg from "../assets/bootstrap.png";
import sweetalert2img from "../assets/sweetalert2.png";
import sweetalertimg from "../assets/sweetalert.png";
import htmlimg from "../assets/html-5.png";
import cssimg from "../assets/css-3.png";
import githubimg from "../assets/github.png";
import figmaimg from "../assets/figma.png";
import blenderimg from "../assets/blender.png";
import trelloimg from "../assets/trello.png";
import SkillsTry from "./SkillsTry";

gsap.registerPlugin(ScrollTrigger);

const Skills2 = () => {
  useEffect(() => {
    // Create the ScrollTrigger and animation when the component mounts
    const trigger = ScrollTrigger.create({
      trigger: ".wrapper-404",
      start: "top top",
      end: "+900vh",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(".wrapper-404", {
          x: `${-150 * self.progress}vw`,
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });

    // Clean up all ScrollTriggers on component unmount
    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="skills2-container container relative">
      <section className="wrapper-404">
        <SkillsTry />
        <div className="font-for-intro relative block">Skills</div>
        <div className="wrapper-container flex gap-10">
          {/* 1st Box */}
          <div className="flex flex-col items-center font-for-intro-2 font-semibold">
            <div className="flex justify-center font-for-intro-2 font-semibold">
              Programming Languages
            </div>
            <div className="w-full flex justify-center">
              <section className="flex flex-wrap justify-between w-3/4 mx-auto">
                {/* div1 */}

                <div className="flex items-center flex-col p-4 w-1/3">
                  <img src={jsimg} className="h-10 xl:h-20" alt="JavaScript" />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    JavaScript
                  </p>
                </div>
                {/* div2 */}
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img src={phpimg} className="h-10 xl:h-20" alt="PHP" />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    PHP
                  </p>
                </div>
                {/* div3 */}
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img src={csharpimg} className="h-10 xl:h-20" alt="C#" />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    C#
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* 2nd Box */}
          <div className="flex flex-col items-center font-for-intro-2 font-semibold">
            <div className="flex justify-center font-for-intro-2 font-semibold ">
              Frameworks / Libraries
            </div>
            <div className="w-full flex justify-center ">
              <section className="flex flex-wrap justify-between w-3/4 overflow-hidden">
                {/* Row 1 */}
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img src={reactimg} className="h-10 xl:h-20" alt="React" />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    React
                  </p>
                </div>
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img
                    src={sweetalertimg}
                    className="h-10 xl:h-20"
                    alt="SweetAlert2"
                  />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    SweetAlert2
                  </p>
                </div>

                <div className="flex items-center flex-col p-4 w-1/3">
                  <img
                    src={bootstrapimg}
                    className="h-10 xl:h-20"
                    alt="Bootstrap"
                  />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    Bootstrap
                  </p>
                </div>

                {/* Row 2 */}
                <div className="flex items-center flex-col p-4 w-1/2">
                  <img
                    src={tailwindimg}
                    className="h-10 xl:h-20"
                    alt="Tailwind CSS"
                  />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    Tailwind CSS
                  </p>
                </div>
                <div className="flex items-center flex-col p-4 w-1/2">
                  <img src={threeimg} className="h-10 xl:h-20" alt="Three.js" />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    Three.js
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* 3rd Box */}
          <div className="flex flex-col items-center font-for-intro-2 font-semibold">
            <div className="flex justify-center font-for-intro-2 font-semibold ">
              Technologies / Tools
            </div>
            <div className="w-full flex justify-center ">
              <section className="flex flex-wrap justify-between w-3/4 overflow-hidden">
                {/* Row 1 */}
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img src={htmlimg} className="h-10 xl:h-20" alt="React" />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    HTML5
                  </p>
                </div>
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img
                    src={cssimg}
                    className="h-10 xl:h-20"
                    alt="Tailwind CSS"
                  />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    CSS3
                  </p>
                </div>
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img
                    src={githubimg}
                    className="h-10 xl:h-20"
                    alt="Bootstrap"
                  />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    Github
                  </p>
                </div>

                {/* Row 2 */}
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img
                    src={figmaimg}
                    className="h-10 xl:h-20"
                    alt="SweetAlert2"
                  />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    Figma
                  </p>
                </div>
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img
                    src={blenderimg}
                    className="h-10 xl:h-20"
                    alt="Three.js"
                  />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    Blender
                  </p>
                </div>
                <div className="flex items-center flex-col p-4 w-1/3">
                  <img
                    src={trelloimg}
                    className="h-10 xl:h-20"
                    alt="Three.js"
                  />
                  <p className="text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm font-semibold">
                    Trello
                  </p>
                </div>
              </section>
            </div>
          </div>
          {/* End of three divs */}
        </div>
      </section>
    </div>
  );
};

export default Skills2;
