import React, { useEffect } from "react";
import LogoText from "../components/LogoText";
import ThemeControl from "../components/ThemeControl";
import Introduction from "../components/Introduction";
import WhoIsYohan from "../components/WhoIsYohan";
import Myfooter from "../components/MyFooter";
import Projects from "./Projects";
import ContactMe from "../components/ContactMe";
import Skills from "../components/Skills";
import Skills2 from "../components/Skills2";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import transition from "../transition";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Profile() {
  useEffect(() => {
    // Any GSAP animations or ScrollTrigger setups specific to this component
  }, []);

  return (
    <div className="profile-body min-h-screen">
      <div className="container">
        <LogoText />
        <ThemeControl />
        <div id="Introduction">
          <Introduction />
        </div>
        <div id="Profile">
          <WhoIsYohan />
        </div>
        <div id="Skills">
          <Skills />
          <Skills2 />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="ContactMe">
          <ContactMe />
        </div>
        <Myfooter />
      </div>
    </div>
  );
}

export default transition(Profile);
