import Grad_Pic from "../assets/grad_pic.jpg";
import { useInView } from "framer-motion";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";

const WhoIsYohan = () => {
  //Framer image
  const imageRef = useRef(null);
  //Framer description
  const descriptRef = useRef(null);
  //Gsap Who is Yohan
  const textRef = useRef(null);

  //Framer image
  const isInViewImage = useInView(imageRef, { once: true });
  //Framer description
  const isInViewDescript = useInView(descriptRef, { once: true });
  //Gsap Who is Yohan
  const isInViewText = useInView(textRef, { once: true });

  //Gsap Who is Yohan
  useEffect(() => {
    if (isInViewText) {
      new SplitType("#my-text", { types: "chars" });

      gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
    }
  }, [isInViewText]);

  return (
    <div className="WhoIsYohan-container w-full h-fit gap-7 mt-40 2xl:mt-56 xl:mt-56 lg:mt-44 md:mt-40 sm:mt-40 relative  mb-40 2xl:mb-56 xl:mb-56 lg:mb-44 md:mb-40 sm:mb-40">
      <div className="image-grad-pic-container">
        <img
          ref={imageRef}
          className="image-grad-pic"
          src={Grad_Pic}
          alt="Description of image"
          style={{
            transform: isInViewImage ? "none" : "translateX(-100px)",
            opacity: isInViewImage ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        />
      </div>

      <div className="Full-description-container">
        <span
          className="Title-Who font-for-intro block font-semibold mb-3 2xl:mb-10 xl:mb-8 lg:mb-3"
          id="my-text"
          ref={textRef}
          style={{
            transform: isInViewText ? "none" : "translateY(115px)",
            opacity: isInViewText ? 1 : 0,
            transition: "all 0.9s ease 0.1s",
          }}
        >
          Who is Yohan?
        </span>

        <span
          className="My-full-name text-sm 2xl:text-xl xl:text-xl lg:text-lg sm:text-sm"
          ref={descriptRef}
          style={{
            transform: isInViewDescript ? "none" : "translateX(0px)",
            opacity: isInViewDescript ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          I graduated in 2024 with a Bachelor of Science in Information
          Technology, earning Cum Laude honors from Quezon City University. As a
          fresh graduate, I'm excited to start my career in web development.
          While I don't have formal work experience yet, my academic background
          has given me a strong foundation in the field. In my free time, I
          enjoy playing online games, which is one of my hobbies.
          <br></br>
          <br></br> I am a friendly person who loves interacting with others and
          am naturally curious, always eager to search for information and ask
          questions. It’s nice to meet you!
        </span>
      </div>
    </div>
  );
};

export default WhoIsYohan;
