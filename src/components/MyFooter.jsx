import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const MyFooterButtons = () => {
  const FooterButtonsPages = [
    { name: "Profile", path: "#Profile", offsetY: 150 },
    { name: "Projects", path: "#Projects", offsetY: 0 },
    { name: "Contact me", path: "#ContactMe", offsetY: 100 },
  ];

  const handleScroll = (path, offsetY) => {
    gsap.to(window, { duration: 1, scrollTo: { y: path, offsetY } });
  };

  return FooterButtonsPages.map((selected, index) => (
    <button
      key={index}
      className="scale-btns text-base text-left"
      onClick={() => handleScroll(selected.path, selected.offsetY)}
    >
      {selected.name}
    </button>
  ));
};

const MyFooterButtonsConnect = () => {
  const FooterButtonsConnect = [
    { name: "Facebook", path: "https://www.facebook.com/johanne.campos" },
    { name: "Instagram", path: "https://www.instagram.com/yohan.nnnnnnn/" },
    { name: "Twitter", path: "https://x.com/mark_johanne" },
    { name: "Github", path: "https://github.com/Yohanskie101" },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/campos-mark-johanne-v-78055831b/",
    },
  ];

  return FooterButtonsConnect.map((selected, index) => (
    <a
      href={selected.path}
      key={index}
      className="scale-btns text-base"
      target="_blank"
      rel="noopener noreferrer"
    >
      {selected.name}
    </a>
  ));
};

function MyFooter() {
  return (
    <div className="MyFooter-container w-full h-fit mb-3 mt-40 2xl:mt-56 xl:mt-56 lg:mt-44 md:mt-40 sm:mt-40">
      <div className="MyFooter-first-container flex gap-40">
        <div className="first-footer-div font-semibold text-xl w-80">
          Yohan's Personal Website
        </div>

        <div className="max-h-32 w-80 flex flex-col overflow-hidden flex-wrap">
          <p className="second-footer-div font-semibold text-xl">Pages</p>
          <div className="flex flex-col max-h-20 overflow-hidden flex-wrap">
            <MyFooterButtons />
          </div>
        </div>

        <div className="max-h-32 w-80 flex flex-col overflow-hidden flex-wrap">
          <p className="third-footer-div font-semibold text-xl">Connect</p>
          <div className="flex flex-col max-h-20 overflow-hidden flex-wrap">
            <MyFooterButtonsConnect />
          </div>
        </div>
      </div>

      <div className="MyFooter-second-container fourth-footer-div text-sm w-full text-center">
        Copyright @ 2024 Mark Johanne Campos. All rights Reserved
      </div>
    </div>
  );
}

export default MyFooter;
