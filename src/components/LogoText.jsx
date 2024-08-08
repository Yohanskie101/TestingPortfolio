import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LogoText = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      to="/"
      className="logo-container fixed top-5 left-5 2xl:left-14 xl:left-14 lg:left-14 md:left-14 2xl:top-10 xl:top-10 lg:top-10 md:top-10 cursor-pointer z-10"
    >
      <p
        className={`name-logo blacky ${
          isScrolled ? "scrolled" : ""
        } uppercase font-extrabold text-2xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl`}
      >
        Mark
      </p>
      <p
        className={`name-logo blacky ${
          isScrolled ? "scrolled" : ""
        } uppercase font-extrabold  text-2xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl`}
      >
        Johanne
      </p>
      <p
        className={`name-logo blacky ${
          isScrolled ? "scrolled" : ""
        } uppercase font-extrabold text-2xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl`}
      >
        Campos
      </p>
    </Link>
  );
};

export default LogoText;
