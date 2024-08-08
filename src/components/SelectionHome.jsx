import React from "react";

const HoverSection = () => {
  const SelectArray = ["Profile", "Projects", "Resume", "Skills", "Contact"];

  return (
    <div className="Hover-Section-Container mr-28 py-16 gap-7">
      {SelectArray.map((selected, index) => {
        return (
          <p
            key={index}
            className="selection-text uppercase text-yellow-400 font-extrabold text-9xl cursor-pointer"
          >
            {selected}
          </p>
        );
      })}
    </div>
  );
};

export default SelectionHome;
