import React from "react";
import { motion } from "framer-motion";

function Introduction() {
  return (
    <div className="Introduction-container w-fit mt-40 h-fit 2xl:mt-56 xl:mt-56 lg:mt-44 md:mt-40 sm:mt-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p className="font-for-intro font-semibold text-center ">
          <span className="text-custom-green">Hey there, I'm Yohan!</span> I'm
          an aspiring front-end junior developer passionate about creating
          dynamic and visually appealing websites.
        </p>
      </motion.div>
    </div>
  );
}

export default Introduction;
