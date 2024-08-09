import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  //Framer project
  const projectRef = useRef(null);
  const isInViewProject = useInView(projectRef, { once: true });

  //Framer skills1
  const skills1Ref = useRef(null);
  const isInViewskills1 = useInView(skills1Ref, { once: true });

  //Framer skills2
  const skills2Ref = useRef(null);
  const isInViewskills2 = useInView(skills2Ref, { once: true });

  //Framer skills3
  const skills3Ref = useRef(null);
  const isInViewskills3 = useInView(skills3Ref, { once: true });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
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

      return () => {
        trigger.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, [isSmallScreen]);

  return (
    <div className="skills2-container relative mt-20 lg:mt-0">
      <section className="wrapper-404 lg:pt-40">
        <div
          className="skills-text font-for-intro relative block"
          ref={projectRef}
          style={{
            transform: isInViewProject ? "none" : "translateX(-100px)",
            opacity: isInViewProject ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          Skills
        </div>
        <div className="wrapper-container flex lg:gap-12">
          {/* 1st Box */}
          <div
            className="Skills-box box-div flex flex-col items-center font-for-intro-2 font-semibold"
            ref={skills1Ref}
            style={{
              transform: isInViewskills1
                ? "none"
                : isSmallScreen
                ? "translateX(-200px)"
                : "translateY(-200px)",
              opacity: isInViewskills1 ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
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
          <div
            className=" box-div flex flex-col items-center font-for-intro-2 font-semibold"
            ref={skills2Ref}
            style={{
              transform: isInViewskills2
                ? "none"
                : isSmallScreen
                ? "translateX(-200px)"
                : "translateY(100px)",
              opacity: isInViewskills2 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
            }}
          >
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
          <div
            className="box-div flex flex-col items-center font-for-intro-2 font-semibold"
            ref={skills3Ref}
            style={{
              transform: isInViewskills3
                ? "none"
                : isSmallScreen
                ? "translateX(-200px)"
                : "translateY(-200px)",
              opacity: isInViewskills3 ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
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
