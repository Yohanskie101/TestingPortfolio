import React from "react";
import { Link } from "react-router-dom";
import transition from "../transition";

const HoverSection = () => {
  const SelectArray = [
    { name: "Profile", path: "/profile" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="Hover-Section-Container mr-28 py-16 gap-7">
      {SelectArray.map((selected, index) => {
        return (
          <Link
            to={selected.path}
            key={index}
            className="selection-text uppercase text-yellow-400 font-extrabold text-9xl cursor-pointer"
          >
            {selected.name}
          </Link>
        );
      })}
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo-container fixed top-3/4 cursor-pointer">
      <p className="name-logo text-white uppercase font-extrabold text-5xl">
        Mark
      </p>
      <p className="name-logo text-white uppercase font-extrabold text-5xl">
        Johanne
      </p>
      <p className="name-logo text-white uppercase font-extrabold text-5xl">
        Campos
      </p>
    </div>
  );
};

function Home() {
  return (
    <div className="home-body min-h-screen">
      <div className=" container">
        <HoverSection />
        <Logo />
      </div>
    </div>
  );
}

export default transition(Home);
